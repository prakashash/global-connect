const service = require ('./cart.service');

const getCart = (req,res) =>{
    service.getCart(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveCart = (req,res) =>{
    service.saveCart(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateCart = (req,res) =>{
    service.updateCart(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteCart = (req,res) =>{
    service.deleteCart(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getCart: getCart,
    saveCart: saveCart,
    updateCart : updateCart,
    deleteCart: deleteCart
}