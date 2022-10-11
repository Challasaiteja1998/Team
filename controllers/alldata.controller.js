const alldata= require('../models/alldata.model');
let csvToJson = require('convert-csv-to-json');
const run = require('../models/alldata.model');

module.exports={
  pushdata:async( req, res, next) => {
    try{
    const adata = new alldata(req.body);
    const alldatacontroller = await adata.save();
    if(!alldatacontroller){
      //  console.log('data',alldata);
        return res.status(400).json({message:'data not inserted'});
    }
    return res.status(200).json({message:'data inserted',alldatacontroller});
}catch(error){
    next(error);
}
  },

  getdata:async(req,res,next)=>{

    const alldatacontroller = await alldata.find();
    if(alldatacontroller){
        return res.status(200).json({status:"true",message:'data retrived',alldatacontroller});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  getbyiddata:async(req,res,next)=>{
      let id = req.params.id
    const alldatacontroller = await alldata.findOne({_id:id});
    if(alldatacontroller){
        return res.status(200).json({status:"true",message:'data retrived',alldatacontroller});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  updatedata:async(req,res,next)=>{
    let id = req.params.id;
    const alldatacontroller = await alldata.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(alldatacontroller){
        return res.status(200).json({status:"true",message:'data updated',alldatacontroller});
}
    return res.status(400).json({status:"false",message:'data not updated'});
  },

  
  deletedata:async(req,res,next)=>{
    let id = req.params.id;
    const alldatacontroller = await alldata.findOneAndDelete({_id:id});
    if(alldatacontroller){
      // console.log('error');
        return res.status(200).json({status:"true",message:'data deleted',alldatacontroller});
}
    return res.status(400).json({status:"false",message:'data not deleted'});
  },

}