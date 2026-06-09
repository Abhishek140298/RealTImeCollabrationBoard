const updateTaskEvent=(io,boardId,updatedTask)=>{
    io.to(boardId).emit("taskUpdated",updatedTask)
}