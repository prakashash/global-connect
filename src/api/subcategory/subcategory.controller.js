const service = require ('./subcategory.service');

const getSubcategory = (req,res) =>{
    service.getSubcategory(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const saveSubcategory = (req,res) =>{
    service.saveSubcategory(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const updateSubcategory = (req,res) =>{
    service.updateSubcategory(req).then((result)=>{
        res.status(200).send("Updated");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

const deleteSubcategory = (req,res) =>{
    service.deleteSubcategory(req).then((result)=>{
        res.status(200).send("Deleted");
    }).catch((err)=>{
        res.status(500).send(err);

    })
}

module.exports = {
    getSubcategory: getSubcategory,
    saveSubcategory: saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory: deleteSubcategory
}