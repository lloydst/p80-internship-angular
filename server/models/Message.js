
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: String,
  timestamp: Number
});
const Message = mongoose.model('Message', MessageSchema);


function getAll() {
    Message.find()
}
function getOne(err, id) {
    if(err){
        throw err
    }
    Message.find(id)
}
function findAndDelete(err, id) {
    getOne(id).delete()
    }
    function findAndUpdate(err, id) {
    
    }

module.exports = Message;
