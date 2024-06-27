/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { SelectedTextFeild, CustomTextField, CustomButton , ButtonLoader , Toast,CustomDatePicker} from "../../../../../components/index";
import { useMedicalRecordState } from "../MedicalRecordState";
import { useEditMedicalRecordMutation } from "../../../../../services/secretariat/patient_profile/EditPatientProfileSlice";
import dayjs from "dayjs";
const HealthInformationDialog = ({ medicalRecord }) => {
    const { state, updateState } = useMedicalRecordState();
    const [editMedicalRecord,{data,isLoading}] = useEditMedicalRecordMutation()
    useEffect(() => {
        console.log("s");
        updateState(medicalRecord);
        updateState({isEdit:false})
    }, [medicalRecord]);

    const bloodSelection = {
        array: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        title: "زمرة الدم",
    };

    const kidneyTransplantSelection = {
        array: ["نعم", "لا"],
        title: "زراعة كلية سابقة",
    };

    const vascularEntranceSelection = {
        array: ["قثطرة", "فيستولا"],
        title: "الوصل الوعائي",
    };

    const causeRenalFailureSelection = {
        array: ["ضغط دم", "امراض قلبية", "داء السكري"],
        title: "سبب الفشل الكلوي",
    };
    
    const textToastStyle = {color:"green", textAlign:"center" ,fontWeight:"bold", fontSize:"22px"}; 
    const postHealthInfoData = async() => {
        try{
            const response = state.postHealthInfo(state,medicalRecord.id,editMedicalRecord);
        }catch(err) {
            console.log(err);
        }
    }
    return (
        <>
        <div dir="rtl" className="p-4 w-[400px]">
            <SelectedTextFeild
                label={"المدحل الوعائي"}
                value={state.vascularEntrance}
                filter={vascularEntranceSelection.array}
                onSelect={(e) => updateState({ vascularEntrance: e })}
            />
            <div className="mb-3"></div>
            <SelectedTextFeild
                label={"زمرة الدم"}
                value={state.bloodType}
                filter={bloodSelection.array}
                onSelect={(e) => updateState({ bloodType: e })}
            />
            <div className="mb-3"></div>
            <SelectedTextFeild
                label={"سبب القصور الكلوي"}
                value={state.causeRenalFailure}
                filter={causeRenalFailureSelection.array}
                onSelect={(e) => updateState({ causeRenalFailure: e })}
            />
            <div className="mb-3"></div>
            <SelectedTextFeild
                label={"زراعة كلية سابقة"}
                value={state.kidneyTransplant === true ? "نعم": "لا"}
                filter={kidneyTransplantSelection.array}
                onSelect={(e) => updateState({ kidneyTransplant: e === "نعم" ? true : false })}
            />
            <div className="mb-3"></div>
            <CustomDatePicker
                    label={ "تاريخ بدء جلسات الغسيل"  }
                    date = { dayjs(state.dialysisStartDate ) }
                    onSelect={(date)=>{
                        updateState({dialysisStartDate:date})
                        updateState({isEdit:true})
                    }}
                />
            <div className="mb-3"></div>
            <CustomTextField
                label={"الوزن الجاف"}
                size="3"
                required={true}
                placeholder={"الوزن الجاف"}
                type="text"
                value={state.dryWeight}
                onChange={(e) => updateState({ dryWeight: e.target.value })}
            />
        </div>
        <div className="flex justify-center">
        { !isLoading ? <div className=""> <CustomButton
                        variant="solid"
                        onClick={postHealthInfoData}
                        className="bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer"
                        title={
                            <div className="">
                                <span>تعديل</span>
                                <div className="lg:w-2 md:w-2 w-1" />
                            </div>
                        }
                        radius="full"
                    />
                </div>:<ButtonLoader/>}
                <Toast textStyle={textToastStyle} progressColor={"green"}/>    
        </div>
        </>
    );
};

export default HealthInformationDialog;
