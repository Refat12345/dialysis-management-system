/* eslint-disable react/prop-types */
import { useGetGeneralDialysisQuery,useGetDialysisByPatientQuery } from "../../../../services/manager_center/diyalisis/dialysis_sidebar/GeneralDialysisSlice"; 
import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const GeneralDialysisContext = createContext();

export const GeneralDialysisProvider = ({ children ,userId}) => {

  const storedPatientName = localStorage.getItem('patientName');
  const userIdString = storedPatientName ? storedPatientName.toString() : '14';


  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedYearOption, setSelectedYearOption] = useState("");
  const [selectedMonthOption, setSelectedMonthOption] = useState("");
  const [filteredDataSearch, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const [userByPatient, setUserByPatient] = useState([]);
  const [isLoadingByPatient, setIsLoadingByPatient] = useState(false);
  const [isSuccessByPatient, setIsSuccessByPatient] = useState(false);
  const [selectedYearOptionByPatient, setSelectedYearOptionByPatient] = useState("2024");
  const [selectedMonthOptionByPatient, setSelectedMonthOptionByPatient] = useState("5");

  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : '14';


  const { data: users, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetGeneralDialysisQuery({ month: selectedMonthOption, year: selectedYearOption ,centeId:centerIdString });

  const { data: dialysisByPatient, isLoading: isdialysisByPatientLoading, isSuccess: isdialysisByPatientSuccess } = useGetDialysisByPatientQuery({ month: selectedMonthOption, year: selectedYearOption , userId : userIdString });


  useEffect(() => {
    if (isUserSuccess && users) {
      setUserData(users);
      setIsLoading(false);
      setIsSuccess(true);
    } else if (isUserLoading) {
      setIsLoading(true);
      setIsSuccess(false);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isUserSuccess, isUserLoading, users]);

  useEffect(() => {
    if (searchTerm !== "") {
      const flatUserData = userData.dialysisSessions.flat();
      const filtered = flatUserData.filter((user) =>
        user.patientName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(userData);
    }
  }, [searchTerm, userData]);

  const handleSelectYearChange = (event) => {
    if (!selectedMonthOption) {
      alert('يجب اختيار الشهر أولاً');
      return;
    }
    setSelectedYearOption(event);
  };

  const handleSelectMonthChange = (event) => {
    setSelectedMonthOption(event);
  };

  useEffect(() => {
    if (isdialysisByPatientSuccess && dialysisByPatient) {
      setUserByPatient(dialysisByPatient);
      setIsLoadingByPatient(false);
      setIsSuccessByPatient(true);
    } else if (isdialysisByPatientLoading) {
      setIsLoadingByPatient(true);
      setIsSuccessByPatient(false);
    } else {
      setIsLoadingByPatient(false);
      setIsSuccessByPatient(false);
    }
  }, [isdialysisByPatientSuccess, isdialysisByPatientLoading, dialysisByPatient]);

  const handleSelectYearChangeByPatient = (event) => {
    setSelectedYearOptionByPatient(event);
  };

  const handleSelectMonthChangeByPatient = (event) => {
    setSelectedMonthOptionByPatient(event);
  };

  ////
  return (
    <GeneralDialysisContext.Provider
      value={{
        userData,
        isLoading,
        isSuccess,
        selectedYearOption,
        setSelectedYearOption,
        handleSelectYearChange,
        selectedMonthOption,
        setSelectedMonthOption,
        handleSelectMonthChange,
        setSearchTerm,
        filteredDataSearch,

        handleSelectYearChangeByPatient,
        handleSelectMonthChangeByPatient,
        userByPatient,
        isLoadingByPatient,
        isSuccessByPatient,
        selectedMonthOptionByPatient,
        selectedYearOptionByPatient


      }}
    >
      {children}
    </GeneralDialysisContext.Provider>
  );
};

export const useGeneralDialysis = () => {
  const context = useContext(GeneralDialysisContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
