const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductStats,
    searchProducts
} = require('../controllers/productController');
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');

router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/stats', getProductStats);
router.get('/:id', getProduct);
router.post('/', auth, validateProduct, createProduct);
router.put('/:id', auth, validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
