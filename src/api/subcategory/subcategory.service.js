const Ad = require('../../models/subcategory');

const getSubcategory = (req)=>{
    try{
        return Subcategory.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveSubcategory = (req)=>{
    try{
        var ad = new Subcategory(req.body)
        return subcategory.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateSubcategory= (req)=>{
    try{
        return Subcategory.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteSubcategory = (req)=>{
    try{
        return Subcategory.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getSubcategory : getSubcategory,
    saveSubcategory : saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory : deleteSubcategory
}