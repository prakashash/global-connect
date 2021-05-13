const getCart = (req,res) =>{
    res.status(200).send("GET Cart")
}

const saveCart = (req,res) =>{
    res.status(200).send("POST Cart")
}

const updateCart = (req,res) =>{
    res.status(200).send("UPDATE Cart")
}

const deleteCart = (req,res) =>{
    res.status(200).send("DELETE Cart")
}

module.exports = {
    getCart: getCart,
    saveCart: saveCart,
    updateCart : updateCart,
    deleteCart: deleteCart
}