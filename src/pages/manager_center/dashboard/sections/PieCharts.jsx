/* eslint-disable react/prop-types */
import { useState } from "react";
import { CustomDatePicker } from "../../../../components";
import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"


  const medicinesTitle =[["حديد","هيبارين","ايبوتين"],["#31357e","#4849e3","#c8d5fd"]]
  const causeRenalFailureTitle =[["داء السكري","أمراض قلبية","ضغط الدم", "أمراض أخرى"],["#c9a05b" , "#ddc994" ,"#a43939","#116e41"]]


const PieCharts = ({setValue , causeRenalData, medicineData}) => {
  const [date,setDate] = useState(null)
  const medicines = [
    { id: 0, value: medicineData.iron, label:medicinesTitle[0][0]},
    { id: 1, value: medicineData.heparin , label: medicinesTitle[0][1]  },
    { id: 2, value: medicineData.epoetin, label: medicinesTitle[0][2]},
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
      <CustomDatePicker
            date={date}
            onSelect={(val)=>{
              setDate(val)
              setValue(val)
            }}
        />  
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

