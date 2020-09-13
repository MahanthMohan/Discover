const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/", function(req, res) {
    res.render("about", {
        name: req.body.name,
        about: req.body.about,
        image: req.body.image,
    });
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.listen(process.env.PORT || 7000);
console.log("Express running on port 7000");