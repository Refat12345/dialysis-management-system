import React from "react";

import Dashboard from "./pages/manager_center/dashboard/Dashboard";
import PatientListPage from "./pages/manager_center/users/users-list/UsersListPage";
import UsersListPage from "./pages/manager_center/users/users-list/UsersListPage";

const App = () => {
  return (
    <React.StrictMode>
      <UsersListPage />
    </React.StrictMode>
  );
};

export default App;
