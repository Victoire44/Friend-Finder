var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')


var app = express();

var PORT = process.env.PORT || 3600;

app.use(bodyParser.json({ strict: false }));

app.use(express.static("app"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
