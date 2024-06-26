/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useGetCenterSettingQuery } from "../../../services/manager_center/setting/SettingSlice"; 

const SettingContext = createContext();

export const SettingProvider = ({ children }) => {
  const [SettingData, setSettingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [SettingTime, setSettingTime] = useState([]);

  const {
    data: setting,
    isLoading: isUserLoading,
    isSuccess: isUserSuccess,
  } = useGetCenterSettingQuery();

  useEffect(() => {
    if (isUserSuccess && setting) {
      setSettingData(setting);
      setSettingTime(setting.center.shifts);
      setIsLoading(false);
      setIsSuccess(true);
    } else if (isUserLoading) {
      setIsLoading(true);
      setIsSuccess(false);
    } else {
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isUserSuccess, isUserLoading, setting]);
console.log("SettingTime",SettingTime)
  return (
    <SettingContext.Provider value={{ SettingData, isLoading, isSuccess ,SettingTime, setSettingTime}}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  const context = useContext(SettingContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
