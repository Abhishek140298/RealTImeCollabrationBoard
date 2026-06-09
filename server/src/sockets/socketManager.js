const {server}=require('socket.io')

let io

const initSocket=(server)=>{
    io=new Server(server,{
        cors:{origin:'*',methods:["GET", "POST", "PATCH", "DELETE"]}
    })
   return io 
}


const getIO=()=>{
    if(!io){throw new Error("Socket not initalized")

    }
    return io
}

module.exports={initSocket,getIO}