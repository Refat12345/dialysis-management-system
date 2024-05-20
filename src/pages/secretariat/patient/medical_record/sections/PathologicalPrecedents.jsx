/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row ,CustomTextField} from "../../../../../components/index"
import {PlusIcon} from "../../../../../assets/index"
const PathologicalPrecedents = ({ state , updateState }) => {

    const filter = {
        array: ["أنثى", "ذكر"],
        title: "الجنس",
    };
return (
    <div className="bg-white rounded-lg py-5 px-3 w-[49%]">
        <Row mainAxisAlignment="justify-between" >
            <p className="pr-2">السوابق المرضية</p>
            <div className="flex pl-3 ">
                <img src = {PlusIcon} className="h-4 w-4 self-center"/>
                <p>اضافة سابقة أخرى</p>
            </div>
        </Row>
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[45%] ">
            <CustomTextField
                    label = {"اسم المرض"}
                    size = "3"
                    required={true}
                    placeholder={"اسم المرض"}
                    type="text"
                    value = {state.illnessName}
                    onChange = {(e) =>
                        updateState({
                            illnessName: e.target.value,
                        })
                    }
                />
            </div>
            <div className="w-[45%] ">
            <CustomTextField
                    label = {"تاريخ التشخيص"}
                    size = "3"
                    required={true}
                    placeholder={"تاريخ التشخيص"}
                    type="text"
                    value = {state.medicalDiagnosisDate}
                    onChange = {(e) =>
                        updateState({
                            medicalDiagnosisDate: e.target.value,
                        })
                    }
                />
            </div>
        </Row>
        <div className="mgBetweenField"></div>
        <Row mainAxisAlignment="justify-evenly">
                <div className="w-[94%]">
                <CustomTextField
                    label={"تفاصيل عامة"}
                    size = "3"
                    required={true}
                    placeholder={"تفاصيل عامة"}
                    type="text"
                    value = {state.pathologicalGeneralDetails}
                    onChange={(val) => {
                        updateState({
                            pathologicalGeneralDetails:val.target.value
                        })
                    }}
            />
                </div>
        </Row>

    </div>
    
  )
}

export default PathologicalPrecedents