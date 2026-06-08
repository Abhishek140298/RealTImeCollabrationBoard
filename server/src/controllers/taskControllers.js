const mongoose = require("mongoose");
const Task = require("../models/taskModel");
const Board = require("../models/boardModal");
const { response } = require("express");
const getTasksByBoard = async (req, res) => {
    console.log("Is it ")
  try {
    const { boardId } = req.params;
    if(!boardId)return res.status(404).json({message:"Please Provide  Board ID"})
    const tasks = await Task.find({ boardId });
    if (!tasks) return res.status(404).json({ message: "Tasks not Found" });
    return res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, status, boardId } = req.body;
    //! find the id is real
    //* Validation
    const board = await Board.findById(boardId);
    if (!boardId) return res.status(404).json({ message: "Board Not Found" });

    //* insert
    const task = await Task.create({
      title,
      description,
      status,
      boardId,
    });
    //* return Document
     res.status(201).json(task);
  } catch (err) {
     res.status(500).json({ message: err.message });
  }
};

const updateTask=async (req,res)=>{
  try{
    const {taskId}=req.params
    const task=Task.findByIdAndUpdate(taskId,req.body,{new:true,runValidator:true})
    if(!task)return res.status(401).json({message:"Task not Found"})
     res.status(200).json(task)
  }
  catch(err){
    res.status(500).json({message:"Internal server error"})
  }
}

module.exports = { createTask, getTasksByBoard ,updateTask};
