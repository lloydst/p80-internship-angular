var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var fs = require("fs");
var grid = require("gridfs-stream");
var Image = require("../models/Image")
var mongoose = require("mongoose")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

const MONGOURI = process.env.MONGOURI || 'someback-upaddress';
// this .env file should be added to .gitignore since it contains passwords
mongoose.connect( MONGOURI)
 /**
   * @swagger
   * /Upload:
   *   post:
   *     description: uploads a image
   *     tags: [Image]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Post
   *         schema:
   *           type: object
   *           $ref: '#/definitions/image'
   */
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
        res.send('Completed');
    });
  });
   /**
   * @swagger
   * /images-all:
   *   get:
   *     description: gets all images
   *     tags: [Image]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Get
   *         schema:
   *           type: object
   *           $ref: '#/definitions/image'
   */
  router.get("/images-all", function(req, res){
    Image.find(function(err, images) {
      if (err){
          res.send(err);
      }
      res.json(images);
  });
  })
   /**
   * @swagger
   * /img/:image_identifier:
   *   get:
   *     description: creates a message
   *     tags: [Image]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Post
   *         schema:
   *           type: object
   *           $ref: '#/definitions/image'
   */
  router.get("/img/:image", function(req, res){
    grid.mongo = mongoose.mongo;
    var gfs = grid(db.db);
    var readstream = gfs.createReadStream({
      filename: req.params.image
   });
   
  readstream.pipe(res) // returns the img
  })
  /**
   * @swagger
   * /img/:filename:
   *   delete:
   *     description: deletes the img with filename
   *     tags: [Image]
   *     responses:
   *       200:
   *         description: Delete
   *         schema:
   *           type: file/blob
   *           $ref: '#definitions/image'
   */
  router.delete('/img/:image',function(req,res) {
      grid.mongo = mongoose.mongo;
      var gfs = grid(db.db);
      gfs.remove({
        filename: req.params.image
        }, function (err,succes) {
          if (err) {
              console.log(err)
            };
         res.send(succes)
        });
  })
  

  module.exports = router;