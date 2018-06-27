var express = require('express');
var router = express.Router();

var productModel = require('../models/products');

router.get('/', function(req, res, next) {

    productModel.getAllProducts(function (rows) {
        res.render('product', {
            title : 'Products',
            products : rows
        });
    });

});

io.on('connection', function(socket) {

    socket.on('req_product_add', function (params) {

        productModel.productAdd(params, socket);

    });

});


module.exports = router;
