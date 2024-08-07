/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetPatientQuery,useGetUnAcceptedPatientQuery,useGetHangingPatientQuery } from "../../../../services/manager_center/patient/patient_list/PatientSlice";
import { useSelector } from "react-redux";
const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [filteredDataSearch, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedOption, setSelectedOption] = useState("مرضى مقبولين");

  const translateOption = (option = "nurse") => {
    switch (option) {
      case "مرضى مقبولين":
        return "مقبول";
      case "مرضى مرفوضين":
        return "مرفوض";
      case "مرضى انتظار":
        return "انتظار";
      default:
        return "unknown";
    }
  };

  const translatedOption = translateOption(selectedOption);

  const user = useSelector((state) => state.user);

  let centerIdString = '14';  
  
  if (user.role === 'superAdmin') {
    centerIdString = '0';
  } else if (user.centerID) {
    centerIdString = user.centerID.toString();
  }
  
  const {
    data: patient,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetPatientQuery({option: translatedOption, centerId: centerIdString });

  ////////////////////////////

  const [patientUnAcceptedData, setPatientUnAcceptedData] = useState([]);
  const [isLoadingUnAccepted, setIsLoadingUnAccepted] = useState(false);
  const [isSuccessUnAccepted, setIsSuccessUnAccepted] = useState(false);

  const {
    data: patientUn,
    isLoading: isUserUnLoading,
    isSuccess: isUserUnSuccess,
  } = useGetUnAcceptedPatientQuery({centerId: centerIdString });

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






  /////////////////////////

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

  useEffect(() => {
    if (searchTerm !== "") {
      const flatUserData = patientData.flat();
      const filtered = flatUserData.filter((user) =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(patientData);
    }
  }, [searchTerm, patientData]);

  const handleSelectChange = (event) => {
    setSelectedOption(event);
  };

  // المعلق
  const [hangingPatientData, setHangingPatientData] = useState([]);
  const [isLoadinghangingPatient, setIsLoadinghangingPatient] = useState(false);
  const [isSuccesshangingPatient, setIsSuccesshangingPatient] = useState(false);

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
    <PatientContext.Provider
      value={{
        patientData,
        isLoading,
        isSuccess,
        selectedOption,
        setSelectedOption,
        handleSelectChange,
        setSearchTerm,
        filteredDataSearch,
        isSuccessUnAccepted,
        isLoadingUnAccepted,
        patientUnAcceptedData,
        hangingPatientData,
        isLoadinghangingPatient,
        isSuccesshangingPatient

      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
