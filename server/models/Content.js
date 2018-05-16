
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var ContentSchema = new Schema({
  channel: String,
  path: {
      type: Array,
      components: {
        type: Object,
        pathUrl: String,
        description: String,
        componentName: String,
        delay: Number
      }
    }
});
var Content = mongoose.model('Content', ContentSchema);



// make this available to our users in our Node applications
module.exports = Content;
