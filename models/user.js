const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  imageUrl:String
});

module.exports = mongoose.model('user',userSchema);
