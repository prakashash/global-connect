const Ad = require('../../models/vendor');

const getVendor = (req)=>{
    try{
        return Vendor.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const saveVendor = (req)=>{
    try{
        var ad = new Vendor(req.body)
        return vendor.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateVendor = (req)=>{
    try{
        return Vendor.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteVendor = (req)=>{
    try{
        return Vendor.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getVendor : getVendor,
    saveVendor : saveVendor,
    updateVendor : updateVendor,
    deleteVendor : deleteVendor
}