/* eslint-disable react/prop-types */

const HealthInformation = ({title , information}) => {
  const titleArray = Object.values(title);
  const height = window.innerHeight;
  return (
    <div dir="rtl" className="bg-primaryColor p-4 pb-3 ml-[1%] shadow-lg rounded-lg">
        <span className={`text-titleSideColor text-2xl font-primaryBold  `} >{titleArray[0]}</span>
        <div className={`flex flex-row justify-between ${height>600 ? (height>700?"mt-7":"mt-5") :"mt-3"}`}>
            <div className="flex flex-col" >
                <div className="vascularInlet flex ">
                    <span className={`font-primaryRegular   ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[1]}:
                    </span>
                    <span className= {`font-primaryBold mr-5  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.vascularEntrance}
                    </span>
                </div>
                <div className=" dryWeight flex ">
                    <span className={`font-primaryRegular ${height>600 ? (height>700?"mb-5":"mb-4") :"mb-2"}`} >
                        {titleArray[2]}:
                    </span>
                    <span className= {`font-primaryBold mr-11  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.dryWeight}
                    </span>
                </div>
                <div className="blood flex ">
                    <span className={`font-primaryRegular ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[3]}:
                    </span>
                    <span className= {`font-primaryBold mr-16  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.bloodType}
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-[15%]">
                <div className="causeOfKidneyFailure flex ">
                    <span className={`font-primaryRegular ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[4]}:
                    </span>
                    <span className={` font-primaryBold mr-6 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.causeRenalFailure}
                    </span>
                </div>
                <div className="sessionStartDate flex ">
                    <span className={`font-primaryRegular ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[5]}:
                    </span>
                    <span className={`font-primaryBold mr-5 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.dialysisStartDate}
                    </span>
                </div>
                <div className="kidneyTransplant flex ">
                    <span className={`font-primaryRegular ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[6]}:
                    </span>
                    <span className={`font-primaryBold mr-10  text-red-400 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {information.kidneyTransplant}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation