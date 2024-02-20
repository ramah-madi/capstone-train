const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  dishID: {
    type: Schema.Types.ObjectId,
    ref: "Dish",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  specificRequests: {
    type: String,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
