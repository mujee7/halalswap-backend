

const mongoose=require('mongoose')
const BridgePositionSchemaBSC=new mongoose.Schema({
user:{
    type:String,
    required:true
},
token:{
    type:String,
    required:true
},
amount:{
    type:Number,
    required:true
},





})

module.exports=mongoose.model('BridgePositionSchemaBSC',BridgePositionSchemaBSC)

