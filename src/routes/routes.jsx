/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import {
  PatientProfilePage,
  PatientListPage,
  ErrorPage,
  UsersListPage,
  Dashboard,
  MedicalRecordPage,
  PrecedentsSection,
  MedicalAnalysisPage,
  PrescriptionsPage,
  MedicalCentersPage,
  LoginPage,
  UserDetailsPage,
  GeneralDialysis,
  AuditingPage,
  OrdersPage,
  GlobalInfoPage,
} from "../pages/index";
import {} from "../pages/index";
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
  dialysisRoute,
  dialysisDetailsRoute,
  registerRoute,
  invitationRoute,
  auditingRoute,
  secretariaAccountRoute,
  ordersRoute,
  settingRoute,
  globalInfoRoute,
  dialysisSessionsRoute,
  globalNotesRoute,
  
  addPatintinfoRoute,
  addPrescriptionInfoRoute
} from "../data/data";
import { LoginStateProvider } from "../pages/manager_center/auth/login/LoginPageState";
import { RegisterStateProvider } from "../pages/manager_center/auth/register/RegisterPageState";
import RegisterPage from "../pages/manager_center/auth/register/RegisterPage";
import CreateSecretariaAccountState from "../pages/manager_center/secretaria_account/CreateSecretariaAccountState";
import CreateSecretariaAccountPage from "../pages/manager_center/secretaria_account/CreateSecretariaAccountPage";
import RegisterCheckCodePage from "../pages/manager_center/auth/register/RegisterCheckCodePage";

import SettingPage from "../pages/manager_center/setting/SettingPage";
import GlobalInfoState from "../pages/manager_center/patient/global_info/GlobalInfoState";
import DialysisPage from "../pages/manager_center/dialysis/dialysisPage";
import GeneralNotePage from "../pages/manager_center/generalNotes/GeneralNotePage";
import AddPaitentInfo from "../components/addPaitentInfo/AddPaitentInfo";
import AddPaitentInfoState from "../components/addPaitentInfo/AddPaitentInfoState";
import { UserProvider } from "../pages/manager_center/users/users-list/UserListState";
import { PatientProvider } from "../pages/manager_center/patient/patient_list/PaitientListState";
import { UserDetailsProvider } from "../pages/manager_center/users/user-details/UserDetailsState";
import { GeneralDialysisProvider } from "../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysisState";
import GeneralDialysisPage from "../pages/manager_center/dialysis/General/GeneralDialysisPage";
import { DialysisDetailstProvider } from "../pages/manager_center/dialysis/DialysisPageState";
import { SettingProvider } from "../pages/manager_center/setting/SettingState";
import AddPrescription from "../components/addPrescription/AddPrescription";
import AddPrescriptionState from "../components/addPrescription/AddPrescriptionState";


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
        <SideBar sideBarData={managerCenterSideBar} />
        <UserProvider>
        <UsersListPage />
        </UserProvider>
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
        <PatientProvider>
        <PatientListPage />
        </PatientProvider>
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
    children: [
      {
        path: globalInfoRoute,
        element: (
          <GlobalInfoState>
            <GlobalInfoPage />
          </GlobalInfoState>
        ),
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
      {
        path: medicalRecordRoute,
        element: <MedicalRecordPage />,
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
      {
        path: dialysisSessionsRoute,
        element: <DialysisPage />,
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
      {
        path: medicalAnalysisRoute,
        element: <MedicalAnalysisPage />,
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
      {
        path: prescriptionsRoute,
        element: <PrescriptionsPage />,
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
      {
        path: globalNotesRoute,
        element: <GeneralNotePage />,
        //TODO: u may have to add loader
        errorElement: <ErrorPage />,
      },
    ],
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
        element: (
          <PrecedentsSection
            title={pathologicalTitle}
            precedents={pathologicalPrecedents}
          />
        ),
        index: true,
      },
      {
        path: "pathologicalHistory",
        element: (
          <PrecedentsSection
            title={pathologicalTitle}
            precedents={pathologicalPrecedents}
          />
        ),
      },
      {
        path: "surgicalHistory",
        element: (
          <PrecedentsSection
            title={surgicalTitle}
            precedents={surgicalPrecedents}
          />
        ),
      },
      {
        path: "pharmacologicalHistory",
        element: (
          <PrecedentsSection
            title={pharmacologicalTitle}
            precedents={pharmacologicalPrecedents}
          />
        ),
      },
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
    element: (
      <LoginStateProvider>
        <LoginPage />
      </LoginStateProvider>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: registerRoute,
    element: (
      <RegisterStateProvider>
        <RegisterPage />
      </RegisterStateProvider>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: userDetailsRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <UserDetailsProvider>
        <UserDetailsPage />
        </UserDetailsProvider>
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
        <GeneralDialysisProvider>
        <GeneralDialysisPage />
        </GeneralDialysisProvider>
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: dialysisDetailsRoute ,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        {/* <DialysisDetailstProvider > */}
        < DialysisPage/>
        {/* </DialysisDetailstProvider> */}
        
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: auditingRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <AuditingPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: secretariaAccountRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <CreateSecretariaAccountState>
          <CreateSecretariaAccountPage />
        </CreateSecretariaAccountState>
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: ordersRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <OrdersPage />
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: settingRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <SettingProvider>
        <SettingPage />

        </SettingProvider>
        
        
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  //For Delete
  {
    path:addPatintinfoRoute ,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <AddPaitentInfoState>
        <AddPaitentInfo />

        </AddPaitentInfoState>
        
      </>
    ),
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },

  {
    path: addPrescriptionInfoRoute,
    element: (
      <>
        <SideBar sideBarData={managerCenterSideBar} />
        <AddPrescriptionState>
        <AddPrescription />

        </AddPrescriptionState>

      </>
    ),
    errorElement: <ErrorPage />,
  },
  //END FOR DELETE 
]);

export default router;
