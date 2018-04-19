
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  img: {data:Buffer,contentType: String}
});
const Image = mongoose.model('Image', ImageSchema, 'fs.files');


function getAll() {
    Image.find()
}
function getOne(err, id) {
    if(err){
        throw err
    }
    Image.find(id)
}
function findAndDelete(err, id) {
    getOne(id).delete()
    }
    function findAndUpdate(err, id) {
    
    }

module.exports = Image;
