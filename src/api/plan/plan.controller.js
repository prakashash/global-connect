const getPlan = (req,res) =>{
    res.status(200).send("GET Plan")
}

const savePlan = (req,res) =>{
    res.status(200).send("POST Plan")
}

const updatePlan = (req,res) =>{
    res.status(200).send("UPDATE Plan")
}

const deletePlan = (req,res) =>{
    res.status(200).send("DELETE Plan")
}

module.exports = {
    getPlan: getPlan,
    savePlan: savePlan,
    updatePlan : updatePlan,
    deletePlan: deletePlan
}