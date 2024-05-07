import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useFormatDate } from "../../../../utils/DateUtils";

export const GlobalInfoStateContext = createContext();
const GlobalInfoState = ({ children }) => {
  const [state, setState] = useState({
    patientInfo: {
      id: 1,
      name: "أحمد أحمد",
      gender: "ذكر",
      birthDate: useFormatDate("30-4-2001"),
      status: "enable",
    },
    contacts: [
      { system: "phone", use: "المنزل", value: "0113160839" },
      { system: "phone", use: "الموبايل", value: "0953681049" },
      {
        system: "email",
        use: "البريد الالكتروني",
        value: "waseemalbizreh@gmail.com",
      },
    ],
    address: [
      {
        use: "المنزل",
        type: "home",
        value: "سوريا-دمشق-الصالحية بناء رقم(199)",
      },
      {
        use: "العمل",
        type: "work",
        value: "سوريا-دمشق-الصالحية بناء رقم(199)",
      },
    ],
    society: {
      age: 23,
      nationality: "سوري",
      statusInvitation: "مقبول",
      reason: null,
      maritalStatus: "متزوج",
    },
    familyStatus: {
      numberOfChild: 3,
      ChildrenHealthStatus: "سالمين غانمين ببيت ابوهم",
      education: "جامعي",
    },
    socialStatus: {
      publicIncome: "ضعيف",
      incomeType: "ثابت",
      incomeSource: "وظيفة",
      workNature: "يعمل كمساعد مهندس في شركة مرموقة",
      placeOfResidence: "إيجار",
    },
  });

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
    <GlobalInfoStateContext.Provider value={contextValue}>
      {children}
    </GlobalInfoStateContext.Provider>
  );
};

GlobalInfoState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalInfoState;
