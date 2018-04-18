var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var fs = require("fs");
var grid = require("gridfs-stream");

router.get("/:image", function(req, res){
    grid.mongo = mongoose.mongo;
    var gfs = grid(db.db);
    var readstream = gfs.createReadStream({
      filename: req.params.image
   });
   
  readstream.pipe(res) // returns the img
  })
  router.get("/", function(req, res){
    grid.mongo = mongoose.mongo;
    var gfs = grid(db.db);
    gfs.files.find({ filename: String }).toArray(function (err, files) {
      if (err){
      console.log(files);}
      console.log(files)
    })
  })
  router.post('/Upload', function (req, res) {
    var form = new formidable.IncomingForm();
    // form.uploadDir = __dirname+"/uploads"; // would write it to uploads folder but would also parse the name
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
        if (!err) {
            console.log('Files Uploaded: ' + files.file.path)
            grid.mongo = mongoose.mongo;
            var gfs = grid(db.db);
            var writestream = gfs.createWriteStream({
                filename: files.file.name
            });
            fs.createReadStream(files.file.path).pipe(writestream); // writes it to db
        }
    });
    form.on('end', function () {
        res.send('Completed ... go check fs.files & fs.chunks in mongodb');
    });
  });

  module.exports = router;