const mongoose = require('mongoose');
const { Schema } = mongoose;

const Shop = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required:true},
  price: Number,
  createdAt:{
    type: Date,
    default: () => Date.now(),
  },
  body:  String,
}, {collection: "Shop"});

module.exports = mongoose.model("Shop", Shop);