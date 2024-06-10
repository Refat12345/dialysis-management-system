/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { createContext, useContext, useState, useEffect } from "react";
// import { useGetUserQuery } from "./UserSlice";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userData, setUserData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("ممرض");

//   console.log("selectedOption IS ", selectedOption);


//   const translateOption = (option = "nurse") => {
//     switch (option) {
//       case "طبيب":
//         return "doctor";
//       case "ممرض":
//         return "nurse";
//       case "سكرتاريا":
//         return "secretary";
//       default:
//         return "unknown";
//     }
//   };

//   const translatedOption = translateOption(selectedOption);

  

//   const {
//     data: users,
//     isLoading: isUserLoading,
//     isSuccess: isUserSuccess,
//   } = useGetUserQuery(translatedOption);

//   console.log("ROLE IS ", translatedOption);

//   useEffect(() => {
//     if (isUserSuccess && users) {
//       setUserData(users);
//       setIsLoading(false);
//       setIsSuccess(true);
//     } else if (isUserLoading) {
//       setIsLoading(true);
//       setIsSuccess(false);
//     } else {
//       setIsLoading(false);
//       setIsSuccess(false);
//     }
//   }, [isUserSuccess, isUserLoading, users]);

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         userData,
//         isLoading,
//         isSuccess,
//         selectedOption,
//         setSelectedOption,
//         handleSelectChange,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUsers = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUsers must be used within a UserProvider");
//   }
//   return context;
// };



///////////
import { createContext, useContext, useState, useEffect } from "react";
import { useGetUserQuery } from "../../../../services/manager_center/user/user_list/UserSlice"; 

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ممرض");
  const [searchTerm, setSearchTerm] = useState('');

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
    if (searchTerm !== '') {
      // console.log(searchTerm)

       console.log(userData)

       const flatUserData = userData.flat();
       const filtered = flatUserData.filter(user => 
         user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
       );
      console.log(filtered)
      setFilteredData(filtered);
    } else {
      setFilteredData(userData);
    }
  }, [searchTerm, userData]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        filteredData,
        isLoading,
        isSuccess,
        selectedOption,
        setSelectedOption,
        handleSelectChange,
        setSearchTerm,
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