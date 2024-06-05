/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useGetUserDetailsQuery } from './UserDetailsSlice'; 

const UserDetailsContext = createContext();

export const UserDetailsProvider = ({ children, userId}) => {
  
  const userIdString = userId ? userId.toString() : '14';
  const { data: users, isLoading: isUserLoading, isSuccess: isUserSuccess } = useGetUserDetailsQuery(userIdString);

  
  

  const [userData, setUserData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  
  return (
   <UserDetailsContext.Provider value={{ userData,isSuccess,isLoading}}> 
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useDetailsUsers = () => {
  const context = useContext(UserDetailsContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};
