const mongoose=require("mongoose")

const express=require("express")

const router=express.Router()
const {createTask,getTasksByBoard,updateTask}=require('../controllers/taskControllers')

router.get('/board/:boardId',getTasksByBoard)
router.post('/',createTask)
router.patch('/:id',updateTask)


module.exports=router