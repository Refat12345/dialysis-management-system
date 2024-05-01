import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import PatientListPage from "../pages/manager_center/patient/patient_list/PatientListPage";
import { mainRoute, patientsRoute, usersRoute } from "../data/data";
import UsersListPage from "../pages/manager_center/users/users-list/UsersListPage";

const router = createBrowserRouter([
  {
    path: mainRoute,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: usersRoute,
    element: <UsersListPage />,
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
  {
    path: patientsRoute,
    element: <PatientListPage />,
    //TODO: u may have to add loader
    errorElement: <ErrorPage />,
  },
]);

export default router;
