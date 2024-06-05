/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetUserQuery } from "./UserSlice";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ممرض");

  console.log("selectedOption IS ", selectedOption);


  const translateOption = (option = "nurse") => {
    switch (option) {
      case "طبيب":
        return "doctor";
      case "ممرض":
        return "nurse";
      case "سكرتاريا":
        return "secretary";
      default:
        return "unknown";
    }
  };

  const translatedOption = translateOption(selectedOption);

  

  const {
    data: users,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetUserQuery(translatedOption);

  console.log("ROLE IS ", translatedOption);

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

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoading,
        isSuccess,
        selectedOption,
        setSelectedOption,
        handleSelectChange,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
