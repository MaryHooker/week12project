//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let ContactSchema = new Schema(
    {
        "contactName":String,
        "contactNumber":Number,
        "contactEmail":String,
    }
)

//export model
module.exports = mongoose.model('contacts', ContactSchema);