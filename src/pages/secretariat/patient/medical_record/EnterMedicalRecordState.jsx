import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const EnterMedicalRecordStateContext = createContext();

const EnterMedicalRecordState = ({ children }) => {
    const [state, setState] = useState({
        causeRenalFailure: "",
        bloodType: "",
        dryWeight: "",
        dialysisStartDate: "",
        surgicalPrecedents: [
          {
            surgeryName: "",
            surgeryDate: "",
            generalDetails: "",
          }
        ],
        pathologicalPrecedents: [
          {
            illnessName: "",
            medicalDiagnosisDate: "",
            pathologicalGeneralDetails: "",
          }
        ],
        pharmacologicalPrecedents: [
          {
            medicineName: "",
            dateStart: "",
            dateEnd: "",
            pharmacologicalGeneralDetails:""
          }
          
        ],
        selectCauseRenalFailure: (val) => selectCauseRenalFailure(val),
        selectBloodType: (val) => selectBloodType(val),
        selectDryWeight : (val) => selectDryWeight(val),
        addSurgicalPrecedents: () => addSurgicalPrecedents(),
        addPathologicalPrecedent : () => addPathologicalPrecedent(),
        addPharmacologicalPrecedents : () => addPharmacologicalPrecedents(),
        updateSurgicalPrecedent : (index,filed,value) => updateSurgicalPrecedent(index,filed,value),
        updatePathologicalPrecedent :  (index,filed,value) => updatePathologicalPrecedent(index,filed,value),
        updatePharmacologicalPrecedent :(index,filed,value) => updatePharmacologicalPrecedent(index,filed,value),
        postData :()=> postData()
        
});

    const selectCauseRenalFailure = (val) => {
        updateState({ causeRenalFailure: val });
    };



    const selectBloodType = (val)=>{
        updateState ({bloodType:val})
    }
    const selectDryWeight = (val) => {
        updateState({ dryWeight: val });
    }

    const updateState = (newValues) => {
      setState((prevState) => ({
        ...prevState,
        ...newValues,
      }));
    };

    const addPathologicalPrecedent = () => {
      const newPrecedent = {
        illnessName: "",
        medicalDiagnosisDate: "",
        pathologicalGeneralDetails: "",
      };
    
      setState((prevState) => ({
        ...prevState,
        pathologicalPrecedents: [...prevState.pathologicalPrecedents, newPrecedent],
      }));
    };

    const addPharmacologicalPrecedents = () => {
      const newPrecedent = {
        medicineName: "",
        dateStart: "",
        dateEnd: "",
        pharmacologicalGeneralDetails:""
      };
    
      setState((prevState) => ({
        ...prevState,
        pathologicalPrecedents: [...prevState.pathologicalPrecedents, newPrecedent],
      }));
    };


    const addSurgicalPrecedents = () => {
      const newPrecedent = {
        surgeryName: "",
        surgeryDate: "",
        generalDetails: "",
      };
    
      setState((prevState) => ({
        ...prevState,
        surgicalPrecedents: [...prevState.surgicalPrecedents, newPrecedent],
      }));
    };

    const updatePathologicalPrecedent = (index, field, value) => {
      setState((prevState) => {
        const updatedPrecedents = [...prevState.pathologicalPrecedents];
        updatedPrecedents[index][field] = value;
        return {
          ...prevState,
          pathologicalPrecedents: updatedPrecedents,
        };
      });
    };
    
    const updatePharmacologicalPrecedent = (index, field, value) => {
      setState((prevState) => {
        const updatedPrecedents = [...prevState.pharmacologicalPrecedents];
        updatedPrecedents[index][field] = value;
        return {
          ...prevState,
          pharmacologicalPrecedents: updatedPrecedents,
        };
      });
    };
    
    const updateSurgicalPrecedent = (index, field, value) => {
      setState((prevState) => {
        const updatedPrecedents = [...prevState.surgicalPrecedents];
        updatedPrecedents[index][field] = value;
        return {
          ...prevState,
          surgicalPrecedents: updatedPrecedents,
        };
      });
    };




  const postData = () => {
    console.log(state.surgicalPrecedents);
  }

  const contextValue = {
    state,
    updateState,
  };

  return (
    <EnterMedicalRecordStateContext.Provider value={contextValue}>
      {children}
    </EnterMedicalRecordStateContext.Provider>
  );
};

export default EnterMedicalRecordState;

EnterMedicalRecordState.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useEnterMedicalRecordState = () =>
  useContext(EnterMedicalRecordStateContext);
