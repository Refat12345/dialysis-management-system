import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { toast } from "react-toastify";
const AddMedicalAnalysisStateContext = createContext();

const AddMedicalAnalysisState = ({ children }) => {
  const [state, setState] = useState(
    {
        averageMin: 70.2,
        averageMax: 150.4,
        value: "",
        positive:false,
        negative:false,
        unitOfMeasurement:"",
        analysisDate: null,
        notes: "",
        analysisName: "",
        userID: "",
        postData : (value,id) => postData(value,id)
    }
  );

  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const postData = (value , id) => {
    let valueOne = ""
    if((value.negative === true || value.positive === true) && value.value != ""){
      toast.warning("لا يمكن اختيار النتيجة و سلبي أو ايجابي معا")
      return false
    }else {
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
        analysisName:value.analysisName,
        analysisDate:value.analysisDate.format("YYYY-MM-DD"),
        notes:value.notes,
        unitOfMeasurement:value.unitOfMeasurement,
        recurrenceInterval:2,
        userID:id
      }
      return body
    }
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
