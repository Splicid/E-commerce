const mongoose = require('mongoose');
const { Schema } = mongoose;
const {metadata} = require("../middleware/storage");
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
  image: {type: mongoose.Schema.Types.ObjectId, ref: metadata},
  body:  String,
}, {collection: "Shop"});

module.exports = mongoose.model("Shop", Shop);