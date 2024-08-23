/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row,CustomTextField ,CustomDatePicker } from "../../../../../../components"
import "../../style.css"
const PharmacologicalPrecedentsDialog = ({state,updateState}) => {
  let array = state.pharmacologicalPrecedents.slice(0,-1)
  return (
    <div>
      {array.map((precedent,index)=>{
                return <div key={index}>
                    <div  dir="rtl" className="paddingCard bg-bgMedicalRecord rounded-lg ">
                    <Row mainAxisAlignment="justify-evenly">
            <div className="w-[25%] ">
            <CustomTextField
                    label = {"اسم الدواء"}
                    size = "3"
                    placeholder={"اسم الدواء"}
                    type="text"
                    value = {precedent.medicineName}
                    onChange = {(e) =>
                        state.updatePharmacologicalPrecedent(index,
                            {medicineName: e.target.value},
                        )
                    }
                />
            </div>
            <div className="w-[35%] ">
                <CustomDatePicker
                    label = {"تاريخ بدء أخذ الدواء"}
                    date = {precedent.dateStart}
                    onSelect={(e) =>
                        state.updatePharmacologicalPrecedent(index,
                            {dateStart: e},
                        )
                    }
                    />  
            </div>
            <div className="w-[35%]">
                <CustomDatePicker
                    label = {"تاريخ نهاية أخذ الدواء"}
                    date = {precedent.dateStart}
                    onSelect={(e) =>
                        state.updatePharmacologicalPrecedent(index,
                            {dateEnd: e},
                        )
                    }
                    />  
            </div>
        </Row>
        <div className="mgBetweenField"></div>
        <Row mainAxisAlignment="justify-evenly">
            <div className="w-[98%] ">
            <CustomTextField
                    label={"تفاصيل عامة"}
                    size = "3"
                    placeholder={"تفاصيل عامة"}
                    type="text"
                    value = {precedent.generalDetails}
                    onChange={(val) => 
                        state.updatePharmacologicalPrecedent(index,
                            {generalDetails: val.target.value},
                        )
                    }
            />
            </div>
        </Row>
                </div>
            
                </div>
            })}
    </div>
  )
}

export default PharmacologicalPrecedentsDialog