/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { CustomTextField, CustomButton , ButtonLoader, CustomDatePicker,Toast} from "../../../../../components/index";
import { useMedicalRecordState } from "../MedicalRecordState";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import { useEditMedicalRecordMutation } from "../../../../../services/secretariat/patient_profile/EditPatientProfileSlice";
const PrecedentsDialog = ({type ,index}) => {
    const { state, updateState } = useMedicalRecordState();
    const [editMedicalRecord , {isLoading}] = useEditMedicalRecordMutation()
    const medicalRecord = useOutletContext();
    useEffect(() => {
        updateState(medicalRecord);
        updateState({isEdit:false})
    }, []);
    const postPrecedentData = () => {
        state.postPrecedents(state,medicalRecord.id,index,type,editMedicalRecord)
    }
    
    const textToastStyle = { color:"green", textAlign:"center" ,fontWeight:"bold", fontSize:"22px" }; 
    return (
        <>
        <div dir="rtl" className="p-4 w-[400px]">
            
            <CustomTextField
                label = {type === "pathological" ?"اسم المرض" : (type === "pharmacological" ? "اسم الدواء" : "اسم العملية") }
                size="3"
                required={true}
                placeholder= {type === "pathological" ?"اسم المرض" : (type === "pharmacological" ? "اسم الدواء" : "اسم العملية") }
                type="text"
                value={type === "pathological" ? state.pathologicalPrecedents[index].illnessName : (type === "pharmacological" ? state.pharmacologicalPrecedents[index].medicineName : state.surgicalPrecedents[index].surgeryName) }
                onChange={(e) =>{
                    if ( type === "pathological") {
                        state.updatePathologicalPrecedent(index,{illnessName: e.target.value})
                    } else if (type === "pharmacological") {
                        state.updatePharmacologicalPrecedent(index,{medicineName: e.target.value})
                    } else {
                        state.updateSurgicalPrecedent(index,{surgeryName: e.target.value})
                    }
                }
                }
            />
            <div className="mb-3"></div>
            <CustomDatePicker
                label={type === "pathological" ?"تاريخ التشخيص" : (type === "pharmacological" ? "تاريخ بداية أخذ الداوء" : "تاريخ العملية") }
                date = {type === "pathological" ? dayjs(state.pathologicalPrecedents[index].medicalDiagnosisDate) : (type === "pharmacological" ? dayjs(state.pharmacologicalPrecedents[index].dateStart) : dayjs(state.surgicalPrecedents[index].surgeryDate)) }
                onSelect={(date)=>{
                    if ( type === "pathological") {
                        state.updatePathologicalPrecedent(index,{medicalDiagnosisDate: date})
                        updateState({isEdit:true})
                    } else if (type === "pharmacological") {
                        state.updatePharmacologicalPrecedent(index,{dateStart: date})
                        updateState({isEdit:true})
                    } else {
                        state.updateSurgicalPrecedent(index,{surgeryDate: date})
                        updateState({isEdit:true})
                    }
                }}
            />
            <div className="mb-3"></div>
            {type === "pharmacological" && 
                <CustomDatePicker
                    label={ "تاريخ نهاية أخذ الداوء"  }
                    date = { dayjs(state.pharmacologicalPrecedents[index].dateEnd ) }
                    onSelect={(date)=>{
                        state.updatePharmacologicalPrecedent(index,{dateEnd: date})
                        updateState({isEdit:true})
                    }}
                />
            }
            <div className="mb-3"></div>
            <CustomTextField
                label = {"تفاصيل عامة"}
                size="3"
                required={true}
                placeholder = {"تفاصيل عامة"}
                type="text"
                value={type === "pathological" ?state.pathologicalPrecedents[index].generalDetails : (type === "pharmacological" ? state.pharmacologicalPrecedents[index].generalDetails : state.surgicalPrecedents[index].generalDetails) }
                onChange={(e) => {
                    if ( type === "pathological") {
                        state.updatePathologicalPrecedent(index,{generalDetails: e.target.value})
                    } else if (type === "pharmacological") {
                        state.updatePharmacologicalPrecedent(index,{generalDetails: e.target.value})
                    } else {
                        state.updateSurgicalPrecedent(index,{generalDetails: e.target.value})
                    }
                }
                }
            />
        </div>
        <div className="flex justify-center">
        { !isLoading ? <div className=""> <CustomButton
                        variant="solid"
                        onClick={postPrecedentData}
                        className="bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer"
                        title={
                            <div className="">
                                <span>تعديل</span>
                                <div className="lg:w-2 md:w-2 w-1" />
                            </div>
                        }
                        radius="full"
                    />
                </div>:<ButtonLoader/>
        }
        <Toast textStyle={textToastStyle} progressColor={"green"}/>  

        </div>
        </>       
    );
};

export default PrecedentsDialog;
