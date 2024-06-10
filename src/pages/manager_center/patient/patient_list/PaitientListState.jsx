/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetPatientQuery } from "../../../../services/manager_center/patient/patient_list/PatientSlice";

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
        return "accepted";
      case "مرضى مرفوضين":
        return "nurse";
      case "مرضى انتظار":
        return "secretary";
      default:
        return "unknown";
    }
  };

  const translatedOption = translateOption(selectedOption);

  const {
    data: patient,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetPatientQuery(translatedOption);

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
      console.log("hi gg")
      setFilteredData(patientData);
    }
  }, [searchTerm, patientData]);

  const handleSelectChange = (event) => {
    setSelectedOption(event);
  };

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
        filteredDataSearch
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
