const getState = (req,res) =>{
    res.status(200).send("GET State")
}

const saveState = (req,res) =>{
    res.status(200).send("POST State")
}

const updateState = (req,res) =>{
    res.status(200).send("UPDATE State")
}

const deleteState = (req,res) =>{
    res.status(200).send("DELETE State")
}

module.exports = {
    getState: getState,
    saveState: saveState,
    updateState : updateState,
    deleteState: deleteState
}