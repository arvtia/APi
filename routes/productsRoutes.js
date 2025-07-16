

const express = require('express');
const router = express.Router();
const {
   addProduct,
   getProduct,
   updateProduct,
   deleteProduct,
   getSingleProduct
} = require('../controllers/productController')

router.get('/products', getProduct);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/:id', getSingleProduct);


module.exports = router;
