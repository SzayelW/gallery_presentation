const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  username: String, 
  password: String
});

usuarioSchema.methods.validPassword = function(password) {
  return (this.password === password);
};

mongoose.model('usuarios', usuarioSchema);
