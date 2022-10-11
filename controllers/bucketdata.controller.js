const bucketdata= require('../models/bucketdata.model');
let csvToJson = require('convert-csv-to-json');
const run = require('../models/bucketdata.model');

module.exports={
  pushdata:async( req, res, next) => {
    try{
    const mdata = new bucketdata(req.body);
    const bucketdatacontroller = await mdata.save();
    if(!bucketdatacontroller){
        console.log('data',data);
        return res.status(400).json({message:'data not inserted'});
    }
    return res.status(200).json({message:'data inserted',bucketdatacontroller});
}catch(error){
    next(error);
}
  },

  getdata:async(req,res,next)=>{

    const bucketdatacontroller = await bucketdata.find();
    if(bucketdatacontroller){
        return res.status(200).json({status:"true",message:'data retrived',bucketdatacontroller});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  getbyiddata:async(req,res,next)=>{
      let id = req.params.id
    const bucketdatacontroller = await bucketdata.findOne({_id:id});
    if(bucketdatacontroller){
        return res.status(200).json({status:"true",message:'data retrived',bucketdatacontroller});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  updatedata:async(req,res,next)=>{
    let id = req.params.id;
    const bucketdatacontroller = await bucketdata.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(bucketdatacontroller){
        return res.status(200).json({status:"true",message:'data updated',bucketdatacontroller});
}
    return res.status(400).json({status:"false",message:'data not updated'});
  },

  
  deletedata:async(req,res,next)=>{
    let id = req.params.id;
    const bucketdatacontroller = await bucketdata.findOneAndDelete({_id:id});
    if(bucketdatacontroller){
      // console.log('error');
        return res.status(200).json({status:"true",message:'data deleted',bucketdatacontroller});
}
    return res.status(400).json({status:"false",message:'data not deleted'});
  },

}