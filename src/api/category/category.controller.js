const getCategory = (req,res) =>{
    res.status(200).send("GET Category")
}

const saveCategory = (req,res) =>{
    res.status(200).send("POST Category")
}

const updateCategory = (req,res) =>{
    res.status(200).send("UPDATE Category")
}

const deleteCategory = (req,res) =>{
    res.status(200).send("DELETE Category")
}

module.exports = {
    getCategory: getCategory,
    saveCategory: saveCategory,
    updateCategory : updateCategory,
    deleteCategory: deleteCategory
}