import { DropDown } from "../../../../components";
const Header = () => {
    const filters = [
        {
            title:" المتأثر بالتعديل",
            array:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]
        },
        {
            title:"التاريخ",
            array:["كانون الأول","كانون الثاني","شباط"]
        }
    ]
    const colors = {
        titleColor:"primaryColor",
        contentColor:"bgButtonColor",
        textColor:"textMenuColor"
    }
  return (
    <div className="mt-10">
                <p className="text-2xl text-titleSideColor font-bold mb-5 ">{"سجل العمليات"}</p>
                <div className="flex w-[65%] md:w-[58%] lg2:w-[40%] justify-start">
                    {filters.map((filter , index)=>{
                        return <DropDown key={index} filter={filter.array} colors={colors} title={filter.title}  onSelect={(val) => {
                            console.log(val);
                          }} />
                    })}        
                </div>
            </div>
  )
}

export default Header