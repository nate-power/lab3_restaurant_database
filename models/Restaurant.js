const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({ 
    restaurant_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    cuisine: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        building: {
            type: Number,
        },
        street : {
            type: String,
            trim: true
        },
        zipcode: {
            type: Number,
        }
    }

})

const Restaurant = mongoose.model("Restaurants", RestaurantSchema);
module.exports = Restaurant