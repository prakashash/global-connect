const service = require ('./ad.service');

const getAd = (req,res) =>{
    service.getAd(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveAd = (req,res) =>{
    service.saveAd(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateAd = (req,res) =>{
    service.updateAd(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteAd = (req,res) =>{
    service.deleteAd(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getAd: getAd,
    saveAd: saveAd,
    updateAd : updateAd,
    deleteAd: deleteAd
}