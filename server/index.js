const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7771;



app.get('/api/',(req,res)=> res.send({msj: `hola`}));

app.use(express.static(path.resolve("client","build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });

app.listen(PORT, ()=>{
    console.log(`app listening on port: ${PORT}`);
});