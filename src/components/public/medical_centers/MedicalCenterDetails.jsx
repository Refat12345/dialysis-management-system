/* eslint-disable react/prop-types */


const MedicalCenterDetails= ({title,content}) => {
    const height = window.innerHeight;
    console.log(content);
    
    const responsiveContent = height > 603 ? (height>700 ? "mb-5" : "mb-3") : "mb-1";
    const responsiveTitle = height > 603 ? (height>700 ? "mb-3" : "mb-1") : "mb-0";
    const responsiveTelecom = height > 603 ? (height>700 ? "mb-3" : "mb-2") : "mb-1";
    const responsiveUse = height > 603 ? (height>700 ? "mb-2" : "mb-1") : "mb-0";
return (
    <div dir ="rtl" className='flex flex-col'>
        <div className='self-center'>
            <p className={`text-xl font-bold text-titleSideColor ${responsiveContent}`}>
                {content.centerName}
            </p>
        </div>
        <div>
            <p className={`text-base text-titleSideColor font-bold  ${responsiveTitle}`}>{title[0]}:</p>
            <p className={`text-sm font-bold ${responsiveContent}`}>{content.address}</p>
        </div>
        <div>
            <p className={`text-base text-titleSideColor font-bold ${responsiveTelecom}`}>{title[1]}:</p>
            {content.telecom.map((telecom,index)=>{
                return <div key={index}>
                        <p className={`text-sm  font-bold text-red-500  ${responsiveUse}`}>{telecom.system}:</p>
                        <p className={`text-sm font-bold  ${responsiveTelecom}`}>{telecom.value}</p>
                </div>
            })}
        </div>
        <div>
            <p className={`text-base  text-titleSideColor font-bold ${responsiveTitle} mt-1`}>{title[2]}:</p>
            <p className={`text-sm font-bold ${responsiveContent}`}>{content.description}</p>
        </div>
    </div>
  )
}

export default MedicalCenterDetails
