/* eslint-disable react/prop-types */

const Title = ({title}) => {
  const height = window.innerHeight
  return (
    <div className={`flex justify-between flex-row-reverse bg-white rounded-md mx-4  mt-2 ${height>680 ? "mb-4":"mb-3"}`}>
        <p dir="rtl" className={`text-md mt-1 mb-1 font-bold w- w-[18.5%] pr-4 `}>{ title.patientName}</p>
        <p className="text-center text-md mt-1 mb-1 font-bold w-[20.5%]">{title.nurseName}</p>
        <p className="text-center text-md mt-1 mb-1 font-bold w-[20.5%]">{title.startTime}</p>
        <p className="text-center text-md mt-1 mb-1 font-bold w-[20.5%]">{title.endTime}</p>
        <p className="text-center text-md mt-1 mb-1 font-bold w-1/10 hidden sm:block">{title.chair}</p>
        <p className="text-md mt-1 mb-1 font-bold w-1/10 hidden sm:block ">{title.hall}</p>
    </div>
  )
}

export default Title

