const getPayment = (req,res) =>{
    res.status(200).send("GET Payment")
}

const savePayment = (req,res) =>{
    res.status(200).send("POST Payment")
}

const updatePayment = (req,res) =>{
    res.status(200).send("UPDATE Payment")
}

const deletePayment = (req,res) =>{
    res.status(200).send("DELETE Payment")
}

module.exports = {
    getPayment: getPayment,
    savePayment: savePayment,
    updatePayment : updatePayment,
    deletePayment: deletePayment
}