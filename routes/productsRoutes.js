

const express = require('express');
const router = express.Router();
const {
   addProduct,
   getProduct,
   updateProduct,
   deleteProduct
} = require('../controllers/productController')

router.get('/products', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.get('/products/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
