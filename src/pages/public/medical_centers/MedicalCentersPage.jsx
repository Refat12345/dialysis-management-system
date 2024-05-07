/* eslint-disable react/jsx-key */
import { MedicalCenter, Search } from "../../../components"
import {medicalCenters} from "../../../data/data"
const MedicalCentersPage = () => {
  const title = "مراكز غسيل الكلى";
  const height = window.innerHeight; 
  const width = window.innerWidth;
  return (
    <div dir="rtl" className={`${width>1300 ? (width>1400?"mr-64":"mr-60"):"mr-56"}`}>
        <div className="flex flex-row-reverse justify-between">
          <Search/>
          <p className={`text-lg text-titleSideColor font-bold ${height>600 ? (height>700? "mb-8 mt-10":"mb-6 mt-8"):"mb-3 mt-5"}`}>{title}</p>
        </div> 
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 bg-bgMedicalCenters shadow-inner shadow-grey-50 rounded-lg p-4">
            {medicalCenters.map((medicalCenter , index)=>{
                return <MedicalCenter key={index} object={medicalCenter}/>
            })}
    
      </div>
    </div>
    
  )
}

export default MedicalCentersPage