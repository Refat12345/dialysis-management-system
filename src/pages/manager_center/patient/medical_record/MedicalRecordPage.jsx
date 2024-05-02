/* eslint-disable no-unused-vars */
import { HealthInformation, SideBar } from "../../../../components"
import RecordCard from "../../../../components/manager_center/medical_record/RecordCard"
import { healthInformation, managerCenterSideBar ,information } from "../../../../data/data"

const MedicalRecordPage = () => {
  return (
      <div className="flex-grow mr-52 h-screen">
        <HealthInformation healthInformation={healthInformation} information = {information}/>
        <div className="bg-primaryColor ml-[4%] mr-[3%] mt-[2%] h-[55%] p-4">
        <RecordCard/>
            
        </div>
      </div>
      
  
   
  )
}

export default MedicalRecordPage