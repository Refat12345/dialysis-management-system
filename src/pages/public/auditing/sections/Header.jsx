/* eslint-disable react/prop-types */
import { CustomDatePicker, DropDown, Search } from "../../../../components"
const Header = ({value,setFilter,setInputValue}) => {
    const filters = [
        {
            title:"العملية",
            array:["السجل الطبي","التحاليل","معلومات المركز","الوصفات"]
        },
    ]
    const colors = {
        titleColor:"primaryColor",
        contentColor:"bgButtonColor",
        textColor:"textMenuColor"
    }
  return (
    <div className="mt-10">
                <div className="flex">
                    <div className=" w-full">
                        <p className="text-2xl text-titleSideColor font-bold mb-5 ">{"سجل العمليات"}</p>
                        <div className="flex w-[75%] md:w-[66%] lg2:w-[48%] justify-start">
                            {filters.map((filter , index)=>{
                                return <DropDown key={index} filter={filter.array} colors={colors} title={filter.title}  onSelect={(val) => {
                                            setFilter({...value,operation:val})
                                }} />
                            })}
                            <CustomDatePicker
                            date={value.date}
                            onSelect={(val)=>{
                                setFilter({...value,date:val})
                            }}
                            type={"audit"}/>        
                        </div>
                    </div>
                    <div className="self-end">
                        <Search handleInputValue={setInputValue}/>
                    </div>
                </div>
            </div>
  )
}

export default Header