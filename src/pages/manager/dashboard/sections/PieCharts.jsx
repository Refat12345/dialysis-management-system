/* eslint-disable react/prop-types */

import { DropDown } from "../../../../components";
import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"


const medicinesTitle =[["حديد","هيبارين","ايبوتين"],["rgba(181, 131, 65, 1)","rgba(212, 183, 124, 1)","rgba(90, 139, 176, 1)"]]
const causeRenalFailureTitle =[["أمراض قلبية","ضغط الدم","داء السكري", "أمراض أخرى"],[  "rgba(237, 106, 94, 1)" ,"rgba(140, 73, 67, 1)","rgba(17, 110, 65, 1)","rgba(46, 48, 125, 0.25)"]]


const PieCharts = ({ causeRenalData, medicineData ,date,setValue}) => {
  
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
const filters = [{
    title:date.month === "" ? "الشهر":date.month,
    array:["1","2","3","4","5","6","7","8","9","10","11","12",]
},{
    title:date.year === ""?"السنة":date.year,
    array:["2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036"]
}
]

const colors = {
    titleColor: "primaryColor",
    contentColor: "bgButtonColor",
    textColor: "textMenuColor",
}

    return (
    <div  className="mx-[1%] md:mx-[2%] lg:mx-[6%] xl:mx-[10%] mt-10">
        <div  className="flex mb-2">
        <div className="w-[20%]">
        <DropDown colors={colors} filter={filters[0].array} title={filters[0].title} onSelect={(val)=>{
                setValue({...date,month:val})
        }}/>
        </div>
        <div className="w-[20%]">
        <DropDown colors={colors} filter={filters[1].array} title={filters[1].title} onSelect={(val)=>{
                setValue({...date,year:val})
        }}/>
        </div>
        </div>
        <div className={`flex justify-between  `}>
        <div className={`shadow-lg w-[45%] xl:w-[40%]  `} style={{ height: 'calc(100vh - 73vh)' }}>
        <p dir="rtl"className="bg-white px-5 py-3 text-lg font-bold"> نسب أسباب القصور الكلوي</p>  
        {<PieChart title = {causeRenalFailureTitle} data = {causeRenalFailure} />} 
        </div>
            <div className="shadow-lg w-[45%] xl:w-[40%] " style={{ height: 'calc(100vh - 73vh)' }}>
            <p dir="rtl"className="bg-white px-5 py-3 text-lg font-bold">نسب استهلاك الأدوية </p> 
                <PieChart title = {medicinesTitle} data = {medicines}/>
            </div>
            
    </div>
</div>
)
}

export default PieCharts

