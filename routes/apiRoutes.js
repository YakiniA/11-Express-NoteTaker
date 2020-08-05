
const fs = require("fs");
const path = require("path");
var db = require("../db/db.json");

// ROUTING

var pathForJSON = path.join(__dirname, '../db/db.json');
console.log(pathForJSON);
let dataArr = [];

 module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

    console.log(db);
        
    res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        console.log(req.body);
  
        req.body.id = db.length +1 ;
        db.push(req.body);
        let note = JSON.stringify(db);
        fs.writeFileSync(pathForJSON, note, "utf8", function(err) {
        
            if (err) {
            console.log ('error')
            }
        });
        res.json(note);
        });


 }

