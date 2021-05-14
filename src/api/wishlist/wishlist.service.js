const Wishlist = require('../../models/wishlist');

const getWishlist = (req)=>{
    try{
        return Wishlist.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveWishlist = (req)=>{
    try{
        var ad = new Wishlist(req.body)
        return wishlist.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateWishlist = (req)=>{
    try{
        return Wishlist.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteWishlist = (req)=>{
    try{
        return Wishlist.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getWishlist : getWishlist,
    saveWishlist : saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist : deleteWishlist
}