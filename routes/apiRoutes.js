
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
 

  app.get("/api/notes", function(req, res) {
    res.json(JSON.parse(data));
  });
});


  app.post("/api/notes", function(req, res) {
   // JSON.stringify(data, null, '\t')
   console.log(req.body);
  var storedData = [];
storedData.push(JSON.stringify(req.body));
console.log(storedData);
fs.appendFile(pathForJSON,  storedData, function(err) {
        if (err) {
          return console.log(err);
        }
    
        res.json(true);
        console.log("Success!");
    
      });
   
      
  });
  
}

