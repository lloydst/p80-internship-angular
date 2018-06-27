var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IpSchema = new Schema({
    ip: String,
    name: String,
    channel:String
});
const Ip = mongoose.model('Ip', IpSchema);
module.exports = Ip;