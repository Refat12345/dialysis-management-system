/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import Dashboard from "../manager_center/dashboard/Dashboard.jsx"
import SecretariatDashboard from "../secretariat/Dashboard/SecretariatDashboard";
import { PatientProvider } from "../manager_center/patient/patient_list/PaitientListState.jsx";
const MainPage = () => {
    const user = useSelector((state)=>state.user);
  return (
    <>
      {  user.role === "admin" ? <Dashboard/> :    
      <PatientProvider>
            <SecretariatDashboard/>
            </PatientProvider>}
    </>
  
  )
}

export default MainPage