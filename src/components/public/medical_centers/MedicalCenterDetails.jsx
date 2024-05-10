/* eslint-disable react/prop-types */


const MedicalCenterDetails= ({title,content}) => {
  const height = window.innerHeight;
  return (
    <div dir ="rtl" className='flex flex-col'>
        <div className='self-center'>
            <p className={`text-xl font-primaryBold text-titleSideColor ${height > 600 ? (height>700 ? "mb-5" : "mb-3") : "mb-1"}`}>
                {content.centerName}
            </p>
        </div>
        <div>
            <p className={`text-sm text-titleSideColor font-primaryBold  ${height > 600 ? (height>700 ? "mb-3" : "mb-1") : "mb-0"}`}>{title[0]}:</p>
            <p className={`text-base font-primaryBold ${height > 600 ? (height>700 ? "mb-5" : "mb-3") : "mb-1"}`}>{content.address}</p>
        </div>
        <div>
            <p className={`text-sm text-titleSideColor font-primaryBold ${height > 600 ? (height>700 ? "mb-3" : "mb-2") : "mb-1"}`}>{title[1]}:</p>
            {content.telecom.map((telecom,index)=>{
                return <div key={index}>
                        <p className={`text-base  font-primaryRegular  ${height > 600 ? (height>700 ? "mb-2" : "mb-1") : "mb-0"}`}>{telecom.use}:</p>
                        <p className={`text-base font-primaryBold  ${height > 600 ? (height>700 ? "mb-3" : "mb-2") : "mb-1"}`}>{telecom.value}</p>
                </div>
            })}
        </div>
        <div>
            <p className={`text-sm  text-titleSideColor font-primaryBold ${height > 600 ? (height>700 ? "mb-3" : "mb-1") : "mb-0"} mt-1`}>{title[2]}:</p>
            <p className={`text-base font-primaryBold ${height > 600 ? (height>700 ? "mb-5" : "mb-3") : "mb-1"}`}>{content.description}</p>
        </div>
    </div>
  )
}

export default MedicalCenterDetails
