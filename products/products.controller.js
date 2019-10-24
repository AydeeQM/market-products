let products = require('../../db').products;

const uuid = require('uuid/v4') //generador de id

const getProductController =
    (req, res) => {
        res.send(products)
    }

const createProductController =
    (req, res) => {
        let newProduct = {...req.body, id: uuid() };
        products.push(newProduct);
        res.send(newProduct);
    }

const updateProductController =
    (req, res) => {
        const id = req.params.id;
        let index; //0
        let productFilter;
        products.filter((product, i) => {
            if (product.id === id) {
                productFilter = product;
                index = i;
            }
        })
        products[index] = {
            ...productFilter,
            ...req.body
        }
        res.send(products)

    }

const deleteProductController =
    (req, res) => {
        const productFilter = products.filter(product => product.id === req.params.id)[0];
        const productSelected = products.filter(product => product.id !== req.params.id)[0];
        products = productSelected;
        res.send(productFilter);
    }



module.exports = {
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController,
}