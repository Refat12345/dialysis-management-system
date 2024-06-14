/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { useCreatePrescriptionMutation } from "../../services/secretariat/addPrescription/AddPrescriptionSlice";
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
    postData :(data)=> postData(data)

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

  const transformPrescriptionData = (prescriptionInfo) => {
    return {
      patientID: "15", // استبدل بمعرف المريض الصحيح
      // medicines: prescriptionInfo.map((info) => ({
      //   name: info.prescriptionName,
      //   dateOfStart: `${info.yearStart}-${info.monthStart.padStart(2, '0')}-${info.dayStart.padStart(2, '0')}`,
      //   dateOfEnd: `${info.yearEnd}-${info.monthEnd.padStart(2, '0')}-${info.dayEnd.padStart(2, '0')}`,
      //   amount: "2", // استبدل بالكمية الصحيحة
      //   details: info.note
      // }))
      medicines: prescriptionInfo.map((info) => ({
        name: info.prescriptionName,
        dateOfStart: `${info.yearStart}-${info.monthStart.padStart(2, '0')}-${info.dayStart.padStart(2, '0')}`,
        dateOfEnd: `${info.yearEnd}-${info.monthEnd.padStart(2, '0')}-${info.dayEnd.padStart(2, '0')}`,
        amount: "2", // استبدل بالكمية الصحيحة
        details: info.note
      }))
    };
  };
  const [createPrescription] = useCreatePrescriptionMutation();

  const postData = (prescriptionInfo) => {
    const transformedData = transformPrescriptionData(prescriptionInfo);
    createPrescription(transformedData).unwrap();
    // منطق بعد الإرسال الناجح
  };
  

  const contextValue = {
    state,
    updateState,
    postData
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
