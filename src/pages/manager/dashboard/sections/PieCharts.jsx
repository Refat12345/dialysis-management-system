/* eslint-disable react/prop-types */

import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"


const medicinesTitle =[["حديد","هيبارين","ايبوتين"],["#31357e","#4849e3","#c8d5fd"]]
const causeRenalFailureTitle =[["داء السكري","أمراض قلبية","ضغط الدم", "أمراض أخرى"],["#c9a05b" , "#ddc994" ,"#a43939","#116e41"]]


const PieCharts = ({ causeRenalData, medicineData}) => {
  
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
    
    return (
    <div  className="mx-[10%] mt-10">
 
        <div className={`flex flex-row-reverse justify-between  `}>
        <div className={`shadow-lg w-[40%]`}>
        <p dir="rtl"className="bg-white px-5 py-3 text-lg font-bold"> نسب أسباب القصور الكلوي</p>  
        {<PieChart title = {causeRenalFailureTitle} data = {causeRenalFailure} />} 
        </div>
            <div className="shadow-lg w-[40%] ">
            <p dir="rtl"className="bg-white px-5 py-3 text-lg  font-bold">نسب استهلاك الأدوية </p> 
                <PieChart title = {medicinesTitle} data = {medicines}/>
            </div>
    </div>
</div>
)
}

export default PieCharts

