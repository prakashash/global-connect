const Plan = require('../../models/plan');

const getPlan = (req)=>{
    try{
        return Plan.find(req.query)
    }catch(err){
        throw Error(err)
    }
};

const savePlan = (req)=>{
    try{
        var ad = new Plan(req.body)
        return plan.save()
    }catch(err){
        throw new Error(err)
    }
};

const updatePlan = (req)=>{
    try{
        return Plan.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deletePlan = (req)=>{
    try{
        return Plan.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getPlan : getPlan,
    savePlan : savePlan,
    updatePlan : updatePlan,
    deletePlan : deletePlan
}