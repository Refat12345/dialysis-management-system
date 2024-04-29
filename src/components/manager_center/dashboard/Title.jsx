/* eslint-disable react/prop-types */

const Title = ({title}) => {
  return (
    <div className="flex justify-between flex-row-reverse bg-white rounded-md ml-4 mt-2">
        <p className="text-black text-sm mt-2 mb-2 font-medium mr-6 ">{ title.patientName}</p>
        <p className="text-black text-sm mt-2 mb-2 font-medium mr-7">{title.nurseName}</p>
        <p className="text-black text-sm mt-2 mb-2 font-medium mr-2">{title.startTime}</p>
        <p className="text-black text-sm mt-2 mb-2 font-medium ">{title.endTime}</p>
        <p className="text-black text-sm mt-2 mb-2 font-medium -ml-5 hidden sm:block">{title.chair}</p>
        <p className="text-black text-sm mt-2 mb-2 font-medium -ml-2 hidden sm:block ">{title.hall}</p>
    </div>
  )
}

export default Title