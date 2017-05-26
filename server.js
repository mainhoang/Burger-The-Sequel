var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var port = process.env.PORT || 3000;
var db = require('./models');
var app = express();

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log('SERVER is running on ' + port);
    });
});
