const getReview = (req,res) =>{
    res.status(200).send("GET Review")
}

const saveReview = (req,res) =>{
    res.status(200).send("POST Review")
}

const updateReview = (req,res) =>{
    res.status(200).send("UPDATE Review")
}

const deleteReview = (req,res) =>{
    res.status(200).send("DELETE Review")
}

module.exports = {
    getReview: getReview,
    saveReview: saveReview,
    updateReview : updateReview,
    deleteReview: deleteReview
}