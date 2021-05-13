const getCountry = (req,res) =>{
    res.status(200).send("GET Country")
}

const saveCountry = (req,res) =>{
    res.status(200).send("POST Country")
}

const updateCountry = (req,res) =>{
    res.status(200).send("UPDATE Country")
}

const deleteCountry = (req,res) =>{
    res.status(200).send("DELETE Country")
}

module.exports = {
    getCountry: getCountry,
    saveCountry: saveCountry,
    updateCountry : updateCountry,
    deleteCountry: deleteCountry
}