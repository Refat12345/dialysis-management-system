import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import {
  globalInfoRoute,
  medicalRecordRoute,
  dialysisSessionsRoute,
  medicalAnalysisRoute,
  prescriptionsRoute,
  globalNotesRoute,
} from "../../../../data/data";

const PatientProfileStateContext = createContext();
export const PatientProfileStateProvider = ({ children }) => {
  const globalInfo = "معلومات عامة";
  const medicalRecord = "السجل الطبي";
  const dialysisSessions = "جلسات الغسيل";
  const medicalAnalysis = "التحاليل";
  const prescriptions = "الوصفات الطبية";
  const globalNotes = "ملاحظات عامة";

  const patientProfileMenuItems = [
    { href: globalInfoRoute, name: globalInfo },
    { href: medicalRecordRoute, name: medicalRecord },
    { href: dialysisSessionsRoute, name: dialysisSessions },
    { href: medicalAnalysisRoute, name: medicalAnalysis },
    { href: prescriptionsRoute, name: prescriptions },
    { href: globalNotesRoute, name: globalNotes },
  ];

  const tabScreens = {
    //TODO: put patient screens here
    globalInfo: <div>1</div>,
    medicalRecord: <div>2</div>,
    dialysisSessions: <div>3</div>,
    medicalAnalysis: <div>4</div>,
    prescriptions: <div>5</div>,
    globalNotes: <div>6</div>,
  };

  const [state, setState] = useState({
    activeItem: patientProfileMenuItems[0].name,
    patientProfileMenuItems: patientProfileMenuItems,
    selectScreen: (val) => selectScreen(val),
  });

  const selectScreen = (screen) => {
    switch (screen) {
      case globalInfo:
        return tabScreens.globalInfo;
      case dialysisSessions:
        return tabScreens.dialysisSessions;
      case medicalRecord:
        return tabScreens.medicalRecord;
      case medicalAnalysis:
        return tabScreens.medicalAnalysis;
      case prescriptions:
        return tabScreens.prescriptions;
      case globalNotes:
        return tabScreens.globalNotes;
    }
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
    <PatientProfileStateContext.Provider value={contextValue}>
      {children}
    </PatientProfileStateContext.Provider>
  );
};

PatientProfileStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
export const usePatientProfileState = () =>
  useContext(PatientProfileStateContext);
