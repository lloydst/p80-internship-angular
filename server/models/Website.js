
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var WebsiteSchema = new Schema({
  name: String,
  url: String,
  visable:{
    type: Boolean,
  default: false},
  displayTime: Number
});

var Website = mongoose.model('Website', WebsiteSchema);

// make this available to our users in our Node applications
module.exports = Website;
