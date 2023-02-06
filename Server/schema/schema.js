const mongoose = require('mongoose');
const { Schema } = mongoose;

const shop = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  body:  String,
}, {collection: "Shop"});

module.exports = mongoose.model("Shop", shop);