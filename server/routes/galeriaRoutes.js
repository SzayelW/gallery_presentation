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
        const galeriaNueva = await new GaleriasModel({ nombre, descripcion, usuarioId: req.user.id, imagenes });
        res.send(galeriaNueva);
    });
}