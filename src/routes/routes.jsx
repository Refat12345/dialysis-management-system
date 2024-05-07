/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import { PatientProfilePage, PatientListPage, ErrorPage, UsersListPage, Dashboard, MedicalRecordPage, PrecedentsSection , MedicalAnalysisPage ,PrescriptionsPage ,MedicalCentersPage} from "../pages/index"
import { PatientProfileStateProvider } from "../pages/manager_center/patient/patient_profile/PatientProfileState";
import { SideBar } from "../components/index";

import {
  mainRoute,
  managerCenterSideBar,
  patientProfileRoute,
  patientsRoute,
  usersRoute,
  medicalRecordRoute,
  medicalAnalysisRoute,
  prescriptionsRoute,
  medicalCentersRoute,
  loginRoute
} from "../data/data";

import LoginPage from "../pages/manager_center/auth/login/LoginPage";
import DialysisPage from "../pages/manager_center/dialysis/dialysisPage";


const router = createBrowserRouter([
  {
    path: mainRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <Dashboard />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: usersRoute,
    element: (
      <>
        <SideBar  sideBarData={managerCenterSideBar} />
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
  {
    path: patientProfileRoute,
    element: (
      <PatientProfileStateProvider>
        <SideBar sideBarData={managerCenterSideBar} />
        <PatientProfilePage />
      </PatientProfileStateProvider>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: medicalRecordRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <MedicalRecordPage />
      </>
    ),
    children: [
      {
        path: "pharmacologicalHistory",
        element: <PrecedentsSection  />,
        index:true
      },
      {
        path: "surgicalHistory",
        element: <PrecedentsSection  />,
      },
      {
        path: "pathologicalHistory",
        element: <PrecedentsSection />,
      }
    ],
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: medicalAnalysisRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <MedicalAnalysisPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: prescriptionsRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <PrescriptionsPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: medicalCentersRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <MedicalCentersPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: loginRoute,
    element: <LoginPage />,
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
]);

export default router;
