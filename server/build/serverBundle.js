/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/config/keys.dev.js":
/*!***********************************!*\
  !*** ./server/config/keys.dev.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    databaseURL: 'mongodb://d_admin:d_password1@ds257077.mlab.com:57077/galeria_dev',\r\n    cookieSessionKey: 'a1aps00s90ccclvj6755x/.sd.dd',\r\n  };\n\n//# sourceURL=webpack:///./server/config/keys.dev.js?");

/***/ }),

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("if(false){}else{\r\n    module.exports = __webpack_require__(/*! ./keys.dev */ \"./server/config/keys.dev.js\");\r\n}\n\n//# sourceURL=webpack:///./server/config/keys.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst cookieSession = __webpack_require__(/*! cookie-session */ \"cookie-session\");\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst passport = __webpack_require__(/*! passport */ \"passport\");\r\nconst keys = __webpack_require__(/*! ./config/keys */ \"./server/config/keys.js\");\r\n__webpack_require__(/*! ./models/usuarios.model */ \"./server/models/usuarios.model.js\");\r\n__webpack_require__(/*! ./models/galerias.model */ \"./server/models/galerias.model.js\");\r\n__webpack_require__(/*! ./services/passport */ \"./server/services/passport.js\");\r\n\r\nconst app = express();\r\nconst PORT = process.env.PORT || 7771;\r\n\r\n\r\nmongoose.connect(keys.databaseURL,{ useNewUrlParser: true });\r\n\r\napp.use(bodyParser.json());\r\napp.use(\r\n    cookieSession({\r\n        name:'localcookie777',\r\n        maxAge: 40 * 24 * 60 * 60 * 1000,\r\n        keys: [keys.cookieSessionKey]\r\n    })\r\n);\r\napp.use(passport.initialize());\r\napp.use(passport.session());\r\n\r\n__webpack_require__(/*! ./routes/authRoutes */ \"./server/routes/authRoutes.js\")(app);\r\n__webpack_require__(/*! ./routes/galeriaRoutes */ \"./server/routes/galeriaRoutes.js\")(app);\r\n\r\n\r\napp.use(express.static(path.resolve(\"uploads\")));\r\napp.use(express.static(path.resolve(\"client\",\"build\")));\r\napp.get(\"*\", (req, res) => {\r\n    if(req.url.match('/uploads/users/')){\r\n        const file = req.url.split('/').filter(r => r.trim()).reverse();\r\n        if(file.length >= 4) res.sendFile(path.resolve(\"uploads\", \"users\", file[1], file[0] ));\r\n        else res.status(404).send('Not found');\r\n    }else{\r\n        res.sendFile(path.resolve(\"client\", \"build\", \"index.html\"));\r\n    }\r\n});\r\n\r\napp.listen(PORT, ()=>{\r\n    console.log(`app listening on port: ${PORT} ${\"development\"}`);\r\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/models/galerias.model.js":
/*!*****************************************!*\
  !*** ./server/models/galerias.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst { Schema } = mongoose;\r\nconst imagenesSchema = __webpack_require__(/*! ./imagenes.model */ \"./server/models/imagenes.model.js\");\r\n\r\nconst galeriaSchema = new Schema({\r\n    usuarioId: { type: Schema.Types.ObjectId, ref: 'usuarios'},\r\n    nombre: String,\r\n    descripcion: String,\r\n    activa: { type: Boolean, default: false},\r\n    eliminado: { type: Boolean, default: false},\r\n    imagenes: [imagenesSchema]\r\n});\r\n\r\nmongoose.model('galerias', galeriaSchema);\n\n//# sourceURL=webpack:///./server/models/galerias.model.js?");

/***/ }),

/***/ "./server/models/imagenes.model.js":
/*!*****************************************!*\
  !*** ./server/models/imagenes.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst { Schema } = mongoose;\r\n\r\nconst imagenesSchema = new Schema({\r\n    ruta: String,\r\n    archivo: {type: Boolean, default: false}\r\n});\r\n\r\nmodule.exports = imagenesSchema;\n\n//# sourceURL=webpack:///./server/models/imagenes.model.js?");

/***/ }),

