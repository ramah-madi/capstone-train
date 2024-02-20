const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },

  restaurantLocation: {
    type: String,
    required: true,
  },

  imageURL: { 
    type: String, 
    required: true },

  description: { 
    type: String, 
    required: true },

  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],

});

module.exports = mongoose.model("Restaurant", restaurantSchema);

