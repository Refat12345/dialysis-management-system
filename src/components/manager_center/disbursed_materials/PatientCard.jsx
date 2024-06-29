import  {PatientsIcon} from "../../../assets";
import "./style.css"
const PatientCard = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="w-full bg-gray-200 rounded-t-lg">
          <p className="p-2">رفعت عثمان أطلال عبد الوحد</p>
      </div>
      <div className="flex justify-between ">
      <div className="flex flex-col px-4 py-3">
          <p className="">اسم المركز</p>
          <p className="element  font-bold text-titleColor">حسن الطحان الخيري</p>
          <div className="flex">
            <p className="element pl-3 ">حالة المواد : </p>
            <p className="element text-green-500 font-bold">نشطة</p>
          </div>
      </div>
      <img src={PatientsIcon} className="w-16 h-16 self-center p-2"/>
      </div>
    </div>
  )
}

export default PatientCard;
