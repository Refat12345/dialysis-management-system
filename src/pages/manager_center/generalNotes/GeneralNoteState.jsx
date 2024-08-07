/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetNoteForPatientQuery } from "../../../services/manager_center/patient/generalNote/GeneralNoteSlice";

const GeneralDetailsContext = createContext();

export const GeneralDetailsProvider = ({ children, userId }) => {



  const userIdString = userId ? userId.toString() : "14";


  const {
    data: users,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetNoteForPatientQuery(userIdString);

  
  const [generalDetails, setGeneralDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  useEffect(() => {
    if (isUserSuccess && users) {

      setGeneralDetails(users.notes);
      setIsLoading(false);
      setIsSuccess(true);
    } else if (isUserLoading) {
      setIsLoading(true);
      setIsSuccess(false);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isUserSuccess, isUserLoading, users,generalDetails]);


  return (
    <GeneralDetailsContext.Provider
      value={{ generalDetails, isSuccess, isLoading }}
    >
      {children}
    </GeneralDetailsContext.Provider>
  );
};

export const useGeneralDetails = () => {
  const context = useContext(GeneralDetailsContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
