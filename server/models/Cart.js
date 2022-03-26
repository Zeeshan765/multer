const mongoose = require('mongoose');
const Product = require('../models/product');
const cartSchema = new mongoose.Schema(
  {
    // userId: { type: String, required: true },
    items: [
      {
        productId: {
          type: String,
          ref: 'Product',
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

module.exports = Cart;
