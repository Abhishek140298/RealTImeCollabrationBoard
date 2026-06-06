import React ,{useContext} from "react";
import { BoardContext } from "../../Context/BoardContextProvider";

const DashBoard = () => {
  const co=useContext(BoardContext)
    console.log("Hey there buddy",co)
  return <main>Hello Dashboard</main>;
};

export default DashBoard;
