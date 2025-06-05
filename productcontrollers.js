const { v4: uuidv4 } = require('uuid');
let products = require('../data/products');
const { NotFoundError } = require('../utils/errors');

// GET all products with filtering & pagination
exports.getProducts = (req, res) => {
    let result = products;

    const { category, page = 1, limit = 5 } = req.query;

    if (category) result = result.filter(p => p.category === category);

    const start = (page - 1) * limit;
    const paginated = result.slice(start, start + parseInt(limit));

    res.json(paginated);
};

exports.getProduct = (req, res, next) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return next(new NotFoundError('Product not found'));
    res.json(product);
};

exports.createProduct = (req, res) => {
    const product = { id: uuidv4(), ...req.body };
    products.push(product);
    res.status(201).json(product);
};

exports.updateProduct = (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return next(new NotFoundError('Product not found'));
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
};

exports.deleteProduct = (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return next(new NotFoundError('Product not found'));
    products.splice(index, 1);
    res.status(204).send();
};

exports.searchProducts = (req, res) => {
    const { name } = req.query;
    const result = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
};

exports.getProductStats = (req, res) => {
    const countByCategory = {};
    products.forEach(p => {
        countByCategory[p.category] = (countByCategory[p.category] || 0) + 1;
    });
    res.json(countByCategory);
};
