/* eslint-disable react/prop-types */
import { convertDateToArabicFormat } from "../../../utils/DateUtils";
const Medicine = ({medicine,title , doctor}) => {
    const height = window.innerHeight;
    const arrayTitle = Object.values(title);
    
    let parentResponsive = height > 600 ? ( height > 700 ?"mb-6" : "mb-4" ) : "mb-2";
    let responsive = height > 600 ? ( height > 700 ? "mb-3" : "mb-2" ) : "mb-1";
    let responsiveBottom = height > 600 ? ( height > 700 ? "mb-2" : "mb-1" ): "mb-0";
   

  return (
    <div  dir="rtl" className={`flex flex-row justify-between p-4 rounded-lg bg-white ${parentResponsive}`}>
        <div className="doctor status ">
            <p className="text-lg font-bold mb-4"> 
                الطبيب: {doctor}
            </p>
            <div className={`rounded-full p-1  w-[60%] ${medicine.status === "active" ?"bg-green-100" :"bg-bgMedicineStatus"} `}>
                <p className={`text-center pr- ${medicine.status === "active" ? "text-green-500 " :"text-titleSideColor"}`}>{medicine.status === "nonActive" ? "منتهية" :"نشطة" }</p>
            </div>
        </div>
        <div className="title text-base ">
            <p className={`${responsive}`}>{arrayTitle[0]}:</p>
            <p className={`${responsive}`}>{arrayTitle[1]}:</p>
            <p className={`${responsiveBottom}`}>{arrayTitle[2]}:</p>
        </div>
        <div className="name date text-base font-bold text-titleSideColor">
            <p className={`${responsive}`}>{medicine.name}</p>
            <p className={`${responsive}`}>{convertDateToArabicFormat(medicine.dateOfStart)}</p>
            <p className={`${responsiveBottom}`}>{convertDateToArabicFormat(medicine.dateOfEnd)}</p>
        </div>
        <div className="note text-base w-[30%] leading-[1.5]">
            <p className={`${responsive}`}>{arrayTitle[3]}:</p>
            <p className="font-bold text-titleSideColor">{medicine.details}</p>
        </div>
        
    </div>
  )
}

export default Medicine