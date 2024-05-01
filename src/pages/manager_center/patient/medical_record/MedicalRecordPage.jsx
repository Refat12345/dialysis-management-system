/* eslint-disable no-unused-vars */
import { HealthInformation, SideBar } from "../../../../components"
import { healthInformation, managerCenterSideBar ,information } from "../../../../data/data"

const MedicalRecordPage = () => {
  return (
      <div className="flex-grow">
        <HealthInformation healthInformation={healthInformation} information = {information}/>
        <div className="bg-primaryColor h-[62%] mt-[2%] mx-[4%]">

        </div>
      </div>
      
  
   
  )
}

export default MedicalRecordPage