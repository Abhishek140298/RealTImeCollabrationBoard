const mongoose=require("mongoose")

const express=require("express")

const router=express.Router()
const {createTask,getTasksByBoard,updateTask,deleteTask}=require('../controllers/taskControllers')

router.get('/board/:boardId',getTasksByBoard)
router.post('/',createTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)


module.exports=router