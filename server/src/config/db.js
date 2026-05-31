const mongoose=require("mongoose")

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MOngoDB connected")
    }
    catch(err){
        console.log("DB error",err.message)
        process.exit(1)
    }
}

module.exports=connectDB