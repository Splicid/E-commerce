const mongoose = require('mongoose');
const { Schema } = mongoose;

const shop = new Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  body:  String,
});

module.exports = mongoose.model("Shop", shop);