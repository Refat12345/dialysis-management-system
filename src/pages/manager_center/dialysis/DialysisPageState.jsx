/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useGetDialysisDetailsQuery } from '../../../services/manager_center/diyalisis/diyalisis_details/DialysisDetailsSlice'; 
const DialysisDetailsContext = createContext();

export const DialysisDetailstProvider = ({ children ,id}) => {

  const userIdString = id ? id.toString() : null;

  const { data: patient, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetDialysisDetailsQuery (userIdString,{skip: !userIdString,});

  

  const [patientData, setPatientData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);




useEffect(() => {
  if (isUserSuccess && patient) {
    setPatientData(patient);
    setIsLoading(false);
    setIsSuccess(true);
  } else if (isUserLoading) {
    setIsLoading(true);
    setIsSuccess(false);
  } else {
    setIsLoading(false);
    setIsSuccess(false);
  }
}, [isUserSuccess, isUserLoading, patient]);


  
  
  return (
 <DialysisDetailsContext.Provider value={{ patientData,isLoading,isSuccess }}> 
      {children}
    </DialysisDetailsContext.Provider>
  );
};

export const useDialysisDetails = () => {
  const context = useContext(DialysisDetailsContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};
