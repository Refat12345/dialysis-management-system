/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
const AddPrescriptionStateContext = createContext();

const AddPrescriptionState = ({ children }) => {
  const [state, setState] = useState({
    prescriptionInfo: [
      {
        prescriptionName: "",
        dayStart: "",
        dayEnd: "",
        monthStart: "",
        monthEnd: "",
        yearStart: "",
        yearEnd: "",
        note: "",
      },
    ],

    updateContactInfo: (index, info) => updateContactInfo(index, info),
    addContactInfo: () => addContactInfo(),
    removeContactInfo: (index) => removeContactInfo(index),
  });

  const updateContactInfo = (index, newContactInfo) => {
    setState((prevState) => ({
      ...prevState,
      prescriptionInfo: prevState.prescriptionInfo.map((contact, i) =>
        i === index ? { ...contact, ...newContactInfo } : contact
      ),
    }));
  };

  const addContactInfo = () => {
    const newContact = {
      prescriptionName: "",
      dayStart: "",
      dayEnd: "",
      monthStart: "",
      monthEnd: "",
      yearStart: "",
      yearEnd: "",
      note: "",
    };

    setState((prevState) => ({
      ...prevState,
      prescriptionInfo: [...prevState.prescriptionInfo, newContact],
    }));
  };

  const removeContactInfo = (index) => {
    setState((prevState) => {
      if (prevState.prescriptionInfo.length > 1) {
        return {
          ...prevState,
          prescriptionInfo: prevState.prescriptionInfo.filter(
            (_, i) => i !== index
          ),
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
    <AddPrescriptionStateContext.Provider value={contextValue}>
      {children}
    </AddPrescriptionStateContext.Provider>
  );
};
export default AddPrescriptionState;

export const useAddPrescriptionState = () =>
  useContext(AddPrescriptionStateContext);
