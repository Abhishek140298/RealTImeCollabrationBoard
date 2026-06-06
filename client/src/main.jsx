import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BoardContextProvider from "./Context/BoardContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      <BoardContextProvider>
        {" "}
        <App />
      </BoardContextProvider>
    </BrowserRouter>
  </StrictMode>
);

{
  /* 
  
  Redux,Context should be used used here,=>Board Proveider ,Auth Provider to send the user details and Board dtails*/
}
