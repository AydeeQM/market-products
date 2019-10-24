const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main/routes');

const app = express();

const productRoutes = require('./products/products.routes');
app.use(bodyParser.json()); // middleware 

app.use('/products', productRoutes);

//server
app.listen(8080, () => {
    console.log('server on port 8080');
});