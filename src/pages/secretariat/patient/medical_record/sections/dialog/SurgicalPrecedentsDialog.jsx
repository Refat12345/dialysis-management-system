/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row,CustomTextField ,CustomDatePicker } from "../../../../../../components"
import "../../style.css"
import dayjs from "dayjs";
const SurgicalPrecedentsDialog = ({state,updateState}) => {
    let array = state.surgicalPrecedents.slice(0,-1)
  return (
    
    array.map((precedent,index)=>{
        return <div dir="rtl" key={index} >
                <div className="paddingCard bg-bgMedicalRecord rounded-lg ">
                <Row mainAxisAlignment="justify-evenly">
        <div className="w-[47%] ">
            <CustomTextField
                label={"اسم العملية"}
                size = "3"
                placeholder={"اسم العملية"}
                type="text"
                value = {precedent.surgeryName}
                onChange={(e) => state.updateSurgicalPrecedent(index,{surgeryName: e.target.value})}
        />
        
        </div>
        <div className="w-[47%] ">
        <CustomDatePicker
                label={"تاريخ العملية"}
                date = { precedent.surgeryDate}
                onSelect={(e) =>
                    state.updateSurgicalPrecedent(index,
                        {surgeryDate: e},
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
                size = "3"
                placeholder={"تفاصيل عامة"}
                type="text"
                value = {precedent.generalDetails}
                onChange={(val) => {
                    state.updateSurgicalPrecedent(index,
                        {generalDetails:val.target.value}
                    )
                }}
        />
            </div>
    </Row>
                </div>
                <div className="mgButton"></div>
        </div>
    })
  )
}

export default SurgicalPrecedentsDialog