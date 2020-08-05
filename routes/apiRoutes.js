
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

 }

