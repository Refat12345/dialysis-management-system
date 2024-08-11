/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { validateMedicalRecordForm, validatePathologicalPrecedentForm, validatePharmacologicalForm, validateSurgicalPrecedentForm } from "./validator";

const EnterMedicalRecordStateContext = createContext();

const EnterMedicalRecordState = ({ children }) => {
   
    const [state, setState] = useState({
        causeRenalFailure: "",
        bloodType: "",
        dryWeight: "",
        dialysisStartDate:null,
        kidneyTransplant:"",
        vascularEntrance:"",
        errors:{},
        surgicalPrecedents: [
          {
            surgeryName: "",
            surgeryDate: null,
            generalDetails: "",
          }
        ],
        pathologicalPrecedents: [
          {
            illnessName: "",
            medicalDiagnosisDate: null,
            generalDetails: "",
          }
        ],
        pharmacologicalPrecedents: [
          {
            medicineName: "",
            dateStart: null,
            dateEnd: null,
            generalDetails:""
          }
          
        ],
        selectCauseRenalFailure: (val) => selectCauseRenalFailure(val),
        selectBloodType: (val) => selectBloodType(val),
        selectDryWeight : (val) => selectDryWeight(val),
        selectKidneyTransplant: (val)=> selectKidneyTransplant(val),
        selectVascularEntrance: (val) => selectVascularEntrance(val),
        addSurgicalPrecedents: (surgeryName) => addSurgicalPrecedents(surgeryName),
        addPathologicalPrecedent : (illnessName) => addPathologicalPrecedent(illnessName),
        addPharmacologicalPrecedents : (medicineName) => addPharmacologicalPrecedents(medicineName),
        updateSurgicalPrecedent : (index,value) => updateSurgicalPrecedent(index,value),
        updatePathologicalPrecedent :  (index,value) => updatePathologicalPrecedent(index,value),
        updatePharmacologicalPrecedent :(index,value) => updatePharmacologicalPrecedent(index,value),
        postData :(data,id)=> postData(data,id)
        
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
    const selectKidneyTransplant =(val) =>{
      updateState({ kidneyTransplant: val });
    }

    const selectVascularEntrance = (val) => {
      updateState({ vascularEntrance: val });
    }

    const updateState = (newValues) => {
      setState((prevState) => ({
        ...prevState,
        ...newValues,
      }));
    };

    const addPathologicalPrecedent = (illnessName) => {
      
      setState((prevState) => ({ ...prevState, errors: {} }));
      // Validate the form data
      const validationErrors = validatePathologicalPrecedentForm({
        illnessName:illnessName
      });
    
      if (Object.keys(validationErrors).length > 0) {
        setState((prevState) => ({
          ...prevState,
          errors: validationErrors
        }));
        return;
      }
      const newPrecedent = {
        illnessName: "",
        medicalDiagnosisDate: null,
        generalDetails: "",
      };
    
      setState((prevState) => ({
        ...prevState,
        pathologicalPrecedents: [...prevState.pathologicalPrecedents, newPrecedent],
      }));
    };

    const addPharmacologicalPrecedents = (medicineName) => {
      setState((prevState) => ({ ...prevState, errors: {} }));
      // Validate the form data
      const validationErrors = validatePharmacologicalForm({
        medicineName:medicineName
      });
    
      if (Object.keys(validationErrors).length > 0) {
        setState((prevState) => ({
          ...prevState,
          errors: validationErrors
        }));
        return;
      }

      const newPrecedent = {
        medicineName: "",
        dateStart: null,
        dateEnd: null,
        generalDetails:""
      };
    
      setState((prevState) => ({
        ...prevState,
        pharmacologicalPrecedents: [...prevState.pharmacologicalPrecedents, newPrecedent],
      }));
    };


    const addSurgicalPrecedents = (surgeryName) => {
      setState((prevState) => ({ ...prevState, errors: {} }));
      // Validate the form data
      const validationErrors = validateSurgicalPrecedentForm({
        surgeryName:surgeryName
      });
  
      if (Object.keys(validationErrors).length > 0) {
        setState((prevState) => ({
          ...prevState,
          errors: validationErrors
        }));
        return;
      }
      const newPrecedent = {
        surgeryName: "",
        surgeryDate: null,
        generalDetails: "",
      };
    
      setState((prevState) => ({
        ...prevState,
        surgicalPrecedents: [...prevState.surgicalPrecedents, newPrecedent],
      }));
    };

    const updatePathologicalPrecedent = (index, newValue) => {
      setState((prevState) => ({
        ...prevState,
        pathologicalPrecedents: prevState.pathologicalPrecedents.map((value, i) =>
          i === index ? { ...value, ...newValue } : value
        ),
      }));
    };
   
    
    const updatePharmacologicalPrecedent = (index, newValue) => {
      setState((prevState) => ({
        ...prevState,
        pharmacologicalPrecedents: prevState.pharmacologicalPrecedents.map((value, i) =>
          i === index ? { ...value, ...newValue } : value
        ),
      }));
    };
    
    const updateSurgicalPrecedent = (index, newValue) => {
      setState((prevState) => ({
        ...prevState,
        surgicalPrecedents: prevState.surgicalPrecedents.map((value, i) =>
          i === index ? { ...value, ...newValue } : value
        ),
      }));
    };
    
    

    const postData = (object ,id) => {

      let data = {
        vascularEntrance :object.vascularEntrance,
        bloodType:object.bloodType,
        dryWeight:object.dryWeight,
        dialysisStartDate:object.dialysisStartDate,
        kidneyTransplant:object.kidneyTransplant,
        causeRenalFailure:object.causeRenalFailure === "أمراض قلبية" ? "heartDiseases" : (object.causeRenalFailure === "ضغط الدم" ? "bloodPressure" :(object.causeRenalFailure === "داء السكري" ? "diabetes":object.causeRenalFailure)),
        surgicalPrecedents:object.surgicalPrecedents,
        pathologicalPrecedents:object.pathologicalPrecedents,
        pharmacologicalPrecedents:object.pharmacologicalPrecedents
      }

      setState((prevState) => ({ ...prevState, errors: {} }));

      // Validate the form data
      const validationErrors = validateMedicalRecordForm({
        causeRenalFailure: data.causeRenalFailure,
        bloodType: data.bloodType,
        dryWeight:data.dryWeight,
        dialysisStartDate:data.dialysisStartDate,
        kidneyTransplant:data.kidneyTransplant,
        vascularEntrance:data.vascularEntrance
      });
  
      if (Object.keys(validationErrors).length > 0) {
        setState((prevState) => ({
          ...prevState,
          errors: validationErrors
        }));
        return;
      }
        let surgical =  data.surgicalPrecedents.length >= 1 ?( data.surgicalPrecedents[data.surgicalPrecedents.length-1].surgeryName === "" ? 
        data.surgicalPrecedents.slice(0,-1) :data.surgicalPrecedents) :[];

        let pathological = data.pathologicalPrecedents.length >= 1 ? (data.pathologicalPrecedents[data.pathologicalPrecedents.length-1].illnessName === "" ?
        data.pathologicalPrecedents.slice(0,-1) : data.pathologicalPrecedents ) : []

        let pharmacological = data.pathologicalPrecedents.length >= 1 ?( data.pharmacologicalPrecedents[data.pharmacologicalPrecedents.length-1].medicineName === "" ? 
        data.pharmacologicalPrecedents.slice(0,-1) : data.pharmacologicalPrecedents) :[]
        
        surgical.length >= 1 && surgical.forEach(item => {
          if (item.surgeryDate === null) {
            item.surgeryDate = "";
          } else {
            item.surgeryDate =item.surgeryDate.format("YYYY-MM-DD")
          }
        });
        

        pathological.length >= 1 && pathological.forEach(item => {
          if (item.medicalDiagnosisDate === null) {
            item.medicalDiagnosisDate = "";
          } else {
            item.medicalDiagnosisDate =item.medicalDiagnosisDate.format("YYYY-MM-DD")
          }
        });


        pharmacological.length >= 1 && pharmacological.forEach(item => {
          if (item.dateStart === null) {
            item.dateStart = "";
          } else {
            item.dateStart =item.dateStart.format("YYYY-MM-DD")
          }
          if (item.dateEnd === null) {
            item.dateEnd = "";
          } else {
            item.dateEnd =item.dateEnd.format("YYYY-MM-DD")
          }
        });

        const body = {
          causeRenalFailure:data.causeRenalFailure,
          dryWeight:data.dryWeight,
          bloodType:data.bloodType,
          dialysisStartDate:data.dialysisStartDate != null ?data.dialysisStartDate.format("YYYY-MM-DD"):"",
          kidneyTransplant:data.kidneyTransplant === "لا" || data.kidneyTransplant=== "" ? false :true ,
          vascularEntrance:data.vascularEntrance,
          surgicalHistories:surgical,
          pathologicalHistories:pathological,
          pharmacologicalHistories:pharmacological,
          userID:id, 
        }
        
        return body;
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
