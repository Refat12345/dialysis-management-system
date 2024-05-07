/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import DropDown from "./components/public/drop_down/DropDown";


const App = () => {
  
  return (
    <div className="flex flex-row-reverse mr-20">
      <RouterProvider router={router} />
      
        
    </div>
  );
};

export default App;
