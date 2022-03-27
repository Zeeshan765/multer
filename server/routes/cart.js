const Cart = require('../models/Cart');
const express = require('express');
const mongoose = require('mongoose');
let router = express.Router();

//CREATE

router.post('/', async (req, res) => {
  console.log(req.body);
  let cart = new Cart();
  cart.items.push({
    productId: req.body.productId,
    quantity: req.body.quantity,
  }),
    //cart.productId = req.body.productId;
    //cart.quantity = req.body.quantity;
    // let id = req.body.productId;
    // let value = req.body.quantity;
    // console.log('id', id);
    // console.log('quantity', value);
    // //cart.items.push({ id, value });
    // cart.items.push({
    //   productId: req.body.productId,
    //   quantity: req.body.quantity,
    // });
    console.log('cart :', cart);
  await cart.save();
  return res.send(cart);
});

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
// router.get('/find/:userId', async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.params.userId });
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL

router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
