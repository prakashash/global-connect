const service = require ('./address.service');

const getAddress = (req,res) =>{
    service.getAddress(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveAddress = (req,res) =>{
    service.saveAddress(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateAddress = (req,res) =>{
    service.updateAddress(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteAddress = (req,res) =>{
    service.deleteAddress(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getAddress: getAddress,
    saveAddress: saveAddress,
    updateAddress : updateAddress,
    deleteAddress: deleteAddress
}