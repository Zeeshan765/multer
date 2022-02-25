const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();
const Product = require('../models/product');
const multer = require('multer');
const DIR = './public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, mongoose.Types.ObjectId() + '-' + filename);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

//get the product
router.get('/', async (req, res) => {
  let products = await Product.find();
  return res.send(products);
});

//Insert a Product

router.post('/', upload.single('picture'), async (req, res) => {
  console.log(req.file);
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.picture = req.file.filename;
  await product.save();
  return res.send(product);
});
module.exports = router;
