const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();
const Product = require('../models/product');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
//const DIR = './public/';

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type is not supported"), false);
//       return;
//     }
//     cb(null, true);
//   },
// });

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, './public');
  // },
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
  // Upload image to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path);
  //res.json(result);
  console.log(result);
  console.log(req.body);
  // console.log(req.file);
  let product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  product.picture = result.secure_url;
  product.cloudinary_id = result.public_id;
  await product.save();
  return res.send(product);
});

router.delete('/:id', async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  // Delete image from cloudinary
  await cloudinary.uploader.destroy(product.cloudinary_id);
  return res.json(product);
});

//Update a Product
router.put('/:id', upload.single('image'), async (req, res) => {
  let product = await Product.findByIdAndUpdate(req.params.id);
  // Delete image from cloudinary
  await cloudinary.uploader.destroy(product.cloudinary_id);
  const result = await cloudinary.uploader.upload(req.file.path);
  //res.json(result);
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  product.picture = result.secure_url;
  product.cloudinary_id = result.public_id;
  await product.save();
  return res.json(product);
});
module.exports = router;
