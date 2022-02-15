const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const consign = require("consign");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

consign().include("controllers").into(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
