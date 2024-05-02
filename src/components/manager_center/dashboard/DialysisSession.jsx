/* eslint-disable react/prop-types */

import Icon from "../../../assets/icons/medical-center/dashboard/Sessions/patient.svg"

const DialysisSession = ({dialysis}) => {
  return (
    <>
        <div className={`flex flex-row-reverse  bg-white rounded-md mx-4 my-4 mb-2 ${window.innerWidth<640 ?"justify-between":""}`}>
            <div dir="rtl" className="flex w-1/5">
                <img src={Icon} alt=""/>
                <p className={`text-gray-600 text-xs font-medium text ${window.innerHeight>680 ?"my-2":"my-1"} `}>{dialysis.patientName}</p>
            </div>
            <p className={`text-gray-600 text-center text-xs font-medium w-1/5 text ${window.innerHeight>680?"my-2":"my-1"}`}>{dialysis.nurseName}</p>
            <p className={`text-gray-600 text-center text-xs font-medium w-1/5 text ${window.innerHeight>680?"my-2":"my-1"}`}>{dialysis.startTime}</p>
            <p className={`text-gray-600 text-center text-xs font-medium w-1/5 text ${window.innerHeight>680?"my-2":"my-1"}`}>{dialysis.endTime}</p>
            <p className={`text-gray-600 text-center text-xs font-medium w-1/10 text ${window.innerHeight>680?"my-2":"my-1"} hidden sm:block`}>{dialysis.chair}</p>
            <p className={`text-gray-600  text-xs font-medium w-1/10 ${window.innerHeight>680?"my-2":"my-1"} pl-4 hidden sm:block`}>{dialysis.hall}</p>
        </div>
    </>
   
  )
}

export default DialysisSession



