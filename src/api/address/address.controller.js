const getAddress = (req,res) =>{
    res.status(200).send("GET Address")
}

const saveAddress = (req,res) =>{
    res.status(200).send("POST Address")
}

const updateAddress = (req,res) =>{
    res.status(200).send("UPDATE Address")
}

const deleteAddress = (req,res) =>{
    res.status(200).send("DELETE Address")
}

module.exports = {
    getAddress: getAddress,
    saveAddress: saveAddress,
    updateAddress : updateAddress,
    deleteAddress: deleteAddress
}