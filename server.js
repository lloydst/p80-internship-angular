const express =require('express')
const app = require('express')();
const path = require('path');
const api = require('./server/routes/index'); // route example
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);

// mongoose setup
const MONGOURI = process.env.MONGOURI || 'someback-upaddress';
// this .env file should be added to .gitignore since it contains passwords
mongoose.connect( MONGOURI, {useMongoClient: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'dist'))) // angular project
// the app.use that's commented out below is for static file hosting: like images text file's music
// app.use('/myuri', express.static(path.join(__dirname,'./file location relative to this file')));
app.use('/api',api) // route example creates url's like: <host>/users/<routes from file>
app.use('*',express.static(path.join(__dirname, 'dist'))) //routes anything not caught by the routes above to your angular project if possible

const port = process.env.PORT||3000; // PORT is another variable that can be placed in the .env file
server.listen(process.env.PORT||3000, function(){
  console.log('Example app listening on port ' + port +'!')
})

// socket io connections
const connections = [];

io.on('connection',(socket) => {
  connections.push(socket);
  console.log(' %s sockets is connected', connections.length);

  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1);
  });
  socket.on('sending message', (message) => {
    console.log('Message is received :', message);
    
    io.sockets.emit('new message', {message: message});
  });
  socket.on('new-message', (message) => {
    io.emit(message);
  });
});