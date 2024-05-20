/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row ,SelectedTextFeild } from "../../../../../components/index"
import CustomTextField from "../../../../../components/public/textfield/CustomTextField";
const PublicInformation = ({ state , updateState }) => {

    const filter = {
        array: ["أنثى", "ذكر"],
        title: "الجنس",
    };
    function handleCheckboxChange(checkboxNumber) {
        const checkbox1 = document.getElementById('checkbox1');
        const checkbox2 = document.getElementById('checkbox2');
    
        if (checkboxNumber === 1 && checkbox1.checked) {
          checkbox2.checked = false;
        } else if (checkboxNumber === 2 && checkbox2.checked) {
          checkbox1.checked = false;
        }
      }
return (
    <div className="bg-white rounded-lg py-5 px-3 w-[49%]">
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
                <SelectedTextFeild
                    label={"سبب القصور الكلوي"}
                    value={state.causeRenalFailure === "" ? "سبب القصور الكلوي"  : state.causeRenalFailure}
                    filter={filter.array}
                    onSelect={(val) => state.selectCauseRenalFailure(val)}
            />
            </div>
            <div className="w-[45%] ">
                <SelectedTextFeild
                    label={"زمرة الدم"}
                    value={state.bloodType === "" ? "زمرة الدم"  : state.bloodType}
                    filter={filter.array}
                    onSelect={(val) => state.selectBloodType(val)}
            />
            </div>
        </Row>
        <div className="mgBetweenField"></div>
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
                <SelectedTextFeild
                    label={"تاريخ بدء جلسات الغسيل"}
                    value={state.dialysisStartDate === "" ? "تاريخ بدء جلسات الغسيل"  : state.dialysisStartDate}
                    filter={filter.array}
                    onSelect={(val) => state.selectBloodType(val)}
            />
            </div>
        </Row>
        <div className="mgBetweenField ">
                <Row mainAxisAlignment="justify-start xl:pr-[3%]">
                <p className="font-bold text-xs md:text-sm lg:text-md xl:text-base">هل يوجد زراعة كلية سابقة؟</p>
                <div className="flex">
                <label className="flex items-center mx-[5%] lg:mx-[8%] xl:mx-[15%]">
                    <input id="checkbox1" type="checkbox" className="form-checkbox h-5 w-5 bg-bgButtonColor text-bgButtonColor border-bgButtonColor focus:ring-bgButtonColor ml-1" onChange={()=>handleCheckboxChange(1)}/>
                    <span className="ml-2 text-gray-700 text-xs md:text-sm lg:text-md xl:text-base">نعم</span>
                </label>
                <label className="flex items-center">
                    <input id="checkbox2" type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 ml-1" onChange={()=>handleCheckboxChange(2)}/>
                    <span className="ml-2 text-gray-700 text-xs md:text-sm lg:text-md xl:text-base">لا</span>
                </label>
                </div>
                </Row>
        </div>
    </div>
    
  )
}

export default PublicInformation