/* eslint-disable react/prop-types */

const MedicalAnalysis = ({title,analysis}) => {
   
   
  return (
   
        <div dir="rtl" className="bg-primaryColor rounded-lg  shadow-inner shadow-grey-200 p-4 pl-2 pb-0 overflow-y-auto mb-4">
        <div className="flex flex-row justify-between ">
            <div className="title flex flex-col  ">
                {title.map((title,index)=>{
                    return index!=3 && <span className=" content-center font-primaryBold text-base mb-3" key={index}>{title}</span> 
                        
                })}
            </div>
            <div className="content flex flex-col ">
                <span className ={`content-center text-base font-primaryBold text-titleSideColor mb-3 `}>{analysis.analysisName}</span>
                <span className ={`content-center text-base font-primaryBold text-green-600 mb-3 `}>{analysis.value}</span>
                <span className ={`content-center text-base font-primaryBold text-titleSideColor mb-3 `}>{analysis.analysisDate}</span>
            </div>
            <div className="w-[40%]">
                <p className="leading-[2] text-titleSideColor font-primaryBold">
                    <span className="ml-[6%] text-base  font-primaryBold text-black">{title[3]}:</span>
                    {analysis.notes}
                </p>
            </div>
            </div>
    </div>
  
  )
}

export default MedicalAnalysis