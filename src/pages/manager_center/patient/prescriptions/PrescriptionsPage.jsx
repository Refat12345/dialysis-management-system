

import Prescriptions from "./sections/Prescriptions"
import { prescriptions } from "../../../../data/data"
const PrescriptionsPage = () => {
   const height = window.innerHeight;
  return (
    <div className=" flex-grow mt-20 mr-52">

            <div dir="rtl" className="prescriptions  mr-[3%] ml-[4%]">
                <p className={` text-titleSideColor text-xl font-bold ${height>600 ? (height >700 ?"mb-6" :"mb-4"):"mb-2"}`}>الوصفات الطبية</p>
                {prescriptions.map((prescription,index)=>{
                  return <>
                      <Prescriptions key={index} prescriptions={prescription} height={height}/>
                      <div className={`${height>600?(height>700?"mb-5":"mb3"):"mb-1"}`}></div>
                  </>
                })}
            </div>
    </div>
  )
}

export default PrescriptionsPage