const Ad = require('../../models/ad');

const getAd = (req)=>{
    try{
        return Ad.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveAd = (req)=>{
    try{
        var ad = new Ad(req.body)
        return ad.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateAd = (req)=>{
    try{
        return Ad.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteAd = (req)=>{
    try{
        return Task.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getAd : getAd,
    saveAd : saveAd,
    updateAd : updateAd,
    deleteAd : deleteAd
}
