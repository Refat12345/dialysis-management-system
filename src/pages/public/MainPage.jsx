/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import Dashboard from "../manager_center/dashboard/Dashboard.jsx"
import SecretariatDashboard from "../secretariat/Dashboard/SecretariatDashboard";
const MainPage = () => {
    const user = useSelector((state)=>state.user);
  return (
    <>
      {  user.role === "admin" ? <Dashboard/> : <SecretariatDashboard/>}
    </>
  
  )
}

export default MainPage