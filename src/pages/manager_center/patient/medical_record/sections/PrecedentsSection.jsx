/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CardRecord } from "../../../../../components/index";
import { useOutletContext } from 'react-router-dom';
const PrecedentsSection = ({title,type}) => {
    const [precedents,setPrecedents] = useState([])
    const medicalRecord = useOutletContext();
   useEffect(()=>{
    if(type === "surgical") {
        medicalRecord.surgicalPrecedents != undefined && setPrecedents(medicalRecord.surgicalPrecedents)
    } else if(type === "pathological"){
        medicalRecord.pathologicalPrecedents != undefined && setPrecedents(medicalRecord.pathologicalPrecedents)
    } else {
        medicalRecord.pharmacologicalPrecedents != undefined &&  setPrecedents(medicalRecord.pharmacologicalPrecedents)
    }
   },[type,medicalRecord])
    return (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {precedents.map((data,index)=>{
                    return <CardRecord key={index} object = {data} title={title}/>
                    
                })}
                </div>
)
}

export default PrecedentsSection