/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Dashboard from "../manager_center/dashboard/Dashboard.jsx";
import SecretariatDashboard from "../secretariat/Dashboard/SecretariatDashboard";
import ManagerDashboard from "../manager/dashboard/ManagerDashboard.jsx";
import { SecretariaDashboardProvider } from "../secretariat/Dashboard/SecretariaDashboardState.jsx";
const MainPage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.role === "admin" ? ( <Dashboard />
      ) : user.role === "secretary" ? 
      (
          <SecretariaDashboardProvider>
            <SecretariatDashboard />
          </SecretariaDashboardProvider>
      ) : (
          <ManagerDashboard />
      )}
    </>
  );
};

export default MainPage;
