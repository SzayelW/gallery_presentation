const mongoose = require('mongoose');
const { Schema } = mongoose;
const imagenesSchema = require('./imagenes.model');

const galeriaSchema = new Schema({
    usuarioId: { type: Schema.Types.ObjectId, ref: 'usuarios'},
    nombre: String,
    eliminado: { type: Boolean, default: false},
    imagenes: [imagenesSchema]
});

mongoose.model('galerias', galeriaSchema);