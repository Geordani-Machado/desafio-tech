
const express = require('express');
const bodyParser = require("body-parser");
const queryString = require('querystring');
const fs = require('fs');
const app = express().use(bodyParser.json());

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.post('/imc',  (req, res)=>{
const{
  Altura, Peso
} = req.body
      var imc =  Peso / (Altura * Altura);
      res.send(`seu imc é de ${imc}`);

      console.log(req.body)
  });


