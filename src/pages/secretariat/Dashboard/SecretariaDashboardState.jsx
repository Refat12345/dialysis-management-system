/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetHangingPatientQuery } from "../../../services/manager_center/patient/patient_list/PatientSlice";
const SecretariaDashboardContext = createContext();
export const SecretariaDashboardProvider = ({ children }) => {

    const [hangingPatientData, setHangingPatientData] = useState([]);
  const [isLoadinghangingPatient, setIsLoadinghangingPatient] = useState(false);
  const [isSuccesshangingPatient, setIsSuccesshangingPatient] = useState(false);

  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : "14";

  const {
    data: hangingPatient,
    isLoading: ishangingPatientLoading,
    isSuccess: ishangingPatientSuccess,
  } = useGetHangingPatientQuery({centerId: centerIdString });

  useEffect(() => {
    if (ishangingPatientSuccess && hangingPatient) {
      setHangingPatientData(hangingPatient);
      setIsLoadinghangingPatient(false);
      setIsSuccesshangingPatient(true);
    } else if (ishangingPatientLoading) {
      setIsLoadinghangingPatient(true);
      setIsSuccesshangingPatient(false);
    } else {
      setIsLoadinghangingPatient(false);
      setIsSuccesshangingPatient(false);
    }
  }, [ishangingPatientSuccess, ishangingPatientLoading, hangingPatient]);

    
 

  return (
    <SecretariaDashboardContext.Provider value={{
        hangingPatientData,
        isLoadinghangingPatient,
        isSuccesshangingPatient,
        }}>
      {children}
    </SecretariaDashboardContext.Provider>
  );
};

export const useSecretariaDashboard = () => {
  const context = useContext(SecretariaDashboardContext);
  if (context === undefined) {
    throw new Error("useSecretariaDashboard must be used within a UserProvider");
  }
  return context;
};
