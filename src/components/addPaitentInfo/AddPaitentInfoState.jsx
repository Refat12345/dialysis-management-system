import { createContext, useState, useContext } from "react";
import {useAddPatientInfoMutation} from "./../../services/secretariat/patient_profile/AddPatientProfileSlice"
const AddPaitentInfoStateContext = createContext();
const AddPaitentInfoState = ({ children }) => {
  const [addPatientInfo, { isLoading, isSuccess, isError, error }] =
  useAddPatientInfoMutation();
  const [state, setState] = useState({
    nationaltyNumber: "",
    publicIncome: "",
    childreStatus: "",
    work: "",
    relativeRelation: "",
    note: "",
    username: "",
    genderValue: "",
    birthDate: "",
    LearnValue: "",
    economicSituation: "",
    economicType: "",
    economicSource: "",
    location: "",
    status: "",
    reasonOfStatus :"",
    contactInfo: [
      {
        use: "",
        type: "",
        value: "",
      },
    ],
    addressInfo: [
      {
        use: "",
        cityName: "",
        line: "",
        countryName: ""
      },
    ],
    selectGender: (val) => selectGender(val),
    selectLearn: (val) => selectLearn(val),
    selectEconomicSituation: (val) => selectEconomicSituation(val),
    selectEconomicType: (val) => selectEconomicType(val),
    selectEconomicSource: (val) => selectEconomicSource(val),
    selectLocation: (val) => selectLocation(val),
    updateContactInfo: (index, info) => updateContactInfo(index, info),
    updateAddressInfo: (index, info) => updateAddressInfo(index, info),
    addContactInfo: () => addContactInfo(),
    removeContactInfo: (index) => removeContactInfo(index),
    addAddressInfo: () => addAddressInfo(),
    removeAddressInfo: (index) => removeAddressInfo(index),
    selectrelativeRelation: (val) => selectrelativeRelation(val),
    selectStatus: (val) => selectStatus(val),

  });
  const selectrelativeRelation = (value) => {
    updateState({ relativeRelation: value });
  };
  const selectLocation = (value) => {
    updateState({ location: value });
  };
  const selectStatus = (value) => {
    updateState({ status: value });
  };
  const selectEconomicSource = (value) => {
    updateState({ economicSource: value });
  };
  const selectEconomicType = (value) => {
    updateState({ economicType: value });
  };
  const selectEconomicSituation = (value) => {
    updateState({ economicSituation: value });
  };
  const selectGender = (value) => {
    updateState({ genderValue: value });
  };
  const selectLearn = (value) => {
    updateState({ LearnValue: value });
  };
  const updateContactInfo = (index, newContactInfo) => {
    setState((prevState) => ({
      ...prevState,
      contactInfo: prevState.contactInfo.map((contact, i) =>
        i === index ? { ...contact, ...newContactInfo } : contact
      ),
    }));
  };
  const updateAddressInfo = (index, newAddressInfo) => {
    setState((prevState) => ({
      ...prevState,
      addressInfo: prevState.addressInfo.map((contact, i) =>
        i === index ? { ...contact, ...newAddressInfo } : contact
      ),
    }));
  };
  const addContactInfo = () => {
    const newContact = { use: "", type: "", value: "" };
    setState((prevState) => ({
      ...prevState,
      contactInfo: [...prevState.contactInfo, newContact],
    }));
  };
  const removeContactInfo = (index) => {
    setState((prevState) => {
      if (prevState.contactInfo.length > 1) {
        return {
          ...prevState,
          contactInfo: prevState.contactInfo.filter((_, i) => i !== index),
        };
      }
      return prevState;
    });
  };
  const addAddressInfo = () => {
    const newAddress = { use: "", city: "", line: "" };
    setState((prevState) => ({
      ...prevState,
      addressInfo: [...prevState.addressInfo, newAddress],
    }));
  };
  const removeAddressInfo = (index) => {
    setState((prevState) => {
      if (prevState.addressInfo.length > 1) {
        return {
          ...prevState,
          addressInfo: prevState.addressInfo.filter((_, i) => i !== index),
        };
      }
      return prevState;
    });
  };
  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };
  const contextValue = {
    state,
    updateState,
  };
  return (
    <AddPaitentInfoStateContext.Provider value={contextValue}>
      {children}
    </AddPaitentInfoStateContext.Provider>
  );
};
export default AddPaitentInfoState;

export const useAddPaitentInfoState = () =>
  useContext(AddPaitentInfoStateContext);
