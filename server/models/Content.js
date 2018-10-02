
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
            delay: Number,
            show: {
                type: Object,
                allways: Boolean,
                timefrom: String,
                timetill: String,
                days: {
                    type: Array,
                    monday: Boolean,
                    tuesday: Boolean,
                    wednesday: Boolean,
                    thursday: Boolean,
                    friday: Boolean,
                    saturday: Boolean,
                    sunday: Boolean
                }
            }
        }
    }
});
var Content = mongoose.model('Content', ContentSchema);



// make this available to our users in our Node applications
module.exports = Content;
