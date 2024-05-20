/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row ,SelectedTextFeild } from "../../../../../components/index"
import CustomTextField from "../../../../../components/public/textfield/CustomTextField";
const PharmacologicalPrecedents = ({ state , updateState }) => {

    const filter = {
        array: ["أنثى", "ذكر"],
        title: "الجنس",
    };
return (
    <div className="bg-white rounded-lg py-5 px-3 w-[49%]">
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
            <CustomTextField
                    label = {"اسم الدواء"}
                    size = "3"
                    required={true}
                    placeholder={"اسم الدواء"}
                    type="text"
                    value = {state.medicineName}
                    onChange = {(e) =>
                        updateState({
                            medicineName: e.target.value,
                        })
                    }
                />
            </div>
            <div className="w-[45%] ">
            <CustomTextField
                    label = {"تاريخ بدء أخذ الدواء"}
                    size = "3"
                    required={true}
                    placeholder={"تاريخ بدء أخذ الدواء"}
                    type="text"
                    value = {state.dateStart}
                    onChange = {(e) =>
                        updateState({
                            dateStart: e.target.value,
                        })
                    }
                />
            </div>
        </Row>
        <div className="mgBetweenField"></div>
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
                <CustomTextField
                    label = {"تاريخ نهاية أخذ الدواء"}
                    size = "3"
                    required={true}
                    placeholder={"تاريخ نهاية أخذ الدواء"}
                    type="text"
                    value = {state.dateEnd}
                    onChange = {(e) =>
                        updateState({
                            dateEnd: e.target.value,
                        })
                    }
                />
            </div>
            <div className="w-[45%] ">
            <CustomTextField
                    label={"تفاصيل عامة"}
                    size = "3"
                    required={true}
                    placeholder={"تفاصيل عامة"}
                    type="text"
                    value = {state.pharmacologicalGeneralDetails}
                    onChange={(val) => {
                        updateState({
                            pharmacologicalGeneralDetails:val.target.value
                        })
                    }}
            />
            </div>
        </Row>
    </div>
    
  )
}

export default PharmacologicalPrecedents