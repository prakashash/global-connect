const Ad = require('../../models/address');

const getAddress = (req)=>{
    try{
        return Address.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveAddress = (req)=>{
    try{
        var ad = new Address(req.body)
        return address.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateAddress = (req)=>{
    try{
        return Address.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteAddress = (req)=>{
    try{
        return Address.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getAddress : getAddress,
    saveAddress : saveAddress,
    updateAddress : updateAddress,
    deleteAddress : deleteAddress
}