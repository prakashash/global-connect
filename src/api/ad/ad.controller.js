const getAd = (req,res) =>{
    res.status(200).send("GET AD")
}

const saveAd = (req,res) =>{
    res.status(200).send("POST AD")
}

const updateAd = (req,res) =>{
    res.status(200).send("UPDATE AD")
}

const deleteAd = (req,res) =>{
    res.status(200).send("DELETE AD")
}

module.exports = {
    getAd: getAd,
    saveAd: saveAd,
    updateAd : updateAd,
    deleteAd: deleteAd
}