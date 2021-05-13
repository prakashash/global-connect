const service = require ('./country.service');

const getCountry = (req,res) =>{
    service.getCountry(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveCountry = (req,res) =>{
    service.saveCountry(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateCountry = (req,res) =>{
    service.updateCountry(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteCountry = (req,res) =>{
    service.deleteCountry(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getCountry: getCountry,
    saveCountry: saveCountry,
    updateCountry : updateCountry,
    deleteCountry: deleteCountry
}