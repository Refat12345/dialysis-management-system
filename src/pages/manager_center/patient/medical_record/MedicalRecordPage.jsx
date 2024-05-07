/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import { HealthInformation ,NavItemRecord } from "../../../../components"
import { healthInformation,information } from "../../../../data/data"
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg"
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg"
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg"
const precedents = [
  {
    name :"السوابق المرضية",
    path:"pathologicalHistory",
    icon:PathologicalIcon

  },{
    name:"السوابق الجراحية",
    path:"surgicalHistory",
    icon:SurgicalIcon
  },
  {
    name:"السوابق الدوائية",
    path:"pharmacologicalHistory",
    icon:PharmacologicalIcon
  }
]
const MedicalRecordPage = () => {
  return (
      <div className="flex-grow">
        
        <HealthInformation title={healthInformation} information = {information}/>
        <div dir="rtl" className="bg-primaryColor ml-[1%] mt-[4%]  p-6 shadow-lg rounded-lg overflow-y-auto">
         <NavItemRecord array={precedents}/>
         <Outlet/>
        </div>    
      </div>
      
  
   
  )
}

export default MedicalRecordPage


/*


 <div className="h-[65%] w-[33%]  mt-20">
                <RecordCard/>
          </div> 
          <div className="h-[65%] w-[33%]  mt-20">
                <RecordCard/>
          </div>
          <div className="h-[65%] w-[33%]  mt-20">
                <RecordCard/>
          </div>*/