const mongoose=require("mongoose")

const boardSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    createdBy:{
        type:String,
        default: "Anonymous",
    },},
    
    {
        timestamps: true,
      }
)

module.exports=mongoose.model("Board",boardSchema)