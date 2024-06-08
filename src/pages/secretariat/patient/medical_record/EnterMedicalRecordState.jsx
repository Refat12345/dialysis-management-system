/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const EnterMedicalRecordStateContext = createContext();

const EnterMedicalRecordState = ({ children }) => {
   
    const [state, setState] = useState({
        causeRenalFailure: "",
        bloodType: "",
        dryWeight: "",
        dialysisStartDate:null,
        kidneyTransplant:"",
        vascularEntrance:"",
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
            pathologicalGeneralDetails: "",
          }
        ],
        pharmacologicalPrecedents: [
          {
            medicineName: "",
            dateStart: null,
            dateEnd: null,
            pharmacologicalGeneralDetails:""
          }
          
        ],
        selectCauseRenalFailure: (val) => selectCauseRenalFailure(val),
        selectBloodType: (val) => selectBloodType(val),
        selectDryWeight : (val) => selectDryWeight(val),
        selectKidneyTransplant: (val)=> selectKidneyTransplant(val),
        selectVascularEntrance: (val) => selectVascularEntrance(val),
        addSurgicalPrecedents: () => addSurgicalPrecedents(),
        addPathologicalPrecedent : () => addPathologicalPrecedent(),
        addPharmacologicalPrecedents : () => addPharmacologicalPrecedents(),
        updateSurgicalPrecedent : (index,value) => updateSurgicalPrecedent(index,value),
        updatePathologicalPrecedent :  (index,value) => updatePathologicalPrecedent(index,value),
        updatePharmacologicalPrecedent :(index,value) => updatePharmacologicalPrecedent(index,value),
        postData :(data)=> postData(data)
        
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

    const addPathologicalPrecedent = () => {
      const newPrecedent = {
        illnessName: "",
        medicalDiagnosisDate: null,
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
        dateStart: null,
        dateEnd: null,
        pharmacologicalGeneralDetails:""
      };
    
      setState((prevState) => ({
        ...prevState,
        pharmacologicalPrecedents: [...prevState.pharmacologicalPrecedents, newPrecedent],
      }));
    };


    const addSurgicalPrecedents = () => {
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
    
    

    const postData = (object) => {

      let data = {
        vascularEntrance :object.vascularEntrance,
        bloodType:object.bloodType,
        dryWeight:object.dryWeight,
        dialysisStartDate:object.dialysisStartDate,
        kidneyTransplant:object.kidneyTransplant,
        causeRenalFailure:object.causeRenalFailure,
        surgicalPrecedents:object.surgicalPrecedents,
        pathologicalPrecedents:object.pathologicalPrecedents,
        pharmacologicalPrecedents:object.pharmacologicalPrecedents
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
            item.surgeryDate =item.surgeryDate.format("DD-MM-YYYY")
          }
        });
        

        pathological.length >= 1 && pathological.forEach(item => {
          if (item.medicalDiagnosisDate === null) {
            item.medicalDiagnosisDate = "";
          } else {
            item.medicalDiagnosisDate =item.medicalDiagnosisDate.format("DD-MM-YYYY")
          }
        });


        pharmacological.length >= 1 && pharmacological.forEach(item => {
          if (item.dateStart === null) {
            item.dateStart = "";
          } else {
            item.dateStart =item.dateStart.format("DD-MM-YYYY")
          }
          if (item.dateEnd === null) {
            item.dateEnd = "";
          } else {
            item.dateEnd =item.dateEnd.format("DD-MM-YYYY")
          }
        });


        const body = {
          causeRenalFailure:data.causeRenalFailure,
          dryWeight:data.dryWeight,
          bloodType:data.bloodType,
          dialysisStartDate:data.dialysisStartDate != null ?data.dialysisStartDate.format("DD-MM-YYYY"):"",
          kidneyTransplant:data.kidneyTransplant === "لا" || data.kidneyTransplant=== "" ? false :true ,
          vascularEntrance:data.vascularEntrance,
          surgicalPrecedents:surgical,
          pathologicalPrecedents:pathological,
          pharmacologicalPrecedents:pharmacological,
          userID:21, 
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
