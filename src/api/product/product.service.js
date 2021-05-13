const Ad = require('../../models/product');

const getProduct = (req)=>{
    try{
        return Product.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveProduct = (req)=>{
    try{
        var ad = new Product(req.body)
        return product.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateProduct = (req)=>{
    try{
        return Product.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteProduct = (req)=>{
    try{
        return Product.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getProduct : getProduct,
    saveProduct : saveProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct
}