const Board = require("../models/boardModal");
const mongoose=require("mongoose")

//Creation of board

const createBoards = async (req, res) => {
  try {
    const board = await Board.create(req.body);
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getBoards=async(req,res)=>{
    try{
         const boards=await Board.find()
         res.status(200).json(boards)
    }
    catch(err){
        res.status(500).json({
            message: err.message,
          });
        }
    
}

const getSignleBoardById=async(req,res)=>{
    try{
        console.log("Sigle ID____________",req.params)
        if(!req.params?.id) res.status(400).json({"message":"Board ID is ruired"})
        if(!mongoose.Types.ObjectId.isValid(req.params.id))res.status(400).json({message:"Invalid Id"})
        const board=await Board.findById(req.params?.id)
        res.status(200).json(board)

    }
    catch(err){
        console.log("Params check",err)
    }
}


module.exports={
    createBoards,
    getBoards,
    getSignleBoardById
}