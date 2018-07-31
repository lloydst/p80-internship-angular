const express =require('express')
const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const swaggerUi = require('swagger-ui-express');

// configs
const swaggerSpec = require('./server/config/swagger')
const dotenv = require('dotenv').config(); // not used in production

// routes
const api = require('./server/routes/index'); //crud routes messages and websites
const images = require('./server/routes/images')
//

// mongoose setup
const MONGOURI = process.env.MONGOURI ;
mongoose.connect( MONGOURI, {useMongoClient: true}) // future ready 
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, PUT');
  next();
});

// middle wares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'dist'))) // angular project

// available everywhere but while in production
if (process.env.NODE_ENV != 'production') {
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
app.use('/images',images) // post and read
app.use('/api', api)
app.use('/public', express.static(path.join(__dirname, 'server/public'))) // css and the like
app.use('*',express.static(path.join(__dirname, 'dist'))) //routes anything not caught by the routes above to your angular project if possible

const port = process.env.PORT||3000; // PORT is another variable that can be placed in the .env file
http.listen(process.env.PORT||3000, function(){
  console.log('Example app listening on port ' + port +'! in ' +process.env.NODE_ENV)
})

module.exports = db
module.exports = mongoose