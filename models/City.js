const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    id:{ //CITY0000000X
        required:true,
        type: String
    },
    description:{ //Name and details
        required: true,
        type: String
    },
    population:{ // Integer
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('City', citySchema, 'cities')