const Products = require('../models/Products');

//  Create Product
exports.addProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    const saved = await product.save();
    res.status(201).json(saved); // 201 Created
  } catch (err) {
    res.status(400).json({ error: err.message }); // Bad Request
  }
};

//  Get All Products
exports.getProduct = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products); // 200 OK
  } catch (err) {
    res.status(500).json({ error: err.message }); // Server Error
  }
};

//  Update a Product
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(updated); // 200 OK
  } catch (err) {
    res.status(400).json({ error: err.message }); // Bad Request
  }
};

//  Delete a Product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Products.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' }); // 200 OK
  } catch (err) {
    res.status(500).json({ error: err.message }); // Server Error
  }
};
