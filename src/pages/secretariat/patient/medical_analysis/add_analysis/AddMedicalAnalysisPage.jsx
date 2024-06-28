import {
    CustomButton,
    CustomDatePicker,
    CustomTextField,
    PublicHeader,
    SelectedTextFeild,
    Toast
    } from "../../../../../components";
import { textToastStyle } from "../../../../../data/data";
import { useAddMedicalAnalysisState } from "./AddMedicalAnalysisState";
import { MedicalAnalysisIcon } from "../../../../../assets";
import CheckBox from "./sections/CheckBox";
import { useAddMedicalAnalysisMutation } from "../../../../../services/secretariat/patient_profile/AddPatientProfileSlice";
import { toast } from "react-toastify";
import ButtonLoader from "../../../../../components/public/loader/ButtonLoader";

    const AddMedicalAnalysisPage = () => {
    const { state, updateState } = useAddMedicalAnalysisState();
    const [addMedicalAnalysis, {isLoading }] = useAddMedicalAnalysisMutation();
    const typeSelections = ["خضاب", "دم", "حديد"];
    const unitSelections = ["mm", "cm", "ml"];
    
    const postData = async () => {
        try {
            let body = state.postData(state)
            await addMedicalAnalysis(body);
            toast("تم اضافة التحليل الطبي بنجاح")
        } catch (error) {
            console.error("Error adding medical analysis:", error);
        }
    };

    return (
        <div dir="rtl" className="flex-grow bg-bgMedicalRecord md:mr-48 h-screen">
            <div className="mx-[2%]">
                <PublicHeader title="التحاليل الطبية" icon={MedicalAnalysisIcon} bool />
                <div className="bg-white rounded-lg p-6 mt-4">
                    <div className="flex justify-between">
                        <div className="w-[30%]">
                            <SelectedTextFeild
                                filter={typeSelections}
                                label="نوع التحليل الطبي"
                                value={state.analysisType === "" ? "نوع التحليل الطبي" : state.analysisType}
                                onSelect={(val) => updateState({ analysisType: val })}
                                allowNewSelection = {true}
                                type={"اضافة نوع تحليل جديد"}
                                placeholder = {"أدخل نوع التحليل الجديد"}
                />
                        </div>
                        <div className="w-[20%]">
                            <CustomTextField
                                label="القيمة/النتيجة:"
                                placeholder="القيمة/النتيجة"
                                size="3"
                                value={state.value}
                                onChange={(val) => updateState({ value: val.target.value })}
                            />
                        </div>
                        <div className="w-[10%]">
                            <SelectedTextFeild
                                filter={unitSelections}
                                label="الوحدة"
                                value={state.unit === "" ? "الوحدة" : state.unit}
                                onSelect={(val) => updateState({ unit: val })}
                                placeholder={"ادخل الوحدة"}
                                type={"اضافة وحدة جديدة" }
                                allowNewSelection = {true}

                            />
                        </div>
                        <div className="w-[30%] self-center mt-7">
                            <CheckBox state={state} updateState={updateState} />
                        </div>
                </div>
                <div className="flex mt-8">
                    <div className="w-[30%]">
                    <CustomDatePicker
                        date={state.analysisDate}
                        label="تاريخ التحليل"
                        onSelect={(val) => updateState({ analysisDate: val })}
                        />
                    </div>
                    <div className="w-[3%]" />
                    <div className="w-[65%]">
                        <CustomTextField
                            label="ملاحظات"
                            placeholder="ملاحظات"
                            size="3"
                            value={state.notes}
                            onChange={(val) => updateState({ notes: val.target.value })}
                        />
                    </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end"> 
                    {!isLoading ? <div className=""> <CustomButton
                        variant="solid"
                        onClick={postData}
                        className="bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer"
                        title={
                            <div className="flex items-center justify-center">
                                <span>إضافة التحليل</span>
                                <div className="lg:w-2 md:w-2 w-1" />
                            </div>
                        }
                        radius="full"
                    />
                </div>:<ButtonLoader/>}
                </div>
                <Toast textStyle={textToastStyle} progressColor={"green"}/>
        </div>
    </div>
    );
};

export default AddMedicalAnalysisPage;
