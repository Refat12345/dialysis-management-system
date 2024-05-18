import {  DropDown, PaginationComponent  } from "../../../components"
import { auditing } from "../../../data/data";
import AuditSection from "./sections/AuditSection";
const AuditingPage = () => {
    let height = window.innerHeight;
    const itemsPerPage = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? 11 :10) : 9) : 8) : 7
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
    <div dir="rtl" className="flex-grow md:mr-48 ">
        <div className="mx-[5.5%]">
            <div className="mt-10">
                <p className="text-2xl text-titleSideColor font-bold mb-5 ">{"سجل العمليات"}</p>
                <div className="flex w-[65%] md:w-[58%] lg2:w-[40%] justify-start">
                    {filters.map((filter , index)=>{
                        return <DropDown key={index} filter={filter} colors={colors} />
                    })}        
                </div>
            </div>
            <PaginationComponent RenderComponent={AuditSection} data={auditing} itemsPerPage={itemsPerPage}/>
        </div>
    </div>
  )
}

export default AuditingPage