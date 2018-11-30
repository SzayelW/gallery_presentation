const mongoose = require('mongoose');
const { Schema } = mongoose;

const imagenesSchema = new Schema({
    ruta: String,
    archivo: {type: Boolean, default: false}
});

module.exports = imagenesSchema;