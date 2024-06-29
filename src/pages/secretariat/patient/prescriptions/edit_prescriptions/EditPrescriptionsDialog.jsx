/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
    CustomDatePicker,
    CustomTextField,
    CustomButton,
    ButtonLoader,
    Toast
    } from "../../../../../components/index";
import { textToastStyle } from "../../../../../data/data";    
import { useEditPrescriptionsState } from "./EditPrescriptionsState"; 
import dayjs from "dayjs";  
import { useEditPrescriptionsMutation } from "../../../../../services/secretariat/patient_profile/EditPatientProfileSlice";
const EditPrescriptionsDialog = ({medicine , patientId,prescriptionId}) => {
    const [editPrescriptions , {isLoading}] = useEditPrescriptionsMutation()
    const {state , updateState} = useEditPrescriptionsState()
    useEffect(()=>{
        updateState(medicine)
        updateState({isEditStart:false})
        updateState({isEditEnd:false})
    },[])
    const postData = () => {
        state.postData(state , prescriptionId, patientId,editPrescriptions)
    }

    return (
        <div dir="rtl" className="w-[400px]">
            <CustomTextField
                    label="اسم الدواء"
                    value={state.name}
                    placeholder={"اسم الدواء"}
                    size={"3"}
                    onChange={(val) => updateState({ name: val.target.value })}
            />
                <div className="mb-3"></div>
                <CustomDatePicker
                    date={dayjs(state.dateOfStart)}
                    label="تاريخ بداية أخذ الدواء"
                    onSelect={(val) => { 
                        updateState({ dateOfStart: val })
                        updateState({isEditStart:true})
                    }
                    }
                />
                <div className="mb-3"></div>
                <CustomDatePicker
                    date={dayjs(state.dateOfEnd )}
                    label="تاريخ نهاية أخذ الدواء"
                    onSelect={(val) =>{ 
                        updateState({ dateOfEnd: val })
                        updateState({isEditEnd:true})
                    }
                
                }
                />
                <div className="mb-3"></div>
                <CustomTextField
                    label="تعليمات عن الدواء"
                    placeholder="تعليمات عن الدواء"
                    size="3"
                    value={state.details}
                    onChange={(val) => updateState({ details: val.target.value })}
                />  
                <div className="mb-5"></div>
                <div className="flex justify-center">
                { !isLoading ?  <CustomButton
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
                :<ButtonLoader/>}
                </div>
                <Toast textStyle={textToastStyle} progressColor={"green"}/>

    </div>
    );
};

export default EditPrescriptionsDialog;
