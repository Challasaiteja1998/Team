const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const wroffSchema = new Schema({

    LOAN_AGREEMENT_NO  :{type:String,required:true},
    CUSTOMER_NAME      :{type:String,require:true},
    AMT_FIN            :{type:String,require:true},
    OUTSTANDING        :{type:Number,require:true},
    MOBILE             :{type:Number,require:true},
    BOM_BUCKET         :{type:Number,require:true},
    TENURE             :{type:Number,require:true},
    DISBURSAL_DATE     :{type:String,require:true},
    MATURITY_DT        :{type:String,require:true},
    RESIDENCCE_ADDRESS:{type:String,require:true}, 
},{collection:'quantity3',strict:false,timestamps:true});

module.exports = mongoose.model('quantity3',wroffSchema);