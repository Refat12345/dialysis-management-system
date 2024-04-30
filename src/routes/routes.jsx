import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import PatientListPage from "../pages/manager_center/patient/patient_list/PatientListPage";
import { mainRoute, patientsRoute } from "../data/data";

const router = createBrowserRouter([
  {
    path: mainRoute,
    element: <App />,
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
