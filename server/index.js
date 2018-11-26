const express = require('express');

const app = express();
const PORT = process.env.PORT || 7771;

app.get('/', (req,res)=>{
    res.send(`hola`)
});

app.listen(PORT, ()=>{
    console.log(`app listening on port: ${PORT}`);
});