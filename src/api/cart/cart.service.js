const Ad = require('../../models/cart');

const getCart = (req)=>{
    try{
        return Cart.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveCart = (req)=>{
    try{
        var ad = new Cart(req.body)
        return cart.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateCart = (req)=>{
    try{
        return Cart.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteCart = (req)=>{
    try{
        return Cart.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getCart : getCart,
    saveCart : saveCart,
    updateCart : updateCart,
    deleteCart : deleteCart
}