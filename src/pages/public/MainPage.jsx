/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import Dashboard from "../manager_center/dashboard/Dashboard.jsx"
import SecretariatDashboard from "../secretariat/Dashboard/SecretariatDashboard";
import ManagerDashboard from "../manager/dashboard/ManagerDashboard.jsx";
const MainPage = () => {
    const user = useSelector((state)=>state.user);
  return (
    <>
      { user.role === "admin" ? <Dashboard/> : (user.role === "secretary" ? <SecretariatDashboard/> : <ManagerDashboard/>) }
    </>
  
  )
}

export default MainPage