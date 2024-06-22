const {productData} = require("../models/productDB")

const productGet = (req, res, next)=>{
    try {
        res.json(productData)
    } catch (error) {
        next(error)
    }
}

const productGetById = (req, res, next)=>{
    try{
        const {id} = req.params
        const item = productData.find(item=> item.id == id)
        if(!item){
            const err = new Error("Item not found")
            err.status = 404;
            throw err;
        }
        res.json(item)
    }catch(error){
        next(error)
    }
    
}

const addProduct = (req, res, next)=>{
    try {
        const {name, price} = req.body
        if(!name || !price){
            const err =  new Error("Item name and price are required")
            err.status = 400
            throw err
        }
        const newProduct = {id: productData.length+1, name: name, price: price}
        productData.push(newProduct)
        res.status(201).json(newProduct)
    } catch (error) {
        next(error)
    }
}

const updateProduct = (req, res, next)=>{
    try {
        const {id} = req.params;
        const {price} = req.body
        const item = productData.find(item=> item.id == id)
        if(!item){
            const err = new Error("Item not found")
            err.status = 404;
            throw err;
        }
        if(!price){
            const err = new Error("Price is required")
            err.status = 400;
            throw err;
        }
        item.price = price
        res.json(item)
    } catch (error) {
        next(error)
    }
}

const deleteProduct = (req, res, next)=>{
    try{
        const {id} = req.params
        productIndex = productData.findIndex(item => item.id == id)
        console.log(id)
        console.log(productIndex)
        if(productIndex == -1){
            const err = new Error("Item not found")
            err.status = 404;
            throw err;
        }
        productData.splice(productIndex, 1);
        res.status(200).json(productData)
    }catch(error){
        next(error)
    }
}

module.exports = {productGet, productGetById, addProduct, updateProduct, deleteProduct}