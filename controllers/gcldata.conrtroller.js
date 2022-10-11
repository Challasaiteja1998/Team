const gcldata= require('../models/gcldata.model');
let csvToJson = require('convert-csv-to-json');
const run = require('../models/gcldata.model');

module.exports={
  pushdata:async( req, res, next) => {
    try{
    const gcl = new gcldata(req.body);
    const datag = await gcl.save();
    if(!datag){
        console.log('data',datag);
        return res.status(400).json({message:'data not inserted'});
    }
    return res.status(200).json({message:'data inserted',datag});
}catch(error){
    next(error);
}
  },

  getdata:async(req,res,next)=>{

    const datag = await gcldata.find();
    if(datag){
        return res.status(200).json({status:"true",message:'data retrived',datag});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  getbyiddata:async(req,res,next)=>{
      let id = req.params.id
    const datag = await gcldata.findOne({_id:id});
    if(datag){
        return res.status(200).json({status:"true",message:'data retrived',datag});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  updatedata:async(req,res,next)=>{
    let id = req.params.id;
    const datag = await gcldata.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(datag){
        return res.status(200).json({status:"true",message:'data updated',datag});
}
    return res.status(400).json({status:"false",message:'data not updated'});
  },

  
  deletedata:async(req,res,next)=>{
    let id = req.params.id;
    const datag = await gcldata.findOneAndDelete({_id:id});
    if(datag){
      // console.log('error');
        return res.status(200).json({status:"true",message:'data deleted',datag});
}
    return res.status(400).json({status:"false",message:'data not deleted'});
  },

}