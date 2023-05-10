const Product = require('../models/product.model')
module.exports = {
    createProduct: (req,res)=>{
        console.log( "i am here",req)
        console.log( "i am here",req.body)
        Product.create(req.body)
        .then(newProduct =>res.json(newProduct))
        .catch(err => {console.log(err); res.status(400).json(`something went wrong ${err}`) })
    },
    getAllProduct : (req,res) =>{
        Product.find()
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json(`something went wrong ${err}`))
    }

    }

