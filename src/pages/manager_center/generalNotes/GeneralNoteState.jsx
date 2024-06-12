/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useGetGeneralDetailsQuery } from '../../../services/manager_center/patient/generalNote/GeneralNoteSlice'; 

const GeneralDetailsContext = createContext();

export const GeneralDetailsProvider = ({ children, userId}) => {

    // console.log("id in state is ",userId)
  
  const userIdString = userId ? userId.toString() : '14';
  const { data: users, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetGeneralDetailsQuery(userIdString);

  
//   console.log("dada",users)

  const [generalDetails, setGeneralDetails] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

useEffect(() => {
  if (isUserSuccess && users) {
    setGeneralDetails(users);
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

  
  return (
   <GeneralDetailsContext.Provider value={{ generalDetails,isSuccess,isLoading}}> 
      {children}
    </GeneralDetailsContext.Provider>
  );
};

export const useGeneralDetails = () => {
  const context = useContext(GeneralDetailsContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};
