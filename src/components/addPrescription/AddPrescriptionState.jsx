/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import {
  useCreatePrescriptionMutation,
  useGetMedicineNamesQuery,
} from "../../services/secretariat/addPrescription/AddPrescriptionSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPrescriptionStateContext = createContext();

const AddPrescriptionState = ({ children, userId }) => {
  const userIdString = userId ? userId.toString() : "14";
  const [userData, setUserData] = useState([]);
  const [isLoadingmedicences, setIsLoadingmedicences] = useState(false);
  const [isSuccessmedicences, setIsSuccessmedicences] = useState(false);
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
    genderValue: "",

    selectGender: (val) => selectGender(val),

    updateContactInfo: (index, info) => updateContactInfo(index, info),
    addContactInfo: () => addContactInfo(),
    removeContactInfo: (index) => removeContactInfo(index),
    postData: (data) => postData(data),
  });

  const selectGender = (value) => {
    updateState({ genderValue: value });
  };

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
      amount: "",
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
      patientID: userIdString,
      medicines: prescriptionInfo.map((info) => ({
        name: info.prescriptionName,
        dateOfStart: `${info.yearStart
          .toString()
          .padStart(4, "0")}-${info.monthStart
          .toString()
          .padStart(2, "0")}-${info.dayStart.toString().padStart(2, "0")}`,
        dateOfEnd: `${info.yearEnd.toString().padStart(4, "0")}-${info.monthEnd
          .toString()
          .padStart(2, "0")}-${info.dayEnd.toString().padStart(2, "0")}`,

        amount: info.amount,
        details: info.note,
      })),
    };
  };
  const [createPrescription, { isLoading, isSuccess, isError, error }] =
    useCreatePrescriptionMutation();

  const {
    data: medicences,
    isLoading: ismedicencesLoading,
    isSuccess: ismedicencesSuccess,
  } = useGetMedicineNamesQuery();

  useEffect(() => {
    if (ismedicencesSuccess && medicences) {
      setUserData(medicences.medicine_names);
      setIsLoadingmedicences(false);
      setIsSuccessmedicences(true);
    } else if (ismedicencesLoading) {
      setIsLoadingmedicences(true);
      setIsSuccessmedicences(false);
    } else {
      setIsLoadingmedicences(false);
      setIsSuccessmedicences(false);
    }
  }, [ismedicencesSuccess, ismedicencesLoading, medicences]);

  const postData = async (prescriptionInfo) => {
    const isAllFieldsFilled = prescriptionInfo.every(
      (info) =>
        info.prescriptionName &&
        info.dayStart &&
        info.dayEnd &&
        info.monthStart &&
        info.monthEnd &&
        info.yearStart &&
        info.yearEnd &&
        info.note &&
        info.amount
    );

    if (!isAllFieldsFilled) {
      toast.error("يرجى ملء جميع الحقول قبل الإرسال.");
      return;
    }

    const transformedData = transformPrescriptionData(prescriptionInfo);
    try {
      const response = await createPrescription(transformedData).unwrap();

      toast.success("تم إرسال الوصفة الطبية بنجاح!");
      setState({
        ...state,
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
            amount: "",
          },
        ],
      });
    } catch (error) {
      if (error.status === 400) {
        const errorMessage = error.data.error || "حدث خطأ أثناء تحديث البيانات";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else if (error.status === 403) {
        const errorMessage =
          error.data.error ||
          "ليس لديك التصاريح اللازمة للوصول إلى هذه الـ API";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else {
        console.error("حدث خطأ أثناء تحديث البيانات", error);
        toast.error("حدث خطأ أثناء تحديث البيانات");
      }
    }
  };
  const contextValue = {
    state,
    updateState,
    postData,
    isLoadingmedicences,
    isSuccessmedicences,
    userData,
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
