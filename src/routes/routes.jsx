/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import { PatientProfilePage, PatientListPage, ErrorPage, UsersListPage, Dashboard, 
        MedicalRecordPage, PrecedentsSection , MedicalAnalysisPage ,PrescriptionsPage ,
        MedicalCentersPage ,LoginPage, UserDetailsPage , GeneralDialysis, } from "../pages/index"
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
  loginRoute,
  pathologicalTitle,
  pathologicalPrecedents,
  surgicalTitle,
  surgicalPrecedents,
  pharmacologicalTitle,
  pharmacologicalPrecedents,
  userDetailsRoute,
  dialysisRoute
} from "../data/data";
import { LoginStateProvider } from "../pages/manager_center/auth/login/LoginPageState";


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
        path: "",
        element: <PrecedentsSection title={pathologicalTitle} precedents={pathologicalPrecedents} />,
        index:true
      },
      {
        path: "pathologicalHistory",
        element: <PrecedentsSection title={pathologicalTitle} precedents={pathologicalPrecedents}/>,
      },
      {
        path: "surgicalHistory",
        element: <PrecedentsSection title={surgicalTitle} precedents={surgicalPrecedents} />,
      },
      {
        path: "pharmacologicalHistory",
        element: <PrecedentsSection title={pharmacologicalTitle} precedents={pharmacologicalPrecedents} />,
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
    element: <LoginStateProvider>
      <LoginPage />
    </LoginStateProvider>,
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: userDetailsRoute,
    element: (
      <>
        <SideBar  sideBarData={managerCenterSideBar} />
        <UserDetailsPage />
        
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },


  {
    path: dialysisRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <GeneralDialysis/>
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },



]);

export default router;
