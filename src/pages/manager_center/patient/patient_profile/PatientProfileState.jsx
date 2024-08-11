import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom";

import {
  globalInfoRoute,
  medicalRecordRoute,
  medicalAnalysisRoute,
  prescriptionsRoute,
  globalNotesRoute,
  dialysisByPatient,
} from "../../../../data/data";

const PatientProfileStateContext = createContext();

export const PatientProfileStateProvider = ({ children }) => {
  const navigate = useNavigate();

  const globalInfo = "معلومات عامة";
  const medicalRecord = "السجل الطبي";
  const dialysisSessions = "جلسات الغسيل";
  const medicalAnalysis = "التحاليل";
  const prescriptions = "الوصفات الطبية";
  const globalNotes = "ملاحظات عامة";

  const patientProfileMenuItems = [
    { href: globalInfoRoute, name: globalInfo },
    { href: medicalRecordRoute, name: medicalRecord },
    { href: dialysisByPatient, name: dialysisSessions },
    { href: medicalAnalysisRoute, name: medicalAnalysis },
    { href: prescriptionsRoute, name: prescriptions },
    { href: globalNotesRoute, name: globalNotes },
  ];

  const tabScreens = {
    //TODO: put patient screens here
    // globalInfo: (
    //   <GlobalInfoState>
    //     <GlobalInfoPage />
    //   </GlobalInfoState>
    // ),
    // medicalRecord: <MedicalRecordPage/>,
    // dialysisSessions: <DialysisPage/>,
    // dialysisSessions: <div>1</div>,
    // medicalAnalysis: <MedicalAnalysisPage/>,
    // prescriptions: <PrescriptionsPage/>,
    // globalNotes: <GeneralNotePage/>,
    globalInfo: globalInfoRoute,
    medicalRecord: medicalRecordRoute,
    dialysisSessions: dialysisByPatient,
    medicalAnalysis: medicalAnalysisRoute,
    prescriptions: prescriptionsRoute,
    globalNotes: globalNotesRoute,
  };

  const [state, setState] = useState({
    activeItem: patientProfileMenuItems[0].name,
    patientProfileMenuItems: patientProfileMenuItems,
    selectScreen: (val) => selectScreen(val),
  });

  const selectScreen = (screen) => {
    switch (screen) {
      case globalInfo:
        navigate(tabScreens.globalInfo);
        break;
      case dialysisSessions:
        navigate(tabScreens.dialysisSessions);
        break;
      case medicalRecord:
        navigate(tabScreens.medicalRecord);
        break;
      case medicalAnalysis:
        navigate(tabScreens.medicalAnalysis);
        break;
      case prescriptions:
        navigate(tabScreens.prescriptions);
        break;
      case globalNotes:
        navigate(tabScreens.globalNotes);
        break;
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
// eslint-disable-next-line react-refresh/only-export-components
export const usePatientProfileState = () =>
  useContext(PatientProfileStateContext);
