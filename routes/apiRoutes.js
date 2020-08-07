
const fs = require("fs");
const path = require("path");
var db = require("../db/db.json");

// ROUTING
var pathForJSON = path.join(__dirname, '../db/db.json');

 module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        db = JSON.parse(fs.readFileSync(pathForJSON, "utf8"));
        // Random number for id. Also referred to perform delete operation
        const myRnId = () => parseInt(50 * Math.random());
        req.body.id = myRnId();
        db.push(req.body);
        let note = JSON.stringify(db);
        savedb(note);
        res.json(note);
        });


    app.delete("/api/notes/:id", function (req,res) {
        db = JSON.parse(fs.readFileSync(pathForJSON, "utf8"));
        //Getting the id from req.params to remove that particular note from db.json
        const id = req.params.id;
        //Used filter to perform delete operation
        db = db.filter(selectNote => {
            return selectNote.id != id;
        });
        let note1 = JSON.stringify(db);
        savedb(note1);
        res.json(db);
    });

    // Function to save the notes to db.json file
    function savedb(note) {
        fs.writeFileSync(pathForJSON, note, "utf8", function(err) {
        if (err) console.log ('error')
        return `Done`;
    });
   }
 }

