const Ad = require('../../models/review');

const getReview = (req)=>{
    try{
        return Review.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveReview = (req)=>{
    try{
        var ad = new Review(req.body)
        return review.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateReview = (req)=>{
    try{
        return Review.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteReview = (req)=>{
    try{
        return Review.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getReview : getReview,
    saveReview : saveReview,
    updateReview : updateReview,
    deleteReview : deleteReview
}