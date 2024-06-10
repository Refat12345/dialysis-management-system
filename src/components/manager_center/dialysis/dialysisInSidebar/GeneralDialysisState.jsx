/* eslint-disable react/prop-types */
import { useGetGeneralDialysisQuery } from "../../../../services/manager_center/diyalisis/dialysis_sidebar/GeneralDialysisSlice"; 
import { createContext, useContext, useState, useEffect } from "react";

const GeneralDialysisContext = createContext();

export const GeneralDialysisProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedYearOption, setSelectedYearOption] = useState("2024");
  const [selectedMonthOption, setSelectedMonthOption] = useState("5");
  const [filteredDataSearch, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: users, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetGeneralDialysisQuery({ month: selectedMonthOption, year: selectedYearOption });

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
    setSelectedYearOption(event);
  };

  const handleSelectMonthChange = (event) => {
    setSelectedMonthOption(event);
  };

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
        filteredDataSearch
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
