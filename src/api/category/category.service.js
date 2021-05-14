const Category = require('../../models/category');

const getCategory = (req)=>{
    try{
        return Category.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveCategory = (req)=>{
    try{
        var ad = new Category(req.body)
        return category.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateCategory = (req)=>{
    try{
        return Category.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteCategory = (req)=>{
    try{
        return Category.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getCategory : getCategory,
    saveCategory : saveCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory
}