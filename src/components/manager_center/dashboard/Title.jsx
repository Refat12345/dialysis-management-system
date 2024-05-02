/* eslint-disable react/prop-types */

const Title = ({title}) => {
  return (
    <div className="flex justify-between flex-row-reverse bg-white rounded-md mx-4 mb-4 mt-2">
        <p dir="rtl" className="text-black  text-sm mt-1 mb-1 font-medium w- w-1/5 ">{ title.patientName}</p>
        <p className="text-black text-center text-sm mt-1 mb-1 font-medium w-1/5">{title.nurseName}</p>
        <p className="text-black text-center text-sm mt-1 mb-1 font-medium w-1/5">{title.startTime}</p>
        <p className="text-black text-center text-sm mt-1 mb-1 font-medium w-1/5">{title.endTime}</p>
        <p className="text-black text-center text-sm mt-1 mb-1 font-medium w-1/10 hidden sm:block">{title.chair}</p>
        <p className="text-black text-sm mt-1 mb-1 font-medium w-1/10 hidden sm:block ">{title.hall}</p>
    </div>
  )
}

export default Title

