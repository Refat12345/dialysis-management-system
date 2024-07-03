/* eslint-disable react/prop-types */
import  {PatientImage} from "../../../assets";
import "./style.css"
const PatientCard = ({data}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:cursor-pointer transition-transform transform hover:scale-105">
      <div className="w-full bg-black rounded-t-lg text-white p-2">
          <p className="text-lg font-semibold">{data.userDetails.fullName}</p>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col">
          <p className="text-gray-600">اسم المركز</p>
          <p className="font-bold text-titleColor text-lg">{data.disbursedMaterials[0].centerName}</p>
          <div className="flex items-center mt-2">
            <p className="text-gray-600 pr-2">حالة المواد :</p>
            <p className={`font-bold ${data.disbursedMaterials[0].availableQuantity === 0 ? "text-red-500" : "text-green-500"}`}>
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
