const service = require ('./plan.service');

const getPlan = (req,res) =>{
    service.getPlan(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const savePlan = (req,res) =>{
    service.savePlan(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updatePlan = (req,res) =>{
    service.updatePlan(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deletePlan = (req,res) =>{
    service.deletePlan(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getPlan: getPlan,
    savePlan: savePlan,
    updatePlan : updatePlan,
    deletePlan: deletePlan
}