/* eslint-disable react/prop-types */

import { convertDateToArabicFormat } from "../../../utils/DateUtils";

const HealthInformation = ({title , information}) => {
    const titleArray = Object.values(title);
    const height = window.innerHeight;
    let responsive =  height > 600 ? ( height > 700 ? "mb-6" : "mb-4" ) : "mb-2"
return (
    <div dir="rtl" className="bg-primaryColor p-4 pb-3 ml-[1%] shadow-lg rounded-lg">

        <span className={`text-titleSideColor text-2xl font-bold `} >{titleArray[0]}</span>
        
        <div className={`flex flex-row justify-between ${height>600 ? (height>700?"mt-7":"mt-5") :"mt-3"}`}>
            <div className="flex flex-col" >
                <div className="vascularInlet flex ">
                    <span className={`  ${responsive}`}>
                        {titleArray[1]}:
                    </span>
                    <span className= {`font-bold mr-5  ${responsive}`}>
                        {information.vascularEntrance}
                    </span>
                </div>
                <div className=" dryWeight flex ">
                    <span className={`${height>600 ? (height>700?"mb-5":"mb-4") :"mb-2"}`} >
                        {titleArray[2]}:
                    </span>
                    <span className= {`font-bold mr-11  ${responsive}`}>
                        {information.dryWeight}
                    </span>
                </div>
                <div className="blood flex ">
                    <span className={`${responsive}`}>
                        {titleArray[3]}:
                    </span>
                    <span dir="ltr" className= {`font-bold mr-16  ${responsive}`}>
                        {information.bloodType}
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-[15%]">
                <div className="causeOfKidneyFailure flex ">
                    <span className={`${responsive}`}>
                        {titleArray[4]}:
                    </span>
                    <span className={` font-bold mr-6 ${responsive}`}>
                        {information.causeRenalFailure}
                    </span>
                </div>
                <div className="sessionStartDate flex ">
                    <span className={`${responsive}`}>
                        {titleArray[5]}:
                    </span>
                    <span className={`font-bold mr-5 ${responsive}`}>
                        {convertDateToArabicFormat(information.dialysisStartDate)}
                    </span>
                </div>
                <div className="kidneyTransplant flex ">
                    <span className={`${responsive}`}>
                        {titleArray[6]}:
                    </span>
                    <span className={`font-bold mr-10  text-red-400 ${responsive}`}>
                        {information.kidneyTransplant === 0 ? "لا": "نعم"}
                    </span>
                </div>
            </div>
        </div>
    </div>
)
}

export default HealthInformation