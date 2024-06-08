/* eslint-disable no-unused-vars */
import { CustomButton, CustomDatePicker, CustomTextField, PublicHeader, SelectedTextFeild } from "../../../../components"
import { useAddMedicalAnalysisState } from "./AddMedicalAnalysisState"
import { MedicalRecord } from "../../../../assets"
import CheckBox from "./sections/CheckBox"
import { useAddMedicalAnalysisMutation } from "../../../../services/secretariat/patient_profile/AddPatientProfileSlice"

const AddMedicalAnalysisPage = () => {
    const {state,updateState} = useAddMedicalAnalysisState();
    const [addMedicalAnalysis,{data,isSuccess,isError,isLoading}] = useAddMedicalAnalysisMutation();
    const typeSelections = ["خضاب", "دم","حديد"]
    const unitSelections = ["mm","cm","ml"]
    const postData = async() => {
        state.postData(state)
    }

  return (
    <div dir="rtl" className="flex-grow bg-bgMedicalRecord md:mr-48 h-screen">
        <div className="mx-[2%]">
            <PublicHeader title={"التحاليل الطبية"} icon={MedicalRecord} bool={true}  />
            <div className="bg-white rounded-lg p-6 mt-4">
                <div className="flex justify-between" >
                    <div className="w-[30%]">
                    <SelectedTextFeild
                        filter={typeSelections}
                        label={"نوع التحليل الطبي"}
                        value={state.analysisType === "" ? "نوع التحليل الطبي" : state.analysisType}
                        onSelect= {
                            (val)=>updateState({analysisType:val})
                        }
                    />
                    </div>
                    <div className="w-[20%]">
                        <CustomTextField
                            label={"القيمة/النتيجة:"}
                            placeholder={"القيمة/النتيجة"}
                            size={"3"}
                            value={state.value}
                            onChange={(val)=>updateState({value:val.target.value})}
                        />
                    </div>
                    <div className="w-[10%]">
                    <SelectedTextFeild
                        filter={unitSelections}
                        label={"الوحدة"}
                        value={state.unit === "" ? "الوحدة" : state.unit}
                        onSelect= {
                            (val)=>updateState({unit:val})
                        }
                    />
                    </div>
                    <div className="w-[30%] self-center mt-7">
                        <CheckBox state={state} updateState={updateState}/>
                    </div>
                </div>
                <div className="flex  mt-8">
                    <div className="w-[30%]">
                        <CustomDatePicker
                        date={state.analysisDate}
                        label={"تاريخ التحليل"}
                        onSelect={(val) => updateState({analysisDate:val})}
                        />
                    </div>
                    <div className="w-[3%]"></div>
                    <div className="w-[65%]">
                        <CustomTextField
                        label={"ملاحظات"}
                        placeholder={"ملاحظات"}
                        size={"3"}
                        value={state.notes}
                        onChange={(val) => updateState({notes:val.target.value})}
                        />
                    </div>
                </div>
            </div>
            <div  className="mt-8 flex justify-end">
                <CustomButton
                    variant="solid"
                    onClick={()=>postData()}
                    className={` bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer  `}
                    title={
                        <div className="flex items-center justify-center">
                            <span className={``}>
                                إضافة التحليل
                            </span>
                        <div className="lg:w-2 md:w-2 w-1"></div>
                        </div>
                    }
                    radius="full"
                />
            </div>
            
        </div>
    </div>
  )
}

export default AddMedicalAnalysisPage