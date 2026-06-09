import React, { useContext } from "react";
import { BoardContext } from "../../Context/BoardContextProvider";
import useBoard from "../../hooks/boardHook/useBoard";
import { useSocket } from "../../hooks/useWebsocket";

const DashBoard = () => {
  const { boards } = useBoard("http://localhost:8000/boards");
 useSocket()
  console.log("Board111",boards)
  return (
    <main>
      <section>
        <li>
          {boards && boards?.map((board, index) => <ul>{board.title}</ul>)}
        </li>
      </section>
    </main>
  );
};

export default DashBoard;
