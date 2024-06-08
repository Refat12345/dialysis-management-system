import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const AddMedicalAnalysisStateContext = createContext();

const AddMedicalAnalysisState = ({ children }) => {
  const [state, setState] = useState(
    {
        averageMin: 70.2,
        averageMax: 150.4,
        value: "",
        positive:false,
        negative:false,
        unit:"",
        analysisDate: null,
        notes: "",
        quarter: "",
        result:null,
        analysisType: "",
        userID: "",
        postData : (value)=>postData(value)
    }
  );

  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const postData = (value) => {
    let valueOne = ""
    if((value.negative === true || value.positive === true) && value.value != ""){
      console.log("a");
    }
    if(value.negative === true) {
      valueOne = "سلبي"
    } else if (value.positive === true) {
      valueOne = "ايجابي"
    } else {
      valueOne = value.value
    }
    let body = {
      averageMin:value.averageMin,
      averageMax:value.averageMax,
      value:valueOne,
      quarter:"Q2",
      analysisType:value.analysisType,
      analysisDate:value.analysisDate.format("DD-MM-YYYY"),
      notes:value.notes,
      userID:22
    }
    return body
  }
  const contextValue = {
    state,
    updateState,
  };

  return (
    <AddMedicalAnalysisStateContext.Provider value={contextValue}>
      {children}
    </AddMedicalAnalysisStateContext.Provider>
  );
};

export default AddMedicalAnalysisState;

AddMedicalAnalysisState.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useAddMedicalAnalysisState = () =>
  useContext(AddMedicalAnalysisStateContext);
