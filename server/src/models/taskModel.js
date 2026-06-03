const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true

    },
    description:{
           type:String,
           default:"",

    },
    status:{
          type:String,
          default:"todo",
          enum:["todo","in-progress","doono"]
    },
    boardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Board',
        required:true
    },
    
}, {
    timestamps: true,
  })


module.exports=mongoose.model("Task",taskSchema)