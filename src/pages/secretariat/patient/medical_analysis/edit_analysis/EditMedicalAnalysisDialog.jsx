/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
    CustomDatePicker,
    CustomTextField,
    SelectedTextFeild,
    CustomButton,
    ButtonLoader
    } from "../../../../../components/index";
import { convertDate } from "../../../../../utils/DateUtils";
import CheckBox from "../add_analysis/sections/CheckBox";
import { useEditMedicalAnalysisState } from "./EditMedicalAnalysisState";
import dayjs from "dayjs";

import { useParams } from "react-router-dom";
import { useEditMedicalAnalysisMutation } from "../../../../../services/secretariat/patient_profile/EditPatientProfileSlice";
import { ToastContainer } from "react-toastify";
const EditMedicalAnalysisDialog = ({medicalAnalysis ,analysisTypes , setOpen}) => {
    let array=[]
    let unit = []
    for (let index = 0; index < analysisTypes.length; index++) {
        array.push(analysisTypes[index].analysisName)
        unit.push(analysisTypes[index].unitOfMeasurement)
    }
    
    
    
    const {state , updateState} = useEditMedicalAnalysisState()
    const [editMedicalAnalysis,{isLoading}] = useEditMedicalAnalysisMutation()
    const { patientName } = useParams();
    const typeSelections = array;
    const unitOfMeasurementSelections = unit;
    useEffect(()=>{
        updateState({negative:false})
        updateState({positive:false})
        updateState(medicalAnalysis)
        updateState({userID:patientName})
        updateState({isEdit:false})
        if(medicalAnalysis.value === "سلبي" || medicalAnalysis.value === "ايجابي") {

            if(medicalAnalysis.value === "سلبي") {
                updateState({negative:true})
            } else {
                updateState({positive:true})
            }
        }
    },[medicalAnalysis])
    const postData =  () => {
        state.postData(state,editMedicalAnalysis)
    }
console.log(state.unitOfMeasurement);

    if((state.unitOfMeasurement === "" || state.unitOfMeasurement === null)){
        console.log("s");
        
    }
    return (
        <div dir="rtl" className="w-[400px]">
            {
                state.value != "" ?    
            <div>
            <ToastContainer position="top-right"/>
            <SelectedTextFeild
                    filter={typeSelections}
                    label="نوع التحليل الطبي"
                    value={state.analysisName === "" ? "نوع التحليل الطبي" : state.analysisName}
                    onSelect={(val) => updateState({ analysisName: val })}
                />
                <div className="mb-3"></div>
                {
                    (medicalAnalysis.value === "سلبي" ||  medicalAnalysis.value === "ايجابي") ? <>
                        <p className="mb-1">النتيجة:</p>
                        <CheckBox state={state} updateState={updateState} />
                        
                    </>: <CustomTextField
                    label="القيمة/النتيجة:"
                    placeholder="القيمة/النتيجة"
                    size="3"
                    value={state.value || ""} 
                    onChange={(val) => updateState({ value: val.target.value })}
                />
                }
                <div className="mb-3"></div>
                <SelectedTextFeild
                    filter={unitOfMeasurementSelections}
                    label="الوحدة"
                    value={( state.unitOfMeasurement === null) ? "الوحدة" : state.unitOfMeasurement}
                    onSelect={(val) => updateState({ unitOfMeasurement: val })}
                />
                <div className="mb-3"></div>
                <CustomDatePicker
                    date={dayjs(state.analysisDate === medicalAnalysis.analysisDate ? convertDate(state.analysisDate) :state.analysisDate)}
                    label="تاريخ التحليل"
                    onSelect={(val) => {
                        updateState({ analysisDate: val })
                        updateState({isEdit:true})
                    }
                }
                />
                <div className="mb-3"></div>
                <CustomTextField
                    label="ملاحظات"
                    placeholder="ملاحظات"
                    size="3"
                    value={state.notes || ""}
                    onChange={(val) => updateState({ notes: val.target.value })}
                />  
                <div className="mb-4"></div>
                
                { !isLoading ? <div className="flex justify-center">
                    <CustomButton
                        variant="solid"
                        onClick={()=>setOpen(false)}
                        className="bg-bgbutton text-white h-8  font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110 ml-2"
                        title={
                            <div className="">
                                <span>رجوع</span>
                                <div className="lg:w-2 md:w-2 w-1" />
                            </div>
                        }
                        radius="full"
                    />
                    <CustomButton
                        variant="solid"
                        onClick={postData}
                        className="bg-bgbutton text-white h-8  font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110"
                        title={
                            <div className="">
                                <span>تعديل</span>
                                <div className="lg:w-2 md:w-2 w-1" />
                            </div>
                        }
                        radius="full"
                    />
                </div>:<div className="flex justify-center">
                <ButtonLoader/>
                </div>}
                
                </div>:<ButtonLoader/>
            }
    </div>
    );
};

export default EditMedicalAnalysisDialog;


