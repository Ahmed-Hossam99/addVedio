const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
  personName:String,
  personImageUrl:String,
  message: String,
  roomName: String,
  Date:{
    type:String
  }
});

module.exports = mongoose.model('msg',msgSchema);
