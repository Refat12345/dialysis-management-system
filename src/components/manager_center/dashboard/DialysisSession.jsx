/* eslint-disable react/prop-types */

import Icon from "../../../assets/icons/medical-center/dashboard/Sessions/patient.svg"
import { getHourInArabic } from "../../../utils/DateUtils";

const DialysisSession = ({dialysis}) => {

  let height = window.innerHeight;
  const width = window.innerWidth;
  let responsive = height > 618 ?  (height > 680 ? (height > 745 ? "my-2 text-ms" : "my-1.5 text-ms") : "my-1 text-s") : "my-1 text-xs";

  return (
    <>
        <div className={`flex flex-row-reverse font-bold   bg-white rounded-md mx-4 my-4 mb-2 ${width<640 ?"justify-between":""}`}>
            <div dir="rtl" className="flex w-[22.5%] ">
                <img src={Icon} alt=""/>
                <p className={`content-center text pr-2 whitespace-nowrap overflow-hidden text-ellipsis ${responsive} `}>{dialysis.patientName}</p>
            </div>
            <p dir="rtl" className={` text-center w-[25.5%] whitespace-nowrap overflow-hidden text-ellipsis ${responsive}`}>{dialysis.nurseName}</p>
            <p className={`text-center w-[25.5%]  ${responsive}`}>{getHourInArabic(dialysis.startTime)}</p>
            <p className={`text-center w-[14%]  ${responsive} hidden sm:block`}>{dialysis.chair}</p>
            <p dir="rtl" className={`w-[16%] ${responsive} pl-4 hidden sm:block text-center whitespace-nowrap overflow-hidden text-ellipsis`}>{dialysis.roomName}</p>
        </div>
    </>
   
  )
}

export default DialysisSession
