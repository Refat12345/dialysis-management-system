/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const App = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
