// import {useRef,useCallback,useState,useEffect} from 'react'


// export const useWebSocket=(url)=>{
//    const socketRef=useRef(null)
//    const reconnectAttempt=useRef(null)
//    const isMounted=useRef(false)
//    const reconnectTimeIntervalIdRef=useRef()
//    const [isConnected,setIsconnected]=useState(false)

//    const connect=useCallback(()=>{
      
//     if(socketRef.current&&socketRef.current.readyState===WebSocket.OPEN)return
//     const socket=new WebSocket(url)
//     socketRef.current=socket
//     socket.onopen=()=>{
//         setIsconnected(true)
//         reconnectAttempt.current=0

//     }
//     socket.onmessage=(event)=>{
//         console.log(event.data)

//     }

//     socket.onclose=()=>{
//         if(!isMounted.current)return
//         setIsconnected(false)
//         reconnect()
//     }

//     socket.onerror=(error)=>{
//         socket.close()
//     }



//    },[url])

// const reconnect=useCallback(()=>{
//     const attempt=reconnectAttempt.current
//     const delay=Math.min(1000*attempt**2,10000)
//     reconnectTimeIntervalIdRef=setTimeout(()=>{
//         if(!isMounted.current)return
//         connect()
//     },delay)

// },[connect])

// const sendMessage=(message)=>{
//     if(socketRef.current&&(socketRef.current.readyState===WebSocket.OPEN||socketRef.current.CONNECT)){
//         socketRef.current.send(message)
//     }
// }

// useEffect(()=>{
// isMounted.current=true
// connect()
// return ()=>{
//     isMounted.current=false
//     clearTimeout(reconnectTimeIntervalIdRef)
//     if(socketRef.current){
//         socketRef.current.onopen=null
//         socketRef.current.onmessage=null
//         socketRef.current.onclose=null
//         socketRef.current.onerror=null
//     }
// }

// },[connect])


// return {
//     isConnected,
//     sendMessage
// }

// }


 

