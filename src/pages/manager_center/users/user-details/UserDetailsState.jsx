/* eslint-disable react/prop-types */


import { createContext, useContext, useState, useEffect } from 'react';
import { useGetUserDetailsQuery } from '../../../../services/manager_center/user/user_details/UserDetailsSlice'; 

const UserDetailsContext = createContext();
export const UserDetailsProvider = ({ children, userId }) => {
  const userIdString = userId ? userId.toString() : null;
  const { data: user, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetUserDetailsQuery(userIdString, {
    skip: !userIdString,       
  });
  const [userData, setUserData] = useState(null);  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isUserSuccess && user) {
      setUserData(user);
      setIsLoading(false);
      setIsSuccess(true);
    } else if (isUserLoading) {
      setIsLoading(true);
      setIsSuccess(false);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isUserSuccess, isUserLoading, user]);

  return (
    <UserDetailsContext.Provider value={{ userData, isSuccess, isLoading }}> 
      {children}
    </UserDetailsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDetailsUsers = () => {
  const context = useContext(UserDetailsContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};