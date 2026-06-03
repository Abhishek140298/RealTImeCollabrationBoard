const mongoose=require("mongoose")

const express=require("express")

const router=express.Router()
const {createTask,getTasksByBoard}=require('../controllers/taskControllers')

router.get('/board/:boardId',getTasksByBoard)
router.post('/',createTask)


module.exports=router