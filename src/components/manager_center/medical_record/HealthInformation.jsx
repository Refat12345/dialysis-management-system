/* eslint-disable react/prop-types */

const HealthInformation = ({healthInformation , information}) => {
  
  return (
    <div dir="rtl" className="bg-primaryColor p-4 ml-[4%] mr-[3%] h-[29%] rounded-xl mt-16">
        <span className="text-healthInformationTitle text-2xl font-bold" >{healthInformation.title}</span>
        <div className="flex flex-row justify-between h-full mt-2">
            <div className="flex flex-col" >
                <div className="vascularInlet flex items-center h-[27%]">
                    <span className="">
                        {healthInformation.vascularInlet}:
                    </span>
                    <span className="mr-5 font-bold">
                        {information.vascularInlet}
                    </span>
                </div>
                <div className=" dryWeight h-[27%] flex items-center">
                    <span>
                        {healthInformation.dryWeight}:
                    </span>
                    <span className="mr-11 font-bold">
                        {information.dryWeight}
                    </span>
                </div>
                <div className="blood h-[27%] flex items-center">
                    <span>
                        {healthInformation.blood}:
                    </span>
                    <span className="mr-16 font-bold">
                        {information.blood}
                    </span>
                </div>
            </div>
            <div className="flex flex-col ml-[15%]">
                <div className="causeOfKidneyFailure flex items-center h-[27%]">
                    <span>
                        {healthInformation.causeOfKidneyFailure}:
                    </span>
                    <span className="mr-6 font-bold">
                        {information.causeOfKidneyFailure}
                    </span>
                </div>
                <div className="sessionStartDate flex items-center h-[27%]">
                    <span>
                        {healthInformation.sessionStartDate}:
                    </span>
                    <span className="mr-5 font-bold">
                        {information.sessionStartDate}
                    </span>
                </div>
                <div className="kidneyTransplant flex items-center h-[27%]">
                    <span>
                        {healthInformation.kidneyTransplant}:
                    </span>
                    <span className="mr-10 font-bold">
                        {information.kidneyTransplant}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation