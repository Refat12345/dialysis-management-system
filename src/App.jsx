import React from "react";

import Dashboard from "./pages/manager_center/dashboard/Dashboard";
// import { HealthInformation, SideBar } from "./components/index";
// import { managerCenterSideBar ,healthInformation } from "./data/data";
const App = () => {
  return (
    <React.StrictMode>
       <Dashboard/>
    </React.StrictMode>
  );
};

export default App;


/*

 <div className=" bg-white flex flex-row-reverse">
            <SideBar sideBarData={managerCenterSideBar} />
            <div className="flex-grow">
                  <HealthInformation healthInformation={healthInformation}/>
            </div>
        </div>
*/ 