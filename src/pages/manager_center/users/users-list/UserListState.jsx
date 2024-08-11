/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import {
  useGetUserQuery,
  useGetMedicalCenterQuery,
  useGetUserInvitesQuery
} from "../../../../services/manager_center/user/user_list/UserSlice";
import { useSelector } from "react-redux";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");

  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : "14";


  //getInvites
  const [userInvites, setUserInvites] = useState([]);

  const [isUserInvitesLoading, setIsUserInvitesLoading] = useState(false);
  const [isUserInvitesSuccess, setIsUserInvitesSuccess] = useState(false);

  const [searchTermForInvites, setSearchTermForInvites] = useState("");
  const [filteredDataForInvites, setFilteredDataForInvites] = useState([]);


  const {
    data: userinvitedata,
    isLoading: userinviteloading,
    isSuccess: userinvitesucess,
  } = useGetUserInvitesQuery({id:centerIdString,role:user.role});




  
  useEffect(() => {
    if (userinvitesucess && userinvitedata) {
      setUserInvites(userinvitedata.data);
      setIsUserInvitesLoading(false);
      setIsUserInvitesSuccess(true);
    } else if (userinviteloading) {
      setIsUserInvitesLoading(true);
      setIsUserInvitesSuccess(false);
    } else {
      setIsUserInvitesLoading(false);
      setIsUserInvitesSuccess(false);
    }
  }, [userinvitesucess, userinviteloading, userinvitedata]);

  useEffect(() => {
    if (searchTermForInvites !== "") {
      const flatUserData = userInvites.flat();
      const filtered = flatUserData.filter((user) =>
        user.fullName.toLowerCase().includes(searchTermForInvites.toLowerCase())
      );
      console.log(filtered);
      setFilteredDataForInvites(filtered);
    } else {
      setFilteredDataForInvites(userInvites);
    }
  }, [searchTermForInvites, userInvites]);

  




  //EndGetInvites

  /////
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
    console.log("qppppppppppppppp")
    if (medicalSuccess && medicalCenters) {
      const centersWithAll = [
        
        ...medicalCenters.centers,
        { id: 0, centerName: "الكل" },
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

  //////

  const translateOption = (option = "الكل") => {
    switch (option) {
      case "طبيب":
        return "doctor";
      case "الكل":
        return "all";
      case "ممرض":
        return "nurse";
      case "السكرتارية":
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
  } = useGetUserQuery({ option: translatedOption, centerId: centerIdString ,role:user.role,selectedCenterId:selectedCenterId});

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
      const flatUserData = userData.flat();
      const filtered = flatUserData.filter((user) =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);
      setFilteredData(filtered);
    } else {
      setFilteredData(userData);
    }
  }, [searchTerm, userData]);

  const handleSelectChange = (event) => {
    setSelectedOption(event);
  };

 
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
        isSuccessMedicalCenters,
        isLoadingMedicalCenters,
        MedicalCenters,
        handleSelectCenterChange,
        selectedCenterOption,
        isUserInvitesSuccess,
        isUserInvitesLoading,
        userInvites,
        setSearchTermForInvites,
        filteredDataForInvites

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