/***/ "./server/models/usuarios.model.js":
/*!*****************************************!*\
  !*** ./server/models/usuarios.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst { Schema } = mongoose;\r\n\r\nconst usuarioSchema = new Schema({\r\n  username: String, \r\n  password: String\r\n});\r\n\r\nusuarioSchema.methods.validPassword = function(password) {\r\n  return (this.password === password);\r\n};\r\n\r\nmongoose.model('usuarios', usuarioSchema);\r\n\n\n//# sourceURL=webpack:///./server/models/usuarios.model.js?");

/***/ }),

/***/ "./server/routes/authRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/authRoutes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const passport = __webpack_require__(/*! passport */ \"passport\");\r\n\r\nmodule.exports = (app) => {\r\n    app.post('/api/login', passport.authenticate('local'), (req, res) =>{\r\n        res.send(req.user);\r\n    });\r\n\r\n    app.get('/api/current_user', (req, res)=>{\r\n        res.send(req.user);\r\n    });\r\n\r\n    app.get('/api/logout', (req, res)=>{\r\n        req.logout();\r\n        res.redirect('/');\r\n    })\r\n}\n\n//# sourceURL=webpack:///./server/routes/authRoutes.js?");

/***/ }),

/***/ "./server/routes/galeriaRoutes.js":
/*!****************************************!*\
  !*** ./server/routes/galeriaRoutes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const multer = __webpack_require__(/*! multer */ \"multer\");\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst GaleriasModel = mongoose.model('galerias');\r\n\r\nconst storage = multer.diskStorage({\r\n    destination: function(req, file, cb) {\r\n        const userPath = `uploads/users/${req.user.id}/`;\r\n        if(fs.existsSync(userPath)){\r\n            cb(null, userPath);\r\n        }else{\r\n            fs.mkdir(userPath, { recursive: true }, (err) => {\r\n                if (err) throw err;\r\n                else cb(null, userPath);\r\n              });\r\n        }\r\n    },\r\n    filename: function(req, file, cb){\r\n        cb(null, Date.now() + '_' + file.originalname.replace(/\\s/g, \"_\"));\r\n    }\r\n});\r\n\r\nconst fileFilter = (req, file, cb)=>{\r\n    cb(null, file.mimetype.startsWith('image/'));\r\n}\r\n\r\nconst upload = multer({ storage, fileFilter});\r\n\r\nconst eliminaArchivosMayoresAPesoMaximo = (file) => {\r\n    const pesoMaximo = 0.5*1024*1024;\r\n    if(file.size > pesoMaximo){\r\n        eliminaImagen(file.path);\r\n        return null;\r\n    } \r\n    return file;\r\n};\r\nconst eliminaImagen = (ruta) => {\r\n    fs.unlink(ruta, (err) => {\r\n        if (err) throw err;\r\n        console.log(ruta + ' fue eliminado');\r\n      });\r\n}\r\n\r\nmodule.exports = (app) =>{\r\n    \r\n    app.post('/api/galeria/nuevo', upload.array('imagenesDZ'), async (req, res)=> {\r\n        const { nombre, descripcion} = req.body;\r\n        let imagenes = [];\r\n        if(req.files){            \r\n            req.files = req.files.map(eliminaArchivosMayoresAPesoMaximo).filter( f => f !== null);\r\n            imagenes = req.files.map(f => ({ruta: f.destination + f.filename, archivo: true}));\r\n        }\r\n\r\n        const galeriaNueva = await new GaleriasModel({ nombre, descripcion, usuarioId: req.user.id, imagenes }).save();\r\n        res.send(galeriaNueva);\r\n    });\r\n\r\n    app.put('/api/galeria/editar', upload.array('imagenesDZ'), async(req, res) => {\r\n        let { _id, nombre, descripcion, imagenesEliminadas} = req.body;\r\n        let imagenes = [];\r\n        \r\n        if(req.files){\r\n            req.files = req.files.map(eliminaArchivosMayoresAPesoMaximo).filter( f => f !== null);\r\n            imagenes = req.files.map(f => ({ruta: f.destination + f.filename, archivo: true}));\r\n        }\r\n        if(imagenesEliminadas){\r\n            imagenesEliminadas = JSON.parse(imagenesEliminadas);\r\n            imagenesEliminadas.forEach(async img => {\r\n                await GaleriasModel.findByIdAndUpdate({_id}, {$pull: {imagenes: { _id: img._id } } }).exec();\r\n                eliminaImagen(img.ruta);\r\n            });\r\n        }\r\n        const galeriaEditada = await GaleriasModel.findOneAndUpdate(\r\n            { _id},\r\n            {\r\n                $set: {nombre, descripcion},\r\n                $push: {imagenes}\r\n            },\r\n            {new: true})\r\n            .exec();\r\n        res.send(galeriaEditada);\r\n    })\r\n\r\n    app.get('/galerias_usuario', async (req, res) => {\r\n       const galeriasUsuario = await GaleriasModel.find({usuarioId: req.user.id});\r\n       res.send(galeriasUsuario); \r\n    });\r\n\r\n    app.post('/galerias_usuario/set_activa', async (req, res) => {\r\n        const { galeriaId, activa } = req.body;\r\n        let galeriaActiva = {};\r\n        try{\r\n            if(activa){\r\n                await GaleriasModel.findOneAndUpdate({usuarioId: req.user.id, activa: true},{$set: {activa: false}}).exec();\r\n            }\r\n            galeriaActiva = await GaleriasModel.findByIdAndUpdate(galeriaId, { $set: {activa: activa} }, {new: true}).exec();\r\n            res.send(galeriaActiva);\r\n        }catch(e){\r\n            console.log(e);\r\n        }       \r\n    });\r\n\r\n    app.delete('/galerias_usuario/eliminar', async (req, res) => {\r\n        try{\r\n            const galeria = await GaleriasModel.findById(req.body.galeriaId);\r\n            if(galeria.imagenes){\r\n                galeria.imagenes.forEach( i => eliminaImagen(i.ruta));\r\n            }\r\n            await GaleriasModel.findByIdAndDelete(req.body.galeriaId, (err, doc)=>{\r\n                if(!err) return res.send(doc);\r\n            }).exec();\r\n            res.send(galeria);\r\n        }catch(e){\r\n            console.log(e);\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./server/routes/galeriaRoutes.js?");

/***/ }),

/***/ "./server/services/passport.js":
/*!*************************************!*\
  !*** ./server/services/passport.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const passport = __webpack_require__(/*! passport */ \"passport\");\r\nconst LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst Usuarios = mongoose.model('usuarios');\r\n\r\npassport.serializeUser((user, done) => {\r\n    done(null, user.id);\r\n  });\r\n  \r\n  passport.deserializeUser((id, done) => {\r\n    Usuarios.findById(id).then(user => {\r\n      done(null, user);\r\n    });\r\n  });\r\n\r\npassport.use(new LocalStrategy(\r\n    async function(username, password, done) {\r\n      /*User.findOne({ username: username }, function (err, user) {\r\n        if (err) { return done(err); }\r\n        if (!user) { return done(null, false); }\r\n        if (!user.verifyPassword(password)) { return done(null, false); }\r\n        return done(null, user);\r\n      });*/\r\n\r\n      let existingUser = await Usuarios.findOne({ username: username });\r\n      if (!existingUser) {\r\n        existingUser = await new Usuarios({ username, password }).save();\r\n      }\r\n      return done(null, existingUser);\r\n    }\r\n  ));\n\n//# sourceURL=webpack:///./server/services/passport.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });