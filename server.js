
// DEPENDENCIES

var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

// EXPRESS CONFIGURATION

var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use css
app.use(express.static("public"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});