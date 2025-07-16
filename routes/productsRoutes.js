

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

module.exports = router;
