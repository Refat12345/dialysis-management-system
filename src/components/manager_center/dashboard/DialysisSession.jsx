/* eslint-disable react/prop-types */

import Icon from "../../../assets/icons/medical-center/dashboard/Sessions/patient.svg"

const DialysisSession = ({dialysis}) => {
  

  const height = window.innerHeight;
  const width = window.innerWidth;
  let responsive = height > 618 ?  (height > 680 ? (height > 735 ? "my-2 text-ms" : "my-1.5 text-ms") : "my-1 text-s") : "my-1 text-xs";

  return (
    <>
        <div className={`flex flex-row-reverse  bg-white rounded-md mx-4 my-4 mb-2 ${width<640 ?"justify-between":""}`}>
            <div dir="rtl" className="flex w-[18.5%] ">
                <img src={Icon} alt=""/>
                <p className={`content-center text pr-2 ${responsive} `}>{dialysis.patientName}</p>
            </div>
            <p className={` text-center w-[20.5%] text ${responsive}`}>{dialysis.nurseName}</p>
            <p className={`text-center w-[20.5%] text ${responsive}`}>{dialysis.sessionStartTime}</p>
            <p className={`text-center w-[20.5%] text ${responsive}`}>{dialysis.sessionEndTime}</p>
            <p className={`text-center w-1/10 text ${responsive} hidden sm:block`}>{dialysis.chair}</p>
            <p className={`w-1/10 ${responsive} pl-4 hidden sm:block`}>{dialysis.roomName}</p>
        </div>
    </>
   
  )
}

export default DialysisSession
