const service = require ('./wishlist.service');

const getWishlist = (req,res) =>{
    service.getWishlist(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveWishlist = (req,res) =>{
    service.saveWishlist(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateWishlist = (req,res) =>{
    service.updateWishlist(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteWishlist = (req,res) =>{
    service.deleteWishlist(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getWishlist: getWishlist,
    saveWishlist: saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist: deleteWishlist
}