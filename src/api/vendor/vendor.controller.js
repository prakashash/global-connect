const getVendor = (req,res) =>{
    res.status(200).send("GET Vendor")
}

const saveVendor = (req,res) =>{
    res.status(200).send("POST Vendor")
}

const updateVendor = (req,res) =>{
    res.status(200).send("UPDATE Vendor")
}

const deleteVendor = (req,res) =>{
    res.status(200).send("DELETE Vendor")
}

module.exports = {
    getVendor: getVendor,
    saveVendor: saveVendor,
    updateVendor : updateVendor,
    deleteVendor: deleteVendor
}