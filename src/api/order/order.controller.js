const service = require ('./order.service');

const getOrder = (req,res) =>{
    service.getOrder(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveOrder = (req,res) =>{
    service.saveOrder(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateOrder = (req,res) =>{
    service.updateOrder(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteOrder = (req,res) =>{
    service.deleteOrder(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getOrder: getOrder,
    saveOrder: saveOrder,
    updateOrder : updateOrder,
    deleteOrder: deleteOrder
}