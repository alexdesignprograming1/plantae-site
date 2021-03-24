const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// View Engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/shop", (req, res) => {
  res.render("shop");
})

app.get("/product-page", (req, res) => {
  res.render("shop-details");
})

app.listen(8080, () => {
  console.log("O servidor está rodando!");
});