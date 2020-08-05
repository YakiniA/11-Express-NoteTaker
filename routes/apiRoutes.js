
const fs = require("fs");
const path = require("path");
// var db = require("../db/db.json");

// ROUTING

var pathForJSON = path.join(__dirname, '../db/db.json');
console.log(pathForJSON);
let dataArr = [];

 module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        dataArr = fs.readFile(pathForJSON, "utf8", function(err, data) {
        if (err) {
            throw err;
        }

        dataArr = JSON.parse(dataArr);
        console.log(JSON.parse(dataArr));
        res.json(dataArr);
        }); 
 });


   app.post("/api/notes", function(req, res) {

        dataArr = fs.readFileSync(pathForJSON, "utf8");
        console.log("....Write....");
        console.log(dataArr)

        dataArr = JSON.parse(dataArr);
        //   req.body.id = noteArr.length;
        dataArr.push(req.body);
        dataArr = JSON.stringify(dataArr);
        
        fs.writeFileSync(pathForJSON, dataArr, "utf8", function(err) {
        
            if (err) {
            console.log ('error')
            }
        });
        res.json(JSON.parse(dataArr));
        });
  
 }

