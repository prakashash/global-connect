const service = require ('./state.service');

const getState = (req,res) =>{
    service.getState(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveState = (req,res) =>{
    service.saveState(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateState = (req,res) =>{
    service.updateState(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteState = (req,res) =>{
    service.deleteState(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getState: getState,
    saveState: saveState,
    updateState : updateState,
    deleteState: deleteState
}