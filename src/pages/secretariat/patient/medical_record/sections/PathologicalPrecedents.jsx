/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row ,CustomTextField ,CustomDatePicker, AlertDialog}  from "../../../../../components/index"
import PathologicalPrecedentsDialog from "./dialog/PathologicalPrecedentsDialog"
const PathologicalPrecedents = ({ state , updateState }) => {


return (
    <div className="paddingCard bg-white rounded-lg w-[49.2%]">
        <form>
        <Row mainAxisAlignment="justify-between" >
            <p className="pr-2 font-bold text-titleColor text-lg">السوابق المرضية</p>
            <div className="flex pl-3 ">
                <div onClick={()=> state.addPathologicalPrecedent() } className="py-1 px-3 bg-bgSideButton hover:bg-black hover:text-white hover:cursor-pointer text-titleColor  rounded-full text-md">
                    <p className="">اضافة سابقة أخرى</p> 
                </div>
                {state.pathologicalPrecedents.length >1 && <AlertDialog titleButton={"رجوع"} renderComponent={ <div className="py-1 px-3 bg-bgSideButton hover:bg-black hover:text-white hover:cursor-pointer text-titleColor  rounded-full text-md mr-2">
                    <p className="">الكل</p> 
                </div>}  contentComponent={<PathologicalPrecedentsDialog state={state} updateState={updateState}/>}/>}
            </div> 
        </Row>
        {
            state.pathologicalPrecedents.map((precedent,index)=>{
                return index === state.pathologicalPrecedents.length-1 &&  <div key={index}>
                <div className="mgBottomHeader"></div>
                    <Row mainAxisAlignment="justify-evenly">
                        <div className="w-[48%]">
                            <CustomTextField
                                label = {"اسم المرض"}
                                size = "3"
                                placeholder={"اسم المرض"}
                                type="text"
                                value = {precedent.illnessName}
                                onChange = {(e) =>
                                    state.updatePathologicalPrecedent(index,
                                        {illnessName: e.target.value}
                                    )
                    }
                />
                </div>
                <div className="w-[48%]">
                    <CustomDatePicker
                        label = {"تاريخ التشخيص"}
                        value = {precedent.medicalDiagnosisDate}
                        onSelect={(e) =>
                            state.updatePathologicalPrecedent(index,
                                {medicalDiagnosisDate: e},
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
                        state.updatePathologicalPrecedent(index,
                            {generalDetails:val.target.value}
                        )
                    }}
            />
                </div>
            </Row>
        </div>
            })
        }
       </form>
    </div>
    
  )
}

export default PathologicalPrecedents