/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetPatientQuery
   } 
  from "../../../../services/manager_center/patient/patient_list/PatientSlice";
import { useSelector } from "react-redux";
import { useGetMedicalCenterQuery } from "../../../../services/manager_center/user/user_list/UserSlice";
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

    //
    const [MedicalCenters, setmedicalCenters] = useState([]);
    const [isLoadingMedicalCenters, setIsLoadingMedicalCenters] = useState(false);
    const [isSuccessMedicalCenters, setIsSuccessMedicalCenters] = useState(false);
    const [selectedCenterOption, setSelectedCenterOption] = useState("الكل");
    const [selectedCenterId, setSelectedCenterId] = useState(0);
  
  
    const {
      data: medicalCenters,
      isLoading: medicalLoading,
      isSuccess: medicalSuccess,
    } = useGetMedicalCenterQuery();
  
   
    useEffect(() => {
      if (medicalSuccess && medicalCenters) {
        const centersWithAll = [
          { id: 0, centerName: "الكل" },
          ...medicalCenters.centers,
        ];
        setmedicalCenters(centersWithAll);
        setIsLoadingMedicalCenters(false);
        setIsSuccessMedicalCenters(true);
      } else if (medicalLoading) {
        setIsLoadingMedicalCenters(true);
        setIsSuccessMedicalCenters(false);
      } else {
        setIsLoadingMedicalCenters(false);
        setIsSuccessMedicalCenters(false);
      }
    }, [medicalSuccess, medicalLoading, medicalCenters]);
  
    const handleSelectCenterChange = (selectedCenterName) => {
      let selectedCenter;
      if (selectedCenterName === "الكل") {
        selectedCenter = { id: 0, centerName: "الكل" };
      } else {
        selectedCenter = MedicalCenters.find(
          (center) => center.centerName === selectedCenterName
        );
      }
      setSelectedCenterOption(selectedCenterName);
      setSelectedCenterId(selectedCenter.id);
    };
  
    //
  
  const {
    data: patient,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetPatientQuery({option: translatedOption, centerId: centerIdString,role:user.role,selectedCenterId:selectedCenterId });

 

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
        MedicalCenters,
        handleSelectCenterChange,
        selectedCenterOption,

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
