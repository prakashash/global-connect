const service = require ('./vendor.service');

const getVendor = (req,res) =>{
    service.getVendor(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveVendor = (req,res) =>{
    service.saveVendor(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateVendor = (req,res) =>{
    service.updateVendor(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteVendor = (req,res) =>{
    service.deleteVendor(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getVendor: getVendor,
    saveVendor: saveVendor,
    updateVendor : updateVendor,
    deleteVendor: deleteVendor
}