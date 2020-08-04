
const fs = require("fs");
const path = require("path");
// var db = require("../db/db.json");

// ROUTING
console.log(__dirname);
var pathForJSON = path.join(__dirname, '../db/db.json');
console.log(pathForJSON);

module.exports = function(app) {

fs.readFile(pathForJSON, "utf8", function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  // Parse the JSON string to an object
  console.log(JSON.stringify(data, null, 2));
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });
});
}

