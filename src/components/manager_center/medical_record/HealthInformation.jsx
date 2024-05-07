/* eslint-disable react/prop-types */

const HealthInformation = ({title , information}) => {
  const titleArray = Object.values(title);
  const informationArray = Object.values(information);
  const height = window.innerHeight;
  return (
    <div dir="rtl" className="bg-primaryColor p-4 pb-3 ml-[1%] shadow-lg rounded-lg">
        <span className={`text-titleSideColor text-2xl font-bold  `} >{titleArray[0]}</span>
        <div className={`flex flex-row justify-between ${height>600 ? (height>700?"mt-7":"mt-5") :"mt-3"}`}>
            <div className="flex flex-col" >
                <div className="vascularInlet flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[1]}:
                    </span>
                    <span className= {`mr-5  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[0]}
                    </span>
                </div>
                <div className=" dryWeight flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-5":"mb-4") :"mb-2"}`} >
                        {titleArray[2]}:
                    </span>
                    <span className= {`mr-11  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[1]}
                    </span>
                </div>
                <div className="blood flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[3]}:
                    </span>
                    <span className= {`mr-16  ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[2]}
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-[15%]">
                <div className="causeOfKidneyFailure flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[4]}:
                    </span>
                    <span className={`mr-6 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[3]}
                    </span>
                </div>
                <div className="sessionStartDate flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[5]}:
                    </span>
                    <span className={`mr-5 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[4]}
                    </span>
                </div>
                <div className="kidneyTransplant flex ">
                    <span className={`font-bold ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {titleArray[6]}:
                    </span>
                    <span className={`mr-10  text-red-400 ${height>600 ? (height>700?"mb-6":"mb-4") :"mb-2"}`}>
                        {informationArray[5]}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation