const getSubcategory = (req,res) =>{
    res.status(200).send("GET Subcategory")
}

const saveSubcategory = (req,res) =>{
    res.status(200).send("POST Subcategory")
}

const updateSubcategory = (req,res) =>{
    res.status(200).send("UPDATE Subcategory")
}

const deleteSubcategory = (req,res) =>{
    res.status(200).send("DELETE Subcategory")
}

module.exports = {
    getSubcategory: getSubcategory,
    saveSubcategory: saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory: deleteSubcategory
}