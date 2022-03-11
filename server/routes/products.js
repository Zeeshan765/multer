const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();
const Product = require('../models/product');
const multer = require('multer');
//const DIR = './public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public');
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, mongoose.Types.ObjectId() + '-' + fileName);
    //cb(null, file.originalname);
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
  return res.json(products);
});

//Insert a Product

router.post('/', upload.single('image'), async (req, res) => {
  console.log(req.file);
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  product.picture = req.file.filename;
  await product.save();
  return res.send(product);
});
module.exports = router;
