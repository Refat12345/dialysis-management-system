/* eslint-disable react/prop-types */

import Icon from "../../../assets/icons/medical-center/dashboard/Sessions/patient.svg";


const DialysisSession = ({dialysis}) => {
  return (
    <>
        <div className="flex flex-row-reverse bg-white rounded-md m-4">
            <div dir="rtl" className="flex w-1/5">
                <img src={Icon} alt=""/>
                <p className="text-gray-600 text-xs font-medium text mt-2 mb-2 ">{dialysis.patientName}</p>
            </div>
            <p className="text-gray-600 text-center text-xs font-medium w-1/5 text mt-2 mb-2">{dialysis.nurseName}</p>
            <p className="text-gray-600 text-center text-xs font-medium w-1/5 text mt-2 mb-2">{dialysis.startTime}</p>
            <p className="text-gray-600 text-center text-xs font-medium w-1/5 text mt-2 mb-2">{dialysis.endTime}</p>
            <p className="text-gray-600 text-center text-xs font-medium w-1/10 text mt-2 mb-2">{dialysis.chair}</p>
            <p className="text-gray-600  text-xs font-medium w-1/10 mt-2 mb-2 pl-4 ">{dialysis.hall}</p>
        </div>
    </>
  )
}

export default DialysisSession

