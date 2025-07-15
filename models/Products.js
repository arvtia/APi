const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   productName: String,
   price: Number,
   color: String,
   discount: Number,
   size: String,
   inStock: Number,
   category: String,
   categoryImg: String,
   subcategory: String,
   brand: String,
   specifications: [String],
   tags: [String],
   imagesCollection: [String],
   description: String,
   visible: Boolean

});

module.exports = mongoose.model('Product', productSchema);


