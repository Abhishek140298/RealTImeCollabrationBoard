const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const connectDB=require('./config/db')
const app = express();
require("dotenv").config();
const boardRoutes=require("./routes/boardRoute")
const taskRoutes =require("./routes/taskRoutes")

app.use(cors());
app.use(express.json());
app.use("/boards",boardRoutes)
app.use("/tasks",taskRoutes)
app.get("/", (req, res) => {
  res.send("Realtime Board Backend Running app");
});

const server = http.createServer(app);
//Raw socket uses the map to store the client id ,const wss=new WeSocket.Server({server})  wss.on("connection",()=>{},message,error,close)
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 8000;
connectDB()
server.listen(PORT, () => {
  console.log(`Server is runing on the PORT ${PORT}`);
});
