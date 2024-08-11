/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { Row , CustomTextField ,CustomDatePicker ,AlertDialog} from "../../../../../components/index"
import PharmacologicalPrecedentsDialog from "./dialog/PharmacologicalPrecedentsDialog"
const PharmacologicalPrecedents = ({ state , updateState }) => {
const [medicineName,setMedicineName] = useState("")

return (
    <div className="paddingCard bg-white rounded-lg  w-[49.2%]">
        <Row mainAxisAlignment="justify-between" >
            <p className="pr-2 font-bold text-titleColor text-lg">السوابق الدوائية</p>
            <div className="flex pl-3 ">
                <div onClick={()=>{
                    state.addPharmacologicalPrecedents(medicineName)
                    setMedicineName("")
                }} className="py-1 px-3 bg-bgSideButton transition-transform transform hover:scale-110 hover:cursor-pointer text-titleColor rounded-full text-md">
                    <p className="">اضافة سابقة أخرى</p> 
                </div>
                {state.pharmacologicalPrecedents.length > 1 && <AlertDialog titleButton={"رجوع"} renderComponent={ <div className="py-1 px-3 bg-bgSideButton transition-transform transform hover:scale-110 hover:cursor-pointer text-titleColor  rounded-full text-md mr-2">
                    <p className="">الكل</p> 
                </div>}  contentComponent={<PharmacologicalPrecedentsDialog state={state} updateState={updateState}/>}/>}
            </div> 
        </Row>
        <div className="mgBottomHeader"></div>
            {state.pharmacologicalPrecedents.map((precedent,index)=>{
                return index === state.pharmacologicalPrecedents.length-1 &&
                <div key={index}>
                    <Row mainAxisAlignment="justify-evenly">
            <div className="w-[25%] ">
            <CustomTextField
                    label = {"اسم الدواء"}
                    size = "3"
                    placeholder={"اسم الدواء"}
                    type="text"
                    value = {precedent.medicineName}
                    onChange = {(e) =>
                    {
                        setMedicineName(e.target.value)
                        state.updatePharmacologicalPrecedent(index,
                            {medicineName: e.target.value},
                        )
                    }
                    }
                />
                {state.errors.medicineName && (
            <div dir="rtl" className="text-red-500 text-sm mt-1">
            {state.errors.medicineName}
            </div>
        )}
            </div>

            <div className="w-[35%] ">
                <CustomDatePicker
                    label = {"تاريخ بدء أخذ الدواء"}
                    value = {precedent.dateStart}
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
                    value = {precedent.dateEnd}
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
            })}
    </div>
    
  )
}

export default PharmacologicalPrecedents