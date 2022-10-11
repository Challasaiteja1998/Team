const wroffdata= require('../models/wroffdata.model');
let csvToJson = require('convert-csv-to-json');
//const run = require('../models/wroffdata.model');

module.exports={
  pushdata:async( req, res, next) => {
    try{
    const wroff = new wroffdata(req.body);
    const dataw = await wroff.save();
    if(!dataw){
        console.log('data',dataw);
        return res.status(400).json({message:'data not inserted'});
    }
    return res.status(200).json({message:'data inserted',dataw});
}catch(error){
    next(error);
}
  },

  getdata:async(req,res,next)=>{

    const dataw = await wroffdata.find();
    if(dataw){
        return res.status(200).json({status:"true",message:'data retrived',dataw});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  getbyiddata:async(req,res,next)=>{
      let id = req.params.id
    const dataw = await wroffdata.findOne({_id:id});
    if(dataw){
        return res.status(200).json({status:"true",message:'data retrived',dataw});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  updatedata:async(req,res,next)=>{
    let id = req.params.id;
    const dataw = await wroffdata.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(dataw){
        return res.status(200).json({status:"true",message:'data updated',dataw});
}
    return res.status(400).json({status:"false",message:'data not updated'});
  },

  
  deletedata:async(req,res,next)=>{
    let id = req.params.id;
    const dataw = await wroffdata.findOneAndDelete({_id:id});
    if(dataw){
      // console.log('error');
        return res.status(200).json({status:"true",message:'data deleted',dataw});
}
    return res.status(400).json({status:"false",message:'data not deleted'});
  },

}