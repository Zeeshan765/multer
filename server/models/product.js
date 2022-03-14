const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    picture: String,
    cloudinary_id: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
