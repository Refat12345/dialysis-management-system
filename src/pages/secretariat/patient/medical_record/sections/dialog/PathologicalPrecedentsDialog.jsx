/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs"
import { Row, CustomTextField, CustomDatePicker } from "../../../../../../components"
import "../../style.css"

const PathologicalPrecedentsDialog = ({state}) => {
    let array = state.pathologicalPrecedents.slice(0,-1)
    return (
        array.map((precedent, index) => {
        
            return (
                <div key={index}>
                    <div dir="rtl" className="paddingCard bg-bgMedicalRecord rounded-lg ">
                        <div className="mgBottomHeader"></div>
                        <Row mainAxisAlignment="justify-evenly">
                            <div className="w-[48%]">
                                <CustomTextField
                                    label={"اسم المرض"}
                                    size="3"
                                    placeholder={"اسم المرض"}
                                    type="text"
                                    value={precedent.illnessName}
                                    onChange={(e) =>
                                        state.updatePathologicalPrecedent(index,
                                            { illnessName: e.target.value }
                                        )
                                    }
                                />
                            </div>
                            <div className="w-[48%]">
                                <CustomDatePicker
                                    label={"تاريخ التشخيص"}
                                    date={precedent.medicalDiagnosisDate}
                                    onSelect={(e) =>
                                        state.updatePathologicalPrecedent(index,
                                            { medicalDiagnosisDate: e },
                                        )
                                    }
                                />  
                            </div>
                        </Row>
                        <div className="mgBetweenField"></div>
                        <Row mainAxisAlignment="justify-evenly">
                            <div className="w-[98%]">
                                <CustomTextField
                                    label={"تفاصيل عامة"}
                                    size="3"
                                    placeholder={"تفاصيل عامة"}
                                    type="text"
                                    value={precedent.generalDetails}
                                    onChange={(val) => {
                                        state.updatePathologicalPrecedent(index,
                                            { generalDetails: val.target.value }
                                        )
                                    }}
                                />
                            </div>
                        </Row>
                    </div>  
                    <div className="mgButton"></div>
                </div>  
            )
        })
    )
}

export default PathologicalPrecedentsDialog
