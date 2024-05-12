
import MyButton from './MyButton'
import { RoleImage } from '../Card'
import truee from "./../../../../assets/icons/medical-center/users/user-details/true.svg";
function NationalInformation() {
  let data = {
    role: "طبيب",
    name: "رفعت عبد الواحد",
    gender:"ذكر",
    phone:"+963992841193",
    gmail:"refatabdalwahed@gmail.com",
    nationalNumber:"01010193261",
    birth:"4 مايو 2024"
  }
  return (
    <div className="border p-4 rounded-xl col-span-2 bg-whiteCard">
          <div className="flex flex-row justify-end   ">

            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center mb-4"
            >
              {
                data.role!="سكرتيرة" ?  <MyButton text={"خيارات الحساب"} />:null
              }
             
              {
                data.role ==="سكرتيرة" ?<><MyButton text={"حول الحساب"} /> <MyButton text={"عرض الصلاحيات"}  /></>  :null
              }
            </div>

            <div className="flex flex-col mr-6 justify-center">
              <div className="flex items-center">
                <h3 className="text-right text-base text-gray-700 font-semibold text-lg">
                  {data.name} ({data.role})
                </h3>
              </div>

              <span className=" mt-2 text-lg  text-green-500 text-right">
                {"مفعل"}
                <img
                  className="h-4 w-4 inline-block text-green-500  ml-2"
                  src={truee}
                  alt="online"
                />
              </span>
            </div>

            <RoleImage role={data.role} width={20} height={20} />
            
          </div>

          <hr className="custom-hr mt-5 mb-4" />

          <div className="flex flex-row-reverse mb-5 mt-5 ">
            <div className="flex flex-col gap-2">
              <h3 className="text-right">الجنس</h3>
              <h3 className="text-right">{data.gender}</h3>
            </div>

            <div className="flex flex-col gap-2 mr-36">
              <h3 className="text-right">الرقم الوطني </h3>
              <h3 className="text-right">{data.nationalNumber}</h3>
            </div>

            <div className="flex flex-col gap-2 mr-36 ">
              <h3 className="text-right">تاريخ الميلاد </h3>
              <h3 className="text-right">{data.birth}</h3>
            </div>
          </div>
        </div>
  )
}

export default NationalInformation
