/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetUnAcceptedPatientQuery } from "../../../services/manager_center/patient/patient_list/PatientSlice";
const UnAccepectedPatientContext = createContext();
export const UnAccepectedPatientProvider = ({ children }) => {
    
  const [patientUnAcceptedData, setPatientUnAcceptedData] = useState([]);
  const [isLoadingUnAccepted, setIsLoadingUnAccepted] = useState(false);
  const [isSuccessUnAccepted, setIsSuccessUnAccepted] = useState(false);

  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : "14";

  const {
    data: patientUn,
    isLoading: isUserUnLoading,
    isSuccess: isUserUnSuccess,
  } = useGetUnAcceptedPatientQuery({ centerId: centerIdString });

  useEffect(() => {
    if (isUserUnSuccess && patientUn) {
      setPatientUnAcceptedData(patientUn.patients);
      setIsLoadingUnAccepted(false);
      setIsSuccessUnAccepted(true);
    } else if (isUserUnLoading) {
      setIsLoadingUnAccepted(true);
      setIsSuccessUnAccepted(false);
    } else {
      setIsLoadingUnAccepted(false);
      setIsSuccessUnAccepted(false);
    }
  }, [isUserUnSuccess, isUserUnLoading, patientUn]);

  return (
    <UnAccepectedPatientContext.Provider value={{isSuccessUnAccepted,
        isLoadingUnAccepted,
        patientUnAcceptedData,}}>
      {children}
    </UnAccepectedPatientContext.Provider>
  );
};

export const useUnAccepectedPatient = () => {
  const context = useContext(UnAccepectedPatientContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
