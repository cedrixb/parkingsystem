const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'public');

app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("./pages/index");
});

app.get("/parkingslotslist", function (req, res) {
	res.render("./pages/parkingslotslist");
});

app.listen(3000, function () {
	console.log("SERVER STARTED ON localhost:3000");
})