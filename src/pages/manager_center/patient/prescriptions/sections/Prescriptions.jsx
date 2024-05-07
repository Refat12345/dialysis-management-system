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
  return (
    <div className="bg-primaryColor p-4 pb-1 shadow-inner shadow-gray-200 rounded-lg">
        {prescriptions.map((medicine,index)=>{
            return <>
                    <Medicine key={index} title={title} data ={medicine} />
                    <div className={`${height>600?(height>700?"mb-6":"mb-4"):"mb-2"}`}></div>
            </>
        })}
    </div>
  )
}

export default Prescriptions