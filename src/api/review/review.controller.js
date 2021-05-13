const service = require ('./review.service');

const getReview = (req,res) =>{
    service.getReview(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveReview = (req,res) =>{
    service.saveReview(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateReview = (req,res) =>{
    service.updateReview(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteReview = (req,res) =>{
    service.deleteReview(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getReview: getReview,
    saveReview: saveReview,
    updateReview : updateReview,
    deleteReview: deleteReview
}