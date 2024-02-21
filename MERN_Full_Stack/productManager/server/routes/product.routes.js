const ProducrController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProducrController.index);
    app.post('/api/products', ProducrController.createProduct);
    app.get('/api/products', ProducrController.getAllProducts);
    app.get('/api/products/:id', ProducrController.getProduct);
}

