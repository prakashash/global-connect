const service = require ('./payment.service');

const getPayment = (req,res) =>{
    service.getPayment(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const savePayment = (req,res) =>{
    service.savePayment(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updatePayment = (req,res) =>{
    service.updatePayment(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deletePayment = (req,res) =>{
    service.deletePayment(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getPayment: getPayment,
    savePayment: savePayment,
    updatePayment : updatePayment,
    deletePayment: deletePayment
}