const express =require('express')
const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const formidable = require("formidable");
const fs = require("fs");
const grid = require("gridfs-stream");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const swaggerUi = require('swagger-ui-express');
const Image = require('./server/models/Image')

// configs
const swaggerSpec = require('./server/config/swagger')
const dotenv = require('dotenv').config();

// routes
const api = require('./server/routes/index'); //crud routes messages and websites

// mongoose setup
const MONGOURI = process.env.MONGOURI || 'someback-upaddress';
// this .env file should be added to .gitignore since it contains passwords
mongoose.connect( MONGOURI, {useMongoClient: true})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// middle wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'dist'))) // angular project

// available everywhere but while in production
if (process.env != 'production') {
  app.use('/docs', express.static(path.join(__dirname, 'docs')))
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.get('/api-docs.json', function(req, res) { // line 41 
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
app.post('/Upload', function (req, res) {
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
app.get("/images/:image", function(req, res){
  grid.mongo = mongoose.mongo;
  var gfs = grid(db.db);
  var readstream = gfs.createReadStream({
    filename: req.params.image
 });
 
readstream.pipe(res) // returns the img
})



app.use('/api',api) // route example creates url's like: <host>/users/<routes from file>
// app.use('/file',files);
app.use('/public', express.static(path.join(__dirname, 'server/public')))
app.use('*',express.static(path.join(__dirname, 'dist'))) //routes anything not caught by the routes above to your angular project if possible

const port = process.env.PORT||3000; // PORT is another variable that can be placed in the .env file
http.listen(process.env.PORT||3000, function(){
  console.log('Example app listening on port ' + port +'!')
})

// socket io connections / setup
function databaseStore(message) {
  let storeData = { message: message, timestamp: new Date().getTime() }
  db.collection('messages').save(storeData, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
  })
}

const connections = [];

io.on('connection', (socket) => {

  console.log('user connected');

  socket.on('disconnect', function() {
      console.log('user disconnected');
  });
  
   // socket.on( event to listen too:string, function(){return/do something})
   
  socket.on('add-message', (message) => {
      io.emit('message', { type: 'new-message', text: message }); // i believe the object part is responsible for live reload
      // Function above that stores the message in the database
      databaseStore(message)         // this would store it in a db as well
  });

});

