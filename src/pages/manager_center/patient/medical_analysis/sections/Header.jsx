import { DropDown } from "../../../../../components"

const Header = () => {
const filters = [
    {
        title:" الربع",
        array:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]
    },
    {
        title:"نوع التحليل",
        array:["خضاب","حديد","كبد"]
    },
    {
        title:"الشهر",
        array:["كانون الثاني" , "كانون الأول"]
    }
]
const colors = {
    titleColor:"bgSideButton",
    contentColor:"bgButtonColor",
    textColor:"textMenuColor"
}
  return (
    <div className="header flex justify-between mb-6  ">
        <span className="text-titleSideColor text-2xl font-primaryBold ">التحاليل</span>
        <div className="flex justify-between w-[55%]">
            {filters.map((filter,index)=>{
                return <DropDown key={index} filter={filter} colors={colors}/>
            })}
        </div>
    </div>
  )
}

export default Header