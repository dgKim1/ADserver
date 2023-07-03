const mongoose = require('mongoose');
const { Schema } = mongoose;

const animalSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        min:1,
        max:20
    },
    sound:{
        type: String
    }
})

module.exports = mongoose.model('Animal',animalSchema);