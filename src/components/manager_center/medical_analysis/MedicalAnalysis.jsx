/* eslint-disable react/prop-types */

const MedicalAnalysis = ({title,data}) => {
    const medical = Object.values(data);
   
  return (
   
        <div dir="rtl" className="bg-primaryColor rounded-lg  shadow-inner shadow-grey-200 p-4 pl-2 pb-0 overflow-y-auto">
        <div className="flex flex-row justify-between ">
            <div className="flex flex-col  ">
                {title.map((title,index)=>{
                    return <>
                                { index!=3 && <span className=" content-center font-bold text-lg mb-3" key={index}>{title}</span> }
                        </>
                })}
            </div>
            <div className="flex flex-col">
                {medical.map((data,index)=>{
                    return <>
                                {index!=3 && <span className ={`content-center text-lg  mb-3 ${index === 1 ?"text-green-600": "text-titleSideColor"}`} key={index}>{ data}</span>} 
                        </>
                })}
            </div>
            <div className="w-[40%]">
                <p className="leading-[2]  text-titleSideColor">
                    <span className="ml-[6%] text-lg font-bold text-black">{title[3]}:</span>
                    {medical[3]}
                </p>
            </div>
            </div>
    </div>
  
  )
}

export default MedicalAnalysis