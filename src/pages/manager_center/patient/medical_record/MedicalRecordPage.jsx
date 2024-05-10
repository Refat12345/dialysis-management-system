/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import { HealthInformation ,NavItemRecord } from "../../../../components"
import { healthInformation } from "../../../../data/data"
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg"
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg"
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg"
import { useGetMedicalRecordQuery } from "../../../../services/patient_profile/medical_record/MedicalRecordSlice"

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
  const {data:information , isSuccess} = useGetMedicalRecordQuery(1);

  return (
      isSuccess &&
        <div className=" ss flex-grow mr-52 mt-20">  
          <HealthInformation title={healthInformation} information = {information.medicalRecord}/>
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