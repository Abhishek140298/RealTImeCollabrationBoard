const socketHandler=(io)=>{

    io.on("connection",(socket)=>{


        socket.on("disconnect",()=>{
            console.log("User disconnect",socket.id)
        })
        socket.on("joinBoard",(boardID)=>{
            socket.join(boardID)
            console.log(
                `${socket.id} joined ${boardID}`
              );
      
        })

       socket.on("leaveBoard",(boardId)=>{
        socket.leave(boardId)
        
       }) 
    })
//Everybody gets it
    //!io.emit("taskUpdated",task)

}

module.exports=socketHandler