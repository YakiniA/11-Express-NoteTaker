
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
        savedb(note);
        res.json(note);
        });


        app.delete("/api/notes/:id", function (req,res) {
            const id = req.params.id;
            console.log(id);
            //Get the id from req.params to remove a note from db.json
            db.splice(id, 1);
            let note1 = JSON.stringify(db);
            console.log("Notes after Delete");
            console.log(note1);
            savedb(note1);
            res.json({id: id})
        });


    function savedb(note) {
        fs.writeFileSync(pathForJSON, note, "utf8", function(err) {
        
        if (err) console.log ('error')
    
        return `Done`;
    });
   }


 }

