

const Product = require('../models/Products');

// create
// 201 - product added successfully
exports.addProduct = async ( req, res) =>{
   try{
      const product = new Product(req.body);
      const saved = await product.save();
      res.status(201).json(saved); 
   } catch (err) {
      res.status(400).json({error: err.message});
   }
};


// read or fetch 
exports.getProduct = async (req, res) =>{
   try{
      const products = await product.find();
      res.json(products);
   } catch (err) {
      res.status(404).json({error: err.message})
   }
}

//update products = 
exports.updateProduct = async (req, res) =>{
   try{
      const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json(updated);
   } catch (err) {
      res.status(400).json({error: err.message});
   }
};

//  Delete
exports.deleteProduct = async (req, res) =>{
   await Product.findByIdAndDelete(req.params.id);
   res.json({message: 'product deleted'});
}