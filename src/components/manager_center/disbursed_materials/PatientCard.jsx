/* eslint-disable react/prop-types */
import  {PatientImage} from "../../../assets";
import "./style.css"
const PatientCard = ({data}) => {
  const height = window.innerHeight;
  const titleCenterNameFont = height > 600 ? (height > 650 ? (height> 700 ? "text-[15px]" :"text-[14px]") : "text-[13px]") :"text-[12px]" 
  const contentCenterNameFont = height > 600 ? (height > 650 ? (height> 700 ? "text-[17px]" :"text-[16px]") : "text-[15px]") :"text-[13px]"
  const titleMaterialStatus = height > 600 ? (height > 650 ? (height> 700 ? "text-[16px]" :"text-[14px]") : "text-[13px]") :"text-[11.5px]" 
  const contentMaterialStatus = height > 600 ? (height > 650 ? (height> 700 ? "text-[17px]" :"text-[15px]") : "text-[14px]") :"text-[12.5px]" 
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:cursor-pointer transition-transform transform hover:scale-105">
      <div className="w-full bg-black rounded-t-lg text-white p-2">
          <p className="text-lg font-semibold">{data.userDetails.fullName}</p>
      </div>
      <div className="flex justify-between items-center px-4 element">
        <div className="flex flex-col">
          <p className= {`text-gray-600 ${titleCenterNameFont} `}>اسم المركز</p>
          <p className={`font-bold text-titleColor ${contentCenterNameFont}`}>{data.disbursedMaterials[0].centerName}</p>
          <div className="material-status flex text-center">
            <p className={`text-gray-600 ${titleMaterialStatus}`}>حالة المواد :</p>
            <p className={`font-bold ${data.disbursedMaterials[0].availableQuantity === 0 ? "text-red-500" : "text-green-500"} ${contentMaterialStatus}`}>
              {data.disbursedMaterials[0].availableQuantity === 0 ? "تم استهلاكها" : "نشطة"}
            </p>
          </div>
        </div>
        <img src={PatientImage} className="w-16 h-16 " alt="Patient"/>
      </div>
    </div>
  )
}

export default PatientCard;
