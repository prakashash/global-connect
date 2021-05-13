const getWishlist = (req,res) =>{
    res.status(200).send("GET Wishlist")
}

const saveWishlist = (req,res) =>{
    res.status(200).send("POST Wishlist")
}

const updateWishlist = (req,res) =>{
    res.status(200).send("UPDATE Wishlist")
}

const deleteWishlist = (req,res) =>{
    res.status(200).send("DELETE Wishlist")
}

module.exports = {
    getWishlist: getWishlist,
    saveWishlist: saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist: deleteWishlist
}