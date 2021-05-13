const getProduct = (req,res) =>{
    res.status(200).send("GET Product")
}

const saveProduct = (req,res) =>{
    res.status(200).send("POST Product")
}

const updateProduct = (req,res) =>{
    res.status(200).send("UPDATE Product")
}

const deleteProduct = (req,res) =>{
    res.status(200).send("DELETE Product")
}

module.exports = {
    getProduct: getProduct,
    saveProduct: saveProduct,
    updateProduct : updateProduct,
    deleteProduct: deleteProduct
}