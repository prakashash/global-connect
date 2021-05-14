const Payment = require('../../models/payment');

const getPayment = (req)=>{
    try{
        return Payment.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const savePayment = (req)=>{
    try{
        var ad = new Payment(req.body)
        return payment.save()
    }catch(err){
        throw new Error(err)
    }
};

const updatePayment = (req)=>{
    try{
        return Payment.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deletePayment = (req)=>{
    try{
        return Payment.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getPayment : getPayment,
    savePayment : savePayment,
    updatePayment : updatePayment,
    deletePayment : deletePayment
}