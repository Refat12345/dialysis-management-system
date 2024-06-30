/* eslint-disable react/prop-types */
import  {PatientImage} from "../../../assets";
import "./style.css"
const PatientCard = ({data}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:cursor-pointer">
      <div className="w-full bg-gray-200 rounded-t-lg">
          <p className="p-2">{data.userDetails.fullName}</p>
      </div>
      <div className="flex justify-between ">
      <div className="flex flex-col px-4 py-3">
          <p className="">اسم المركز</p>
          <p className="element  font-bold text-titleColor">{data.disbursedMaterials[0].centerName}</p>
          <div className="flex">
            <p className="element pl-3 ">حالة المواد : </p>
            <p className={`element text-green-500 font-bold ${data.disbursedMaterials[0].availableQuantity === 0 ? "text-red-500":"text-green-500"}`}>{data.disbursedMaterials[0].availableQuantity === 0 ?"تم استهلاكها" :"نشطة" }</p>
          </div>
      </div>
      <img src={PatientImage} className="w-24 h-24 self-center p-2"/>
      </div>
    </div>
  )
}

export default PatientCard;
