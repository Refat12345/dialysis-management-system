

import Prescriptions from "./sections/Prescriptions"

import { useGetPrescriptionsQuery } from "../../../../services/patient_profile/prescriptions/PrescriptionsSlice";
const PrescriptionsPage = () => {
   const height = window.innerHeight;
   const{data,isSuccess} = useGetPrescriptionsQuery(3);
  return (
    isSuccess && <div className=" flex-grow">

    <div dir="rtl" className="prescriptions  ml-[1%]">
        <p className={` text-titleSideColor text-2xl font-primaryBold ${height>600 ? (height >700 ?"mb-6" :"mb-4"):"mb-2"}`}>الوصفات الطبية</p>
        {data.prescriptions.map((prescription,index)=>{
          return <Prescriptions key={index} prescriptions={prescription} height={height}/>

        })}
    </div>
</div>
  )
}

export default PrescriptionsPage