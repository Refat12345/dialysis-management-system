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
    
    

    const postData = (data) => {

      const {causeRenalFailure,bloodType,
        dryWeight,dialysisStartDate,
        kidneyTransplant,vascularEntrance,
        surgicalPrecedents,pathologicalPrecedents,
        pharmacologicalPrecedents} = data;
        let surgical = surgicalPrecedents.length === 1  && surgicalPrecedents[0].surgeryName === "" ? [] : surgicalPrecedents;
        let pathological =pathologicalPrecedents.length === 1 && pathologicalPrecedents[0].illnessName === "" ? [] :pathologicalPrecedents
        let pharmacological = pharmacologicalPrecedents.length === 1  && pharmacologicalPrecedents[0].medicineName === "" ? [] :pharmacologicalPrecedents

        surgical.length >= 1 && surgical.forEach(item => {
          console.log("a");
          if (item.surgeryDate === null) {
            item.surgeryDate = "";
          } else {
            item.surgeryDate =item.surgeryDate.format("YYYY MMMM DD")
          }
        });
        

        pathological.length >=1 && pathological.forEach(item => {
          if (item.medicalDiagnosisDate === null) {
            item.medicalDiagnosisDate = "";
          } else {
            item.medicalDiagnosisDate =item.medicalDiagnosisDate.format("YYYY MMMM DD")
          }
        });


        pharmacological.length >=1 && pharmacological.forEach(item => {
          if (item.dateStart === null) {
            item.dateStart = "";
          } else {
            item.dateStart =item.dateStart.format("YYYY MMMM DD")
          }
          if (item.dateEnd === null) {
            item.dateEnd = "";
          } else {
            item.dateEnd =item.dateEnd.format("YYYY MMMM DD")
          }
        });


        const body = {
          causeRenalFailure:"Hypertension",
          dryWeight:dryWeight,
          bloodType:bloodType,
          dialysisStartDate:"2024-05-15",
          kidneyTransplant:true ,
          vascularEntrance:"Fistula",
          userID:21
        }
        return body;
        //dialysisStartDate != null ?dialysisStartDate.format("YYYY MMMM DD"):"",
        // //kidneyTransplant === "لا" ? false : 
        // surgicalPrecedents:surgical,
        //   pathologicalPrecedents:pathological,
        //   pharmacologicalPrecedents:pharmacological,
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
