  const data= require('../models/data.model');
let csvToJson = require('convert-csv-to-json');
const run = require('../models/data.model');

module.exports={
  pushdata:async( req, res, next) => {
    try{
    const datav= new data(req.body);
    const datap = await data.save();
    if(!datap){
        console.log('data',datap);
        return res.status(400).json({message:'data not inserted'});
    }
    return res.status(200).json({message:'data inserted',data});
}catch(error){
    next(error);
}
  },

  
  getdata:async(req,res,next)=>{

    const datap = await data.find();
    if(datap){
        return res.status(200).json({status:"true",message:'data retrived',datap});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  getbyiddata:async(req,res,next)=>{
      let id = req.params.id
    const datap = await data.findOne({_id:id});
    if(datap){
        return res.status(200).json({status:"true",message:'data retrived',datap});
}
    return res.status(400).json({status:"false",message:'data not retrived'});
  },

  updatedata:async(req,res,next)=>{
    let id = req.params.id;
    const datap = await data.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(datap){
        return res.status(200).json({status:"true",message:'data updated',datap});
}
    return res.status(400).json({status:"false",message:'data not updated'});
  },

  
  deletedata:async(req,res,next)=>{
    let id = req.params.id;
    const datap = await data.findOneAndDelete({_id:id});
    if(datap){
      // console.log('error');
        return res.status(200).json({status:"true",message:'data deleted',datap});
}
    return res.status(400).json({status:"false",message:'data not deleted'});
  },

}