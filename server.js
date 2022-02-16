const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const consign = require("consign");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

//cria uma pasta estática para carregar arquivos para o front como o js
app.use(express.static(path.join(__dirname, "public")));

// utilizado para fazer alterações no front vindas do back
app.set("view engine", "ejs");

// utilizado para meio que exportar meus controllers para uma pasta separada
consign().include("controllers").into(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
