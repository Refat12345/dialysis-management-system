/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row ,SelectedTextFeild ,CustomDatePicker } from "../../../../../components/index"
import CustomTextField from "../../../../../components/public/textfield/CustomTextField";
import "../style.css"
const PublicInformation = ({ state , updateState }) => {

    const bloodSelection = {
        array: ["A+","A-","B+","B-","AB+","AB-","O+","O-"],
        title: "زمرة الدم",
    };
    const kidneyTransplantSelection = {
        array: ["نعم","لا"],
        title: "زراعة كلية سابقة",
    };
    const vascularEntranceSelection = {
        array:["قثطرة دائمة", "قثطرة مؤقتة","فيستولا" ],
        title:"الوصل الوعائي"
    }
    const causeRenalFailureSelection = {
        array:["ضغط دم","أمراض قلبية","داء السكري"],
        title:"سبب الفشل الكلوي"
    }

    
    function handleCheckboxChange(checkboxNumber) { 
        if (checkboxNumber === 1 ) {
            updateState({kidneyTransplant:true})
        } else if (checkboxNumber === 2 ) {
            updateState({kidneyTransplant:false})
        }
    }
return (
    <div className="paddingCard bg-white rounded-lg  w-[49.2%]">
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
                <SelectedTextFeild
                    label={"سبب القصور الكلوي"}
                    value={state.causeRenalFailure === "" ? "سبب القصور الكلوي"  : state.causeRenalFailure}
                    filter={causeRenalFailureSelection.array}
                    onSelect={(val) => state.selectCauseRenalFailure(val)}
                    allowNewSelection = {true}
                    type={"اضافة سبب قصور كلوي"}
                    placeholder={"أدخل سبب  القصور الكلوي"}

            />
            </div>
            <div className="w-[45%] ">
                <SelectedTextFeild
                    label={"زمرة الدم"}
                    value={state.bloodType === "" ? "زمرة الدم"  : state.bloodType}
                    filter={bloodSelection.array}
                    onSelect={(val) => state.selectBloodType(val)}
            />
            </div>
        </Row>
        <div className="mgPublicInfo"></div>
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
                <CustomTextField
                    label = {"الوزن الجاف"}
                    size = "3"
                    required={true}
                    placeholder={"الوزن الجاف"}
                    type="text"
                    value = {state.dryWeight}
                    onChange = {(e) =>
                        updateState({
                            dryWeight: e.target.value,
                        })
                    }
                />
            </div>
            <div className="w-[45%] ">
            <CustomDatePicker
                date={state.dialysisStartDate}
                label={"تاريخ بدء جلسات الغسيل"}
                onSelect={(e)=>{ 
                    updateState({dialysisStartDate:e})
                }}/>

            </div>
        </Row>
        <div className="mgPublicInfo">
                <Row mainAxisAlignment="justify-evenly">
                <div className="w-[45%]">
                <SelectedTextFeild
                    label={"الوصل الوعائي"}
                    value={state.vascularEntrance === "" ? "الوصل الوعائي"  : state.vascularEntrance}
                    filter={vascularEntranceSelection.array}
                    onSelect={(val) => state.selectVascularEntrance(val)}
            />
                </div>
                <div className="w-[45%]  ">
                <SelectedTextFeild
                    label={"زراعة كلية سابقة"}
                    value={state.kidneyTransplant === "" ? "زراعة كلية سابقة"  : state.kidneyTransplant}
                    filter={kidneyTransplantSelection.array}
                    onSelect={(val) => state.selectKidneyTransplant(val)}
            />
                
                </div>
                </Row>

        </div>
    </div>
    
  )
}

export default PublicInformation