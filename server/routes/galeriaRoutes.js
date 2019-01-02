const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const GaleriasModel = mongoose.model('galerias');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const userPath = `uploads/users/${req.user.id}/`;
        if(fs.existsSync(userPath)){
            cb(null, userPath);
        }else{
            fs.mkdir(userPath, { recursive: true }, (err) => {
                if (err) throw err;
                else cb(null, userPath);
              });
        }
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '_' + file.originalname.replace(/\s/g, "_"));
    }
});

const fileFilter = (req, file, cb)=>{
    cb(null, file.mimetype.startsWith('image/'));
}

const upload = multer({ storage, fileFilter});

const eliminaArchivosMayoresAPesoMaximo = (file) => {
    const pesoMaximo = 0.5*1024*1024;
    if(file.size > pesoMaximo){
        eliminaImagen(file.path);
        return null;
    } 
    return file;
};
const eliminaImagen = (ruta) => {
    fs.unlink(ruta, (err) => {
        if (err) throw err;
        console.log(ruta + ' fue eliminado');
      });
}

module.exports = (app) =>{
    
    app.post('/api/galeria/nuevo', upload.array('imagenesDZ'), async (req, res)=> {
        const { nombre, descripcion} = req.body;
        let imagenes = [];
        if(req.files){            
            req.files = req.files.map(eliminaArchivosMayoresAPesoMaximo).filter( f => f !== null);
            imagenes = req.files.map(f => ({ruta: f.destination + f.filename, archivo: true}));
        }

        const galeriaNueva = await new GaleriasModel({ nombre, descripcion, usuarioId: req.user.id, imagenes }).save();
        res.send(galeriaNueva);
    });

    app.put('/api/galeria/editar', upload.array('imagenesDZ'), async(req, res) => {
        let { _id, nombre, descripcion, imagenesEliminadas} = req.body;
        let imagenes = [];
        
        if(req.files){
            req.files = req.files.map(eliminaArchivosMayoresAPesoMaximo).filter( f => f !== null);
            imagenes = req.files.map(f => ({ruta: f.destination + f.filename, archivo: true}));
        }
        if(imagenesEliminadas){
            imagenesEliminadas = JSON.parse(imagenesEliminadas);
            imagenesEliminadas.forEach(async img => {
                await GaleriasModel.findByIdAndUpdate({_id}, {$pull: {imagenes: { _id: img._id } } }).exec();
                eliminaImagen(img.ruta);
            });
        }
        const galeriaEditada = await GaleriasModel.findOneAndUpdate(
            { _id},
            {
                $set: {nombre, descripcion},
                $push: {imagenes}
            },
            {new: true})
            .exec();
        res.send(galeriaEditada);
    })

    app.get('/galerias_usuario', async (req, res) => {
       const galeriasUsuario = await GaleriasModel.find({usuarioId: req.user.id});
       res.send(galeriasUsuario); 
    });

    app.post('/galerias_usuario/set_activa', async (req, res) => {
        const { galeriaId, activa } = req.body;
        let galeriaActiva = {};
        try{
            if(activa){
                await GaleriasModel.findOneAndUpdate({usuarioId: req.user.id, activa: true},{$set: {activa: false}}).exec();
            }
            galeriaActiva = await GaleriasModel.findByIdAndUpdate(galeriaId, { $set: {activa: activa} }, {new: true}).exec();
            res.send(galeriaActiva);
        }catch(e){
            console.log(e);
        }       
    });

    app.delete('/galerias_usuario/eliminar', async (req, res) => {
        try{
            const galeria = await GaleriasModel.findById(req.body.galeriaId);
            if(galeria.imagenes){
                galeria.imagenes.forEach( i => eliminaImagen(i.ruta));
            }
            await GaleriasModel.findByIdAndDelete(req.body.galeriaId, (err, doc)=>{
                if(!err) return res.send(doc);
            }).exec();
            res.send(galeria);
        }catch(e){
            console.log(e);
        }
    });
}