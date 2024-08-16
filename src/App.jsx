/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { getFCMToken } from "./firebase/firebase-messaging";
const App = () => {
  useEffect(() => {
    getFCMToken();
  }, []);
  return (
    <div className="flex flex-row-reverse">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
