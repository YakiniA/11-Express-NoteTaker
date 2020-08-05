
// DEPENDENCIES

var express = require("express");
var path = require("path");
var fs = require("fs");
console.log(__dirname);
var indexJSFile = require("./assets/js/index.js");
// EXPRESS CONFIGURATION

var app = express();

var pathForJSON = path.join(__dirname, './db/db.json');

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});


// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

fs.readFile(pathForJSON, "utf8", function(err, data) {
  if (err) {
    throw err;
  }
   var parsedData = JSON.parse(data);
  console.log(parsedData);
  // var dataParsed = $.parseJSON(data);

  indexJSFile.renderNoteList(data);

});