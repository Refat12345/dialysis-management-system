/* eslint-disable react/prop-types */
import { DropDown } from "../../../../components";
import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"


  const medicinesTitle =[["حديد","هيبارين","ايبوتين"],["#31357e","#4849e3","#c8d5fd"]]
  const causeRenalFailureTitle =[["داء السكري","أمراض قلبية","ضغط الدم", "أمراض أخرى"],["#c9a05b" , "#ddc994" ,"#a43939","#116e41"]]


const PieCharts = ({setValue ,date, causeRenalData, medicineData}) => {
 
  const colors = {
    titleColor:"primaryColor",
    contentColor:"bgButtonColor"
}
const year = {
    title :"السنة",
    array :["2024","2025","2026","2027","2028","2029","2030",
      "2031","2032","2033","2034","2035"
    ]
}
const month = {
  title :"الشهر",
  array :["1","2","3","4","5","6","7",
    "8","9","10","11","12"
  ]
}
  const medicines = [
    { id: 0, value: medicineData.الحديد, label:medicinesTitle[0][0]},
    { id: 1, value: medicineData.الهيبارين , label: medicinesTitle[0][1]  },
    { id: 2, value: medicineData.الايبوتين, label: medicinesTitle[0][2]},
  ];
  const causeRenalFailure = [
    { id: 0, value: causeRenalData.diabetes, label:causeRenalFailureTitle[0][0]},
    { id: 1, value: causeRenalData.heartDiseases , label: causeRenalFailureTitle[0][1]  },
    { id: 2, value: causeRenalData.bloodPressure, label: causeRenalFailureTitle[0][2]},
    { id: 3, value: causeRenalData.otherDiseases, label: causeRenalFailureTitle[0][3]},
  ];
  const height = window.innerHeight;
  return (
    <>
    <div className={`${height > 700 ?"mt-5 ml-[8%]" :"mt-3 ml-[8%]"}`}>
        <div className="flex justify-between">
        
              <DropDown colors={colors} filter={ month.array} title={month.title} onSelect={(val) => {
                setValue({...date,month:val})
              }}/>
              <DropDown colors={colors} filter={ year.array} title={year.title} onSelect={(val) => {
                setValue({...date,year:val})
              }}/>
        </div>
        <div className={`${height > 700 ?"mt-2" :"mt-1"}`}></div>  
        <div className="shadow-lg  ">
          <PieChart title = {medicinesTitle} data = {medicines}/>
        </div>
        <div className={`shadow-lg ${window.innerHeight>720 ?"mt-7":"mt-4"}`}>
        {<PieChart title = {causeRenalFailureTitle} data = {causeRenalFailure} />} 
        </div>
    </div>
</>
  )
}

export default PieCharts

