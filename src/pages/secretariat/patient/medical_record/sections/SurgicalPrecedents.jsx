

/* eslint-disable no-unused-vars */
 /* eslint-disable react/prop-types */
 import { Row ,CustomDatePicker ,CustomTextField ,AlertDialog} from "../../../../../components/index"
 import SurgicalPrecedentsDialog from "./dialog/SurgicalPrecedentsDialog";
 
 const SurgicalPrecedents = ({ state , updateState }) => {
  
 return (
     <div className="paddingCard bg-white rounded-lg w-[49.2%]">
         <Row mainAxisAlignment="justify-between" >
             <p className="pr-2 font-bold text-titleColor text-lg">السوابق الجراحية</p>
             <div className="flex pl-3 ">
                 
                 <div onClick={()=>state.addSurgicalPrecedents()} className="py-1 px-3 bg-bgSideButton transition-transform transform hover:scale-110 hover:cursor-pointer text-titleColor rounded-full text-md ">
                     <p className="">اضافة سابقة أخرى</p> 
                 </div>
                 {state.surgicalPrecedents.length > 1 && <AlertDialog titleButton={"رجوع"} renderComponent={ <div className="py-1 px-3 bg-bgSideButton transition-transform transform hover:scale-110 hover:cursor-pointer text-titleColor  rounded-full text-md mr-2">
                     <p className="">الكل</p> 
                 </div>}  contentComponent={<SurgicalPrecedentsDialog state={state} updateState={updateState}/>}/>}
             </div> 
         </Row>
         <div className="mgBottomHeader"></div>
         {state.surgicalPrecedents.map((precedent,index)=>{
             return index === state.surgicalPrecedents.length - 1 && <div key={index}>
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
                     value = {precedent.surgeryDate}
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
         })}
     </div>
     
 )
 }
 
 export default SurgicalPrecedents