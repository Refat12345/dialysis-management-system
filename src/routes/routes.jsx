
/* eslint-disable no-unused-vars */
import { createBrowserRouter , Navigate} from "react-router-dom";
import {
  PatientProfilePage,
  PatientListPage,
  ErrorPage,
  UsersListPage,
  MedicalRecordPage,
  PrecedentsSection,
  MedicalAnalysisPage,
  PrescriptionsPage,
  MedicalCentersPage,
  LoginPage,
  UserDetailsPage,
  AuditingPage,
  OrdersPage,
  GlobalInfoPage,
  EnterMedicalRecordPage,
  AddMedicalAnalysisPage,
  MainPage,
  Appointment,
  LogOut
} from "../pages/index";
import { PatientProfileStateProvider } from "../pages/manager_center/patient/patient_profile/PatientProfileState";
import {
  mainRoute,
  patientProfileRoute,
  patientsRoute,
  usersRoute,
  medicalRecordRoute,
  medicalAnalysisRoute,
  prescriptionsRoute,
  medicalCentersRoute,
  loginRoute,
  pathologicalTitle,
  surgicalTitle,
  pharmacologicalTitle,
  userDetailsRoute,
  dialysisRoute,
  dialysisDetailsRoute,
  registerRoute,
  auditingRoute,
  secretariaAccountRoute,
  ordersRoute,
  settingRoute,
  globalInfoRoute,
  globalNotesRoute,
  addPatintinfoRoute,
  addPrescriptionInfoRoute,
  enterMedicalRecordRoute,
  addMedicalAnalysisRoute,
  enterDisbursedMedicines,
  dialysisByPatient,
  patientOptionRoute,
  disbursedMaterialsRoute,
  assignMaterialToUserCenter,
  AddUserRoute,
  AddMedicalRoute,
  assignAppointmentRoute,
  appointment,
  notes,
  GetUnAcceptedPatientRoute,
  userInvites,
  logoutRoute
} from "../data/data";
import { LoginStateProvider } from "../pages/manager_center/auth/login/LoginPageState";
import { RegisterStateProvider } from "../pages/manager_center/auth/register/RegisterPageState";
import RegisterPage from "../pages/manager_center/auth/register/RegisterPage";
import CreateSecretariaAccountState from "../pages/manager_center/secretaria_account/CreateSecretariaAccountState";
import CreateSecretariaAccountPage from "../pages/manager_center/secretaria_account/CreateSecretariaAccountPage";
import EnterMedicalRecordState from "../pages/secretariat/patient/medical_record/EnterMedicalRecordState";
import MainLayout from "../pages/MainLayout";
import SettingPage from "../pages/manager_center/setting/SettingPage";
import GlobalInfoState from "../pages/manager_center/patient/global_info/GlobalInfoState";
import DialysisPage from "../pages/manager_center/dialysis/dialysisPage";
import GeneralNotePage from "../pages/manager_center/generalNotes/GeneralNotePage";
import AddPaitentInfoState from "../components/addPaitentInfo/AddPaitentInfoState";
import { UserProvider } from "../pages/manager_center/users/users-list/UserListState";
import { PatientProvider } from "../pages/manager_center/patient/patient_list/PaitientListState";
import { UserDetailsProvider } from "../pages/manager_center/users/user-details/UserDetailsState";
import { GeneralDialysisProvider } from "../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysisState";
import GeneralDialysisPage from "../pages/manager_center/dialysis/General/GeneralDialysisPage";
import { SettingProvider } from "../pages/manager_center/setting/SettingState";
import AddPrescriptionState from "../components/addPrescription/AddPrescriptionState";

import AddMedicalAnalysisState from "../pages/secretariat/patient/medical_analysis/add_analysis/AddMedicalAnalysisState";
import EnterDisbursedMedicines from "../pages/secretariat/enter_disbursed_medicines/EnterDisbursedMedicinesPage";
import EnterDisbursedMedicinesState from "../pages/secretariat/enter_disbursed_medicines/EnterDisbursedMedicinesState";
import { GeneralDetailsProvider } from "../pages/manager_center/generalNotes/GeneralNoteState";
import MedicalRecordState from "../pages/manager_center/patient/medical_record/MedicalRecordState";
import EditMedicalAnalysisState from "../pages/secretariat/patient/medical_analysis/edit_analysis/EditMedicalAnalysisState";
import EditPrescriptionsState from "../pages/secretariat/patient/prescriptions/edit_prescriptions/EditPrescriptionsState";
import AddPrespictionPage from "../pages/secretariat/patient/prescriptions/AddPrespictionPage";
import AddPatientInfoPage from "../pages/secretariat/patient/AddPatientInfoPage";
import AssignMaterialToUserCenter from "../components/AssignMaterialToUserCenter";
import OrdersState from "../pages/manager_center/orders/OrdersState";
import DisbursedMaterials from "../pages/manager_center/disbursed_materials/DisbursedMaterials";
import Notes from "../pages/manager_center/notes/Notes";
import AddUser from "../components/addUser/AddUser";
import CreateUserState from "../components/addUser/CreateUserState";
import CreateMedicalState from "../components/AddMedicalCenter/CreateMedicalState";
import AddMedicalCenter from "../components/AddMedicalCenter/AddMedicalCenter";
import GetUnAcceptedPatient from "../components/manager_center/patient/GetUnAcceptedPatient";
import UserInvites from "../pages/manager_center/users/UserInvites";
import HomePage from "../pages/public/home_page/HomePage";
import { UserInvitesProvider } from "../pages/manager_center/users/UserInvitesState";
import { UnAccepectedPatientProvider } from "../pages/manager_center/patient/UnAccepectedPatient";

const router = createBrowserRouter([
  {
    path: '/',  
    element:(
      <HomePage/>
    ),
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
    path: '/app', 
    element: <MainLayout />,  
    children: [
      {
        path:logoutRoute,
        element :(
          <LogOut/>
        )
      },
      {
        path: "",
        element: (
            <MainPage />

        ),
        index:true,
        errorElement: <ErrorPage />,
      },
      {
        path: mainRoute,
        element: (
            <MainPage />

        ),
        errorElement: <ErrorPage />,
      },
      {
        path: usersRoute,
        element: (
          <UserProvider>
            <UsersListPage />
          </UserProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: userDetailsRoute,
        element: (
          <UserDetailsProvider>
            <UserDetailsPage />
          </UserDetailsProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: patientsRoute,
        element: (
          <PatientProvider>
            <PatientListPage />
          </PatientProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: patientProfileRoute,
        element: (
          <PatientProfileStateProvider>
            <PatientProfilePage />
          </PatientProfileStateProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: globalInfoRoute,
            element: (
              <GlobalInfoState>
                <GlobalInfoPage />
              </GlobalInfoState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: medicalRecordRoute,
            element: (
              <MedicalRecordState>
                <MedicalRecordPage />
              </MedicalRecordState>
            ),
            children: [
              {
                path: '',
                element: (
                  <PrecedentsSection
                    title={pathologicalTitle}
                    type={'pathological'}
                  />
                ),
                index: true,
              },
              {
                path: 'pathologicalHistory',
                element: (
                  <PrecedentsSection
                    title={pathologicalTitle}
                    type={'pathological'}
                  />
                ),
              },
              {
                path: 'surgicalHistory',
                element: (
                  <PrecedentsSection
                    title={surgicalTitle}
                    type={'surgical'}
                  />
                ),
              },
              {
                path: 'pharmacologicalHistory',
                element: (
                  <PrecedentsSection
                    title={pharmacologicalTitle}
                    type={'pharmacological'}
                  />
                ),
              },
            ],
            errorElement: <ErrorPage />,
          },
          {
            path: dialysisByPatient,
            element: (
              <GeneralDialysisProvider>
                <GeneralDialysisPage />
              </GeneralDialysisProvider>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: medicalAnalysisRoute,
            element: (
              <EditMedicalAnalysisState>
                <MedicalAnalysisPage />
              </EditMedicalAnalysisState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: prescriptionsRoute,
            element: (
              <EditPrescriptionsState>
                <PrescriptionsPage />
              </EditPrescriptionsState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: globalNotesRoute,
            element: (
              <GeneralDetailsProvider>
                <GeneralNotePage />
              </GeneralDetailsProvider>
            ),
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: medicalCentersRoute,
        element: <MedicalCentersPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: dialysisRoute,
        element: (
          <GeneralDialysisProvider>
            <GeneralDialysisPage type={'general'} />
          </GeneralDialysisProvider>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: dialysisDetailsRoute,
        element: (
          <DialysisPage />
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: auditingRoute,
        element: <AuditingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: secretariaAccountRoute,
        element: (
          <CreateSecretariaAccountState>
            <CreateSecretariaAccountPage />
          </CreateSecretariaAccountState>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: AddUserRoute,
        element: (
          <CreateUserState>
            <AddUser />

          </CreateUserState>
        ),
        errorElement: <ErrorPage />,
      },
      /////

      {
        path: GetUnAcceptedPatientRoute,
        element: (
          <UnAccepectedPatientProvider>
                    <GetUnAcceptedPatient/>
          </UnAccepectedPatientProvider>
           
        ),
        errorElement: <ErrorPage />,
      },

      ////
      
      {
        path: AddMedicalRoute,
        element: (
          <CreateMedicalState>
            <AddMedicalCenter />
          </CreateMedicalState>
        ),
        errorElement: <ErrorPage />,
      },
      
      {
        path: ordersRoute,
        element: <OrdersState>
            <OrdersPage />
        </OrdersState>,
        errorElement: <ErrorPage />,
      },
      
      
      {
        path: settingRoute,
        element: (
          <SettingProvider>
            <SettingPage />
          </SettingProvider>
        ),
        errorElement: <ErrorPage />,
      },

      {
        path: userInvites,
        element: (
          <UserInvitesProvider>
            <UserInvites />
          </UserInvitesProvider>
        ),
        errorElement: <ErrorPage />,
      },
    
      {
        path: enterDisbursedMedicines,
        element: (
          <EnterDisbursedMedicinesState>
            <EnterDisbursedMedicines />
          </EnterDisbursedMedicinesState>
        ),
        errorElement: <ErrorPage />,
      },
      //////
      {
        path: patientOptionRoute,
        errorElement: <ErrorPage />,
        children: [
          {
            path: addPrescriptionInfoRoute,
            element: (
              <AddPrescriptionState>
              <AddPrespictionPage />
            </AddPrescriptionState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: addMedicalAnalysisRoute,
            element: (
              <AddMedicalAnalysisState>
                <AddMedicalAnalysisPage />
              </AddMedicalAnalysisState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: enterMedicalRecordRoute,
            element: (
              <EnterMedicalRecordState>
                <EnterMedicalRecordPage />
              </EnterMedicalRecordState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: addPatintinfoRoute,
            element: (
              <AddPaitentInfoState>
                <AddPatientInfoPage />
              </AddPaitentInfoState>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: assignAppointmentRoute,
            element: (
              <Appointment/>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: medicalCentersRoute,
            element: (
              <MedicalCentersPage/>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: assignMaterialToUserCenter,
            element: (
            <AssignMaterialToUserCenter />
        
            ),
            errorElement: <ErrorPage />,
          },

        ],
      },
      {
        path:disbursedMaterialsRoute,
        element :(
          <DisbursedMaterials/>
        )
      },
      {
        path:appointment,
        element :(
          <Appointment/>
        )
      },
      {
        path:notes,
        element :(
          // <Notes/>
          <GeneralDetailsProvider>
          <GeneralNotePage type={"sidebar"} />
        </GeneralDetailsProvider>
        )
      },
      {
        path:assignAppointmentRoute,
        element :(
          <Appointment/>
        )
      },
      
    ],
    
  },
]);

export default router;
