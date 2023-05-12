const productController = require("../controllers/product.controllers")
module.exports = app =>{
    app.get('/api/products',  productController.getAllProduct)
    app.post('/api/products', productController.createProduct)
    app.get('/api/products/:id', productController.getOneProduct)
    app.patch('/api/products/:id', productController.updateProducts)
    app.delete('/api/products/:id', productController.deleteProduct)
}
