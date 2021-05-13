const getOrder = (req,res) =>{
    res.status(200).send("GET Order")
}

const saveOrder = (req,res) =>{
    res.status(200).send("POST Order")
}

const updateOrder = (req,res) =>{
    res.status(200).send("UPDATE Order")
}

const deleteOrder= (req,res) =>{
    res.status(200).send("DELETE Order")
}

module.exports = {
    getOrder: getOrder,
    saveOrder: saveOrder,
    updateOrder : updateOrder,
    deleteOrder: deleteOrder
}