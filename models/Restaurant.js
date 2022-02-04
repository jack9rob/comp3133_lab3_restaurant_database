const mongoose = require('mongoose')

const RestaurantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        cuisine: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("Restaurant", RestaurantSchema);