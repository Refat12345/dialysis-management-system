/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Theme } from "@radix-ui/themes";

const App = () => {
  return (
    <Theme>
      <div className="flex flex-row-reverse">
        <RouterProvider router={router} />
      </div>
    </Theme>
  );
};

export default App;
