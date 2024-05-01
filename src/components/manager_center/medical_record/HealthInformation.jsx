/* eslint-disable react/prop-types */

const HealthInformation = ({healthInformation , information}) => {
  const style = {
    marginTop:"12%"
  }
  return (
    <div dir="rtl" className="bg-primaryColor p-4 mx-[4%] h-[30%] mt-10 rounded-xl">
        <span className="text-healthInformationTitle text-2xl font-bold" >{healthInformation.title}</span>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col" >
                <div className="vascularInlet" style={style}>
                    <span className="">
                        {healthInformation.vascularInlet}:
                    </span>
                    <span className="mr-5 font-bold">
                        {information.vascularInlet}
                    </span>
                </div>
                <div className="dryWeight" style={style}>
                    <span>
                        {healthInformation.dryWeight}
                    </span>
                </div>
                <div className="blood" style={style}>
                    <span>
                        {healthInformation.blood}
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="causeOfKidneyFailure">
                    <span>
                        {healthInformation.causeOfKidneyFailure}
                    </span>
                </div>
                <div className="sessionStartDate">
                    <span>
                        {healthInformation.sessionStartDate}
                    </span>
                </div>
                <div className="kidneyTransplant">
                    <span>
                        {healthInformation.kidneyTransplant}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation