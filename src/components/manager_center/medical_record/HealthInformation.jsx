/* eslint-disable react/prop-types */

const HealthInformation = ({title , information}) => {
  const titleArray = Object.values(title);
  const informationArray = Object.values(information);
  return (
    <div dir="rtl" className="bg-primaryColor p-4 ml-[4%] mr-[3%] h-[29%]  mt-20 shadow-lg rounded-lg">
        <span className="text-titleSideColor text-2xl font-bold" >{titleArray[0]}</span>
        <div className="flex flex-row justify-between h-full mt-2">
            <div className="flex flex-col" >
                <div className="vascularInlet flex items-center h-[27%]  ">
                    <span className=" font-bold">
                        {titleArray[1]}:
                    </span>
                    <span className="mr-5">
                        {informationArray[0]}
                    </span>
                </div>
                <div className=" dryWeight h-[27%] flex items-center">
                    <span className="font-bold">
                        {titleArray[2]}:
                    </span>
                    <span className="mr-11">
                        {informationArray[1]}
                    </span>
                </div>
                <div className="blood h-[27%] flex items-center">
                    <span className="font-bold">
                        {titleArray[3]}:
                    </span>
                    <span className="mr-16">
                        {informationArray[2]}
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-[15%]">
                <div className="causeOfKidneyFailure flex items-center h-[27%]">
                    <span className="font-bold">
                        {titleArray[4]}:
                    </span>
                    <span className="mr-6">
                        {informationArray[3]}
                    </span>
                </div>
                <div className="sessionStartDate flex items-center h-[27%]">
                    <span className="font-bold">
                        {titleArray[5]}:
                    </span>
                    <span className="mr-5">
                        {informationArray[4]}
                    </span>
                </div>
                <div className="kidneyTransplant flex items-center h-[27%]">
                    <span className="font-bold">
                        {titleArray[6]}:
                    </span>
                    <span className="mr-10  text-red-400">
                        {informationArray[5]}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation