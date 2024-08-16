/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { generateToken ,messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
const App = () => {
//  useEffect(()=> {
//     generateToken();
//     //  onMessage(messaging,(payload) => {
//     //   console.log(payload)
//     // })

//   },[])
  return ( 
    <div className="flex flex-row-reverse">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
