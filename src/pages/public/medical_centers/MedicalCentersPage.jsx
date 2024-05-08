/* eslint-disable react/jsx-key */
import { MedicalCenter, Search } from "../../../components"
import AlertDialog from "../../../components/public/dialog/Dialog";
import MedicalCenterDetails from "../../../components/public/medical_centers/MedicalCenterDetails";
import {medicalCenters} from "../../../data/data"
const MedicalCentersPage = () => {
  const title = "مراكز غسيل الكلى";
  const titleDetails = ["العنوان" , "معلومات التواصل","تفاصيل اضافية"]
  const content = {
    name :"حسن",
    address:"سوريا" ,
    phone:"0987654321",
    details :" حسن الطحان الخيري في الميدان التابع الى اتحاد الجمعيات الخيرية"
  }
  const height = window.innerHeight; 
  return (
    <div dir="rtl" className={`mr-[12.5%]`}>
        <div className="flex flex-row-reverse justify-between">
          <Search/>
          <p className={`text-lg text-titleSideColor font-bold ${height>600 ? (height>700? "mb-8 mt-10":"mb-6 mt-8"):"mb-3 mt-5"}`}>{title}</p>
        </div> 
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 bg-bgMedicalCenters shadow-inner shadow-grey-50 rounded-lg p-4">
            {medicalCenters.map((medicalCenter , index)=>{
                return <AlertDialog key={index} RenderComponent={MedicalCenter} data={medicalCenter} ContentComponent = {<MedicalCenterDetails title={titleDetails} content={content}/>}/>
            })}

      </div>
    </div>
    
  )
}

export default MedicalCentersPage