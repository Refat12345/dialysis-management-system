/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
const AddPaitentInfoStateContext = createContext();

const AddPaitentInfoState = ({ children }) => {
    const [state, setState] = useState({
      nationaltyNumber: "",
      childreStatus:"",
      work:"",
      username: "",
      genderValue: "",
      birthDate: "",
      LearnValue: "",
      economicSituation:"",
      economicType:"",
      economicSource:"",
      location:"",

      selectGender: (val) => selectGender(val),
      selectLearn: (val) => selectLearn(val),
      selectEconomicSituation: (val) => selectEconomicSituation(val),
      selectEconomicType: (val) => selectEconomicType(val),
      selectEconomicSource: (val) => selectEconomicSource(val),
      selectLocation: (val) => selectLocation(val),

    });

    const selectLocation = (value) => {
        updateState({ location: value });
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
export default AddPaitentInfoState

export const useAddPaitentInfoState = () =>
    useContext(AddPaitentInfoStateContext);