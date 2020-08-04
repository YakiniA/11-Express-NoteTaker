
// DEPENDENCIES

var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION

var app = express();

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
