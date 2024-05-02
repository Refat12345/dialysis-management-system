/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/manager_center/dashboard/Dashboard";
import UsersListPage from "../pages/manager_center/users/users-list/UsersListPage";
import ErrorPage from "../pages/error/ErrorPage";
import PatientListPage from "../pages/manager_center/patient/patient_list/PatientListPage";
import {
  mainRoute,
  managerCenterSideBar,
  patientsRoute,
  usersRoute,
} from "../data/data";
import { SideBar } from "../components/index";
import DialysisPage from "../pages/manager_center/dialysis/dialysisPage";

const router = createBrowserRouter([
  {
    path: mainRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <DialysisPage />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: usersRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <UsersListPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: patientsRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <PatientListPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
]);

export default router;
