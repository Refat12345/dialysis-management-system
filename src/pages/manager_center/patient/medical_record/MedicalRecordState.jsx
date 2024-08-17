/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { toast } from "react-toastify";

const MedicalRecordStateContext = createContext();

const MedicalRecordState = ({ children }) => {

    const initialRecord = {
        causeRenalFailure: "",
        bloodType: "",
        dryWeight: "",
        dialysisStartDate: null,
        kidneyTransplant: false,
        vascularEntrance: "",
        surgicalPrecedents: [
            {
                id:"",
                surgeryName: "",
                surgeryDate: null,
                generalDetails: "",
            },
        ],
        pathologicalPrecedents: [
            {
                id:"",
                illnessName: "",
                medicalDiagnosisDate: null,
                generalDetails: "",
            },
        ],
        pharmacologicalPrecedents: [
            {
                id:"",
                medicineName: "",
                dateStart: null,
                dateEnd: null,
                generalDetails: "",
            },
        ],
        isEdit:false,
        isDateEndEdit:false,
        updatePathologicalPrecedent: (index,value) => updatePathologicalPrecedent(index,value),
        updatePharmacologicalPrecedent: (index,value) => updatePharmacologicalPrecedent(index,value),
        updateSurgicalPrecedent: (index,value) => updateSurgicalPrecedent(index,value),
        postHealthInfo:(data,id,method) => postHealthInfo(data,id,method),
        postPrecedents : (data,id,index,type,method) => postPrecedents(data,id,index,type,method)
    };
    const [state, setState] = useState(initialRecord);

    const updateState = (newValues) => {
        setState((prevState) => ({
            ...prevState,
            ...newValues,
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
    const postHealthInfo = async (data,id,method)=>{
        const object = {
        id:id,
        causeRenalFailure: data.causeRenalFailure,
        bloodType: data.bloodType,
        dryWeight: data.dryWeight,
        dialysisStartDate: data.isEdit == true ? data.dialysisStartDate.format("YYYY-MM-DD"):data.dialysisStartDate,
        kidneyTransplant: data.kidneyTransplant,
        vascularEntrance: data.vascularEntrance,
        }
        try{
            const response = await method(object).unwrap()
            toast.success("تم تعديل السجل الطبي بنجاح")
            return response
        }catch(err){
            console.log(err);
        }
        
    }
    const postPrecedents = async (data,id,index,type,method)=> {
        const object = type === "surgical" ? {
            id:id,
            surgicalHistories:[
                {
                    id:data.surgicalPrecedents[index].id,
                    surgeryName:data.surgicalPrecedents[index].surgeryName,
                    surgeryDate:data.isEdit === true ? data.surgicalPrecedents[index].surgeryDate.format("YYYY-MM-DD"): data.surgicalPrecedents[index].surgeryDate,
                    generalDetails:data.surgicalPrecedents[index].generalDetails
                }
            ],
        } : (type === "pharmacological" ? {
            id:id,
            pharmacologicalHistories:[{
                id:data.pharmacologicalPrecedents[index].id ,
                medicineName: data.pharmacologicalPrecedents[index].medicineName,
                dateStart:  data.isEdit === true ? data.pharmacologicalPrecedents[index].dateStart.format("YYYY-MM-DD"): data.pharmacologicalPrecedents[index].dateStart,
                dateEnd:  data.isDateEndEdit === true ? data.pharmacologicalPrecedents[index].dateEnd.format("YYYY-MM-DD"): data.pharmacologicalPrecedents[index].dateEnd,
                generalDetails:data.pharmacologicalPrecedents[index].generalDetails
            }],
        }:{
            id:id,
            pathologicalHistories:[
                {
                    id:data.pathologicalPrecedents[index].id ,
                    illnessName: data.pathologicalPrecedents[index].illnessName,
                    medicalDiagnosisDate:  data.isEdit === true ? data.pathologicalPrecedents[index].medicalDiagnosisDate.format("YYYY-MM-DD"): data.pathologicalPrecedents[index].medicalDiagnosisDate,
                    generalDetails:data.pathologicalPrecedents[index].generalDetails
                }
            ],
        }) 
        try{
            await method(object).unwrap()
            toast.success("تم تعديل السابقة بنجاح")

        }catch(err){console.log(err)}

    }
    const contextValue = {
        state,
        updateState,
    };

    return (
        <MedicalRecordStateContext.Provider value={contextValue}>
            {children}
        </MedicalRecordStateContext.Provider>
    );
};

export default MedicalRecordState;

MedicalRecordState.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useMedicalRecordState = () => useContext(MedicalRecordStateContext);
