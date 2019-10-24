const express = require('express')
const productController = require('./products.controller');
const productDB = require('../../db').products;


const app = express.Router()

const getProductController = productController.getProductController;
const createProductController = productController.createProductController;
const updateProductController = productController.updateProductController;
const deleteProductController = productController.deleteProductController;
// Almacena los endpoints

// PATH , Array Function () => {} es como return
app.get('/', getProductController);
//req  es la solicitud 
//
app.post('/', createProductController);

app.put('/:id', updateProductController);

app.delete('/:id', deleteProductController);

module.exports = app;