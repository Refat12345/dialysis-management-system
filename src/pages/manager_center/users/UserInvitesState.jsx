/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from "react";
import { useGetUserInvitesQuery } from "../../../services/manager_center/user/user_list/UserSlice";
import { useSelector } from "react-redux";

const UserInvitesContext = createContext();
export const UserInvitesProvider = ({ children }) => {
  const [userInvites, setUserInvites] = useState([]);

  const [isUserInvitesLoading, setIsUserInvitesLoading] = useState(false);
  const [isUserInvitesSuccess, setIsUserInvitesSuccess] = useState(false);

  const [searchTermForInvites, setSearchTermForInvites] = useState("");
  const [filteredDataForInvites, setFilteredDataForInvites] = useState([]);

  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : "14";

  const {
    data: userinvitedata,
    isLoading: userinviteloading,
    isSuccess: userinvitesucess,
  } = useGetUserInvitesQuery({ id: centerIdString });

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
  
      setFilteredDataForInvites(filtered);
    } else {
      setFilteredDataForInvites(userInvites);
    }
  }, [searchTermForInvites, userInvites]);

  return (
    <UserInvitesContext.Provider value={{ isUserInvitesSuccess,
        isUserInvitesLoading,
        userInvites,
        setSearchTermForInvites,
        filteredDataForInvites
 }}>
      {children}
    </UserInvitesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInvites = () => {
  const context = useContext(UserInvitesContext);
  if (context === undefined) {
    throw new Error("useUserInvites must be used within a UserProvider");
  }
  return context;
};
