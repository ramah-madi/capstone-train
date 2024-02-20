const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
  
    totalBill: {
      type: Number,
      required: true,
    },

    orderItem: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Dish",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    status: {
      type: String,
      enum: ["waiting", "recivied", "cancelled"],
    },

    durationDelivery: {
      type: Number,
    },

    orderDate: {
      type: Date,
    },

    pickupDate: {
      type: Date,
      
    },
    review: { 
      type: [String], 
      required: true 
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
