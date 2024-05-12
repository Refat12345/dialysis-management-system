/* eslint-disable react/prop-types */
import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"


  const medicinesTitle =[["حديد","هيبارين","ايبوتين"],["#31357e","#4849e3","#c8d5fd"]]
  const causeRenalFailureTitle =[["داء السكري","أمراض قلبية","ضغط الدم"],["#c9a05b" , "#ddc994" ,"#a43939"]]


const PieCharts = ({data}) => {
  
  const medicines = [
    { id: 0, value: data.medicines.iron, label:medicinesTitle[0][0]},
    { id: 1, value: data.medicines.heparin , label: medicinesTitle[0][1]  },
    { id: 2, value: data.medicines.epoetin, label: medicinesTitle[0][2]},
  ];
  const causeRenalFailure = [
    { id: 0, value: data.causeRenalFailure.diabetes, label:causeRenalFailureTitle[0][0]},
    { id: 1, value: data.causeRenalFailure.heartDiseases , label: causeRenalFailureTitle[0][1]  },
    { id: 2, value: data.causeRenalFailure.bloodPressure, label: causeRenalFailureTitle[0][2]},
  ];

  return (
    <>
    <div className="mt-14 ml-[10%]">
        <div className="shadow-lg  ">
          <PieChart title = {medicinesTitle} data = {medicines}/>
        </div>
        <div className={`shadow-lg ${window.innerHeight>700 ?"mt-7":"mt-5"}`}>
          <PieChart title = {causeRenalFailureTitle} data = {causeRenalFailure} />
        </div>
    </div>
</>
  )
}

export default PieCharts

