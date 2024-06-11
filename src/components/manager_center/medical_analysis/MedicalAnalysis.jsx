/* eslint-disable react/prop-types */

import { formatDate } from "../../../utils/DateUtils"
const MedicalAnalysis = ({title,analysis}) => {
    
return (
        <div dir="rtl" className="bg-primaryColor rounded-lg  shadow-inner shadow-grey-200 p-4 pl-2 pb-0 overflow-y-auto mb-4">
        <div className="flex flex-row justify-between ">
            <div className="title flex flex-col  ">
                {title.map((title,index)=>{
                    return index!=3 && <span className="content-center font-bold mb-3" key={index}>{title}</span> 
                        
                })}
            </div>
            <div className="content flex flex-col ">
                <span className ={`content-center font-bold text-titleSideColor mb-3 `}>{analysis.analysisName}</span>
                <span className ={`content-center font-bold mb-3 ${analysis.value === "سلبي"?"text-red-500":"text-green-600"}`}>{analysis.value}</span>
                <span className ={`content-center font-bold text-titleSideColor mb-3 `}>{formatDate(analysis.analysisDate)}</span>
            </div>
            <div className="w-[40%]">
                <p className="leading-[2] text-titleSideColor font-bold">
                    <span className="text-black ml-[6%] font-bold">{title[3]}:</span>
                    {analysis.notes}
                </p>
            </div>
            </div>
    </div>
)
}

export default MedicalAnalysis