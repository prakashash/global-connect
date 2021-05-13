const getAdmin = (req,res) =>{
    res.status(200).send("GET Admin")
}

const saveAdmin = (req,res) =>{
    res.status(200).send("POST Admin")
}

const updateAdmin = (req,res) =>{
    res.status(200).send("UPDATE Admin")
}

const deleteAdmin = (req,res) =>{
    res.status(200).send("DELETE Admin")
}

module.exports = {
    getAdmin: getAdmin,
    saveAdmin: saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin: deleteAdmin
}