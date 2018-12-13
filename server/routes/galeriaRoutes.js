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
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage});

module.exports = (app) =>{
    
    app.post('/api/galeria/nuevo', upload.array('imagenes'), async (req, res)=> {
        const { nombre, descripcion} = req.body;
        
        let imagenes = [];
        if(req.files){
            imagenes = req.files.map(f => ({ruta: f.destination + f.filename, archivo: true}));
        }else{
            res.send('sin archivo');
        }
        const galeriaNueva = await new GaleriasModel({ nombre, descripcion, usuarioId: req.user.id, imagenes }).save();
        res.send(galeriaNueva);
    });

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
        }catch(e){
            console.log(e);
        }
        res.send(galeriaActiva);
    });
}