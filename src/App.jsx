/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { PieChart } from "./components";

const App = () => {
  return (
    <div className="flex flex-row-reverse">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
