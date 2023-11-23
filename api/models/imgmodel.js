const mongoose = require('mongoose');
const ImgSchema = new mongoose.Schema({
   category : String,
   link : String
})
const ImgModel = mongoose.model('Img',ImgSchema);
module.exports=ImgModel;