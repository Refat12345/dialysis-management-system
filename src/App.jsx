/* eslint-disable no-unused-vars */
import React from "react";

import Dashboard from "./pages/manager_center/dashboard/Dashboard";
import UsersListPage from "./pages/manager_center/users/users-list/UsersListPage";
import Header from "./components/manager_center/users/Header";
import ViewCard from "./components/manager_center/users/ViewCard";
// import { HealthInformation, SideBar } from "./components/index";
// import { managerCenterSideBar ,healthInformation } from "./data/data";
import { cardsData ,managerCenterSideBar } from "./data/data";
import { SideBar } from "./components/index";
const App = () => {
  return (
    <React.StrictMode>
        <UsersListPage/>
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