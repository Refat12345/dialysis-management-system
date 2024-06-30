/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
    CustomDatePicker,
    CustomTextField,
    SelectedTextFeild,
    CustomButton,
    ButtonLoader,Toast
    } from "../../../../../components/index";
import { convertDate } from "../../../../../utils/DateUtils";
import CheckBox from "../add_analysis/sections/CheckBox";
import { useEditMedicalAnalysisState } from "./EditMedicalAnalysisState";
import dayjs from "dayjs";
import { textToastStyle } from "../../../../../data/data";
import { useParams } from "react-router-dom";
import { useEditMedicalAnalysisMutation } from "../../../../../services/secretariat/patient_profile/EditPatientProfileSlice";
const EditMedicalAnalysisDialog = ({medicalAnalysis ,analysisTypes}) => {
    let array=[]
    for (let index = 0; index < analysisTypes.length; index++) {
        array.push(analysisTypes[index].analysisName)
        
      }
    const {state , updateState} = useEditMedicalAnalysisState()
    const [editMedicalAnalysis,{isLoading}] = useEditMedicalAnalysisMutation()
    const { patientName } = useParams();
    const typeSelections = array;
    const unitOfMeasurementSelections = ["mm", "cm", "ml"];
    useEffect(()=>{
        updateState(medicalAnalysis)
        updateState({userID:patientName})
        updateState({isEdit:false})
    },[medicalAnalysis])
    const postData =  () => {
        state.postData(state,editMedicalAnalysis)
    }

    return (
        <div dir="rtl" className="w-[400px]">
            {state.value != "" ?    
            <>
            <SelectedTextFeild
                    filter={typeSelections}
                    label="نوع التحليل الطبي"
                    value={state.analysisName === "" ? "نوع التحليل الطبي" : state.analysisName}
                    onSelect={(val) => updateState({ analysisName: val })}
                />
                <div className="mb-3"></div>
                <CustomTextField
                    label="القيمة/النتيجة:"
                    placeholder="القيمة/النتيجة"
                    size="3"
                    value={state.value}
                    onChange={(val) => updateState({ value: val.target.value })}
                />
                <div className="mb-3"></div>
                <SelectedTextFeild
                    filter={unitOfMeasurementSelections}
                    label="الوحدة"
                    value={state.unit === "" ? "الوحدة" : state.unitOfMeasurement}
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
                    value={state.notes}
                    onChange={(val) => updateState({ notes: val.target.value })}
                />  
                <div className="mb-4"></div>
                {
                    medicalAnalysis.value === "سلبي" ||  medicalAnalysis.value === "ايجابي" && <>
                        <CheckBox state={state} updateState={updateState} />
                        <div className="mb-4"></div>
                    </>
                }
                { !isLoading ? <div className="flex justify-center"> <CustomButton
                        variant="solid"
                        onClick={postData}
                        className="bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer"
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
                <Toast textStyle={textToastStyle} progressColor={"green"}/>
                </>:<ButtonLoader/>
                }
    </div>
    );
};

export default EditMedicalAnalysisDialog;
