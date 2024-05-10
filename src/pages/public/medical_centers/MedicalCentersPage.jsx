/* eslint-disable react/jsx-key */
import AlertDialog from "../../../components/public/dialog/Dialog"
import { MedicalCenter, Search } from "../../../components"
import  addressIcon from "../../../assets/icons/public/address.svg"
import  centerIcon from "../../../assets/icons/public/MedicalCenterIcon.svg"
import MedicalCenterDetails from "../../../components/public/medical_centers/MedicalCenterDetails"
import { useGetMedicalCentersQuery } from "../../../services/public/medical_centers/MedicalCentersSlice"
const MedicalCentersPage = () => {

  const {data,isSuccess}=useGetMedicalCentersQuery();

  const title = ["العنوان","معلومات التواصل","تفاصيل عامة"] ;
  const icons = {
    centerIcon:centerIcon,
    addressIcon:addressIcon
  }
  const height = window.innerHeight; 


  return (
   isSuccess &&  <div dir="rtl" className={`mr-48 w-full`}>
   <div className="mx-[4%]">
   <div className="flex flex-row-reverse justify-between">
      <Search/>
      <p className={`text-2xl text-titleSideColor font-primaryBold ${height>600 ? (height>700? "mb-8 mt-10":"mb-6 mt-8"):"mb-3 mt-5"}`}>{"مراكز غسيل الكلى"}</p>
    </div> 
    <div className="grid grid-cols-3 xl:grid-cols-4 gap-3 bg-bgMedicalCenters shadow-inner shadow-grey-50 rounded-lg p-4">
        {data.medicalCenters.map((medicalCenter , index)=>{
            return <AlertDialog key={index} renderComponent={<MedicalCenter icons={icons} content={medicalCenter}/>} contentComponent={<MedicalCenterDetails title={title} content={medicalCenter} />} titleButton={"رجوع"}/>

        })}

  </div>
   </div>
</div>
    
  )
}

export default MedicalCentersPage



  // const titleDetails = ["العنوان" , "معلومات التواصل","تفاصيل اضافية"]
  // const content = {
  //   name :"حسن",
  //   address:"سوريا" ,
  //   phone:"0987654321",
  //   details :" حسن الطحان الخيري في الميدان التابع الى اتحاد الجمعيات الخيرية"
  // }