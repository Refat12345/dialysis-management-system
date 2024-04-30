/* eslint-disable react/prop-types */

const HealthInformation = ({healthInformation}) => {
  return (
    <div className="bg-primaryColor p-4 max-w-7xl mx-auto">
        <span >{healthInformation.title}</span>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col" >
                <span>{healthInformation.vascularInlet}</span>
                <span>{healthInformation.dryWeight}</span>
                <span>{healthInformation.blood}</span>
            </div>
            <div className="flex flex-col">
                <span>{healthInformation.causeOfKidneyFailure}</span>
                <span>{healthInformation.sessionStartDate}</span>
                <span>{healthInformation.kidneyTransplant}</span>
            </div>
        </div>
    </div>
  )
}

export default HealthInformation