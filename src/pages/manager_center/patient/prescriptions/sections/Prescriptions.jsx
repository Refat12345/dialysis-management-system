/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Medicine } from "../../../../../components"

const Prescriptions = ({prescriptions ,height}) => {

    const title = {
        name:"اسم الدواء",
        startDate:"تاريخ بدء أخذ الدواء",
        endDate :"تاريخ نهاية أخذ الدواء",
        note:"تعليمات عن الدواء"
    }

    const responsive = height > 600 ? ( height > 700 ? "mb-5" : "mb-3" ) : "mb-1";

  return (
    <div className ={` bg-cardDetailsColor p-4 pb-1 pt-6  shadow-inner shadow-gray-200 rounded-lg ${responsive}`}>
        {prescriptions.medicines.map((medicine,index)=>{
            return <Medicine key={index} title={title} medicine ={medicine} doctor={prescriptions.doctor}/>
    
        })}
    </div>
  )
}

export default Prescriptions