const service = require ('./product.service');

const getProduct = (req,res) =>{
    service.getProduct(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveProduct = (req,res) =>{
    service.saveProduct(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateProduct = (req,res) =>{
    service.updateProduct(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteProduct = (req,res) =>{
    service.deleteProduct(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getProduct: getProduct,
    saveProduct: saveProduct,
    updateProduct : updateProduct,
    deleteProduct: deleteProduct
}