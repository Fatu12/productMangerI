const Product = require('../models/product.model')
module.exports = {
    createProduct: (req,res)=>{
        // console.log( "i am here",req)
        // console.log( "i am here",req.body)
        Product.create(req.body)
        .then(newProduct =>res.json(newProduct))

        .catch(err => {console.log(err); res.status(400).json(err)})
        // .catch(err => {console.log(err); res.status(400).json(`something went wrong ${err}`) })
    },
    getAllProduct : (req,res) =>{
        console.log(` GET ALL PRODUCTS ${req}`)
        Product.find()
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json(`something went wrong ${err}`))
    },
    getOneProduct : (req,res)=>{
        console.log(`GET ONE PRODUCTS ${req}`)

        console.log(req)
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(`something went wrong ${err}`))
    },
    updateProducts : (req,res)=>{
        console.log( `UPDATE PRODUCTS ${req}`)
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedProducts => res.json(updatedProducts))
        .catch(err => res.json(`Something went wrong ${err}`))
    },
    deleteProduct : (req,res) =>{
        console.log( `DELETE PRODUCTS ${req}`)
        //  id must match id in corresponding route
        Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(`something went wrong ${err}`))
    }
}

