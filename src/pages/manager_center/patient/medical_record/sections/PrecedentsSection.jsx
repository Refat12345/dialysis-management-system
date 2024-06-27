/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AlertDialog, CardRecord } from "../../../../../components/index";
import { useOutletContext } from 'react-router-dom';
import PrecedentsDialog from "./PrecedentsDialog"
import Cookies from "js-cookie"
const PrecedentsSection = ({title , type}) => {
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
                    return Cookies.get("role") === "secretary" ? <AlertDialog key={index}
                        contentComponent={ <PrecedentsDialog type = {type} index={index} key={index}/> } renderComponent={<div className="hover:cursor-pointer">
                            <CardRecord key={index} object = {data} title={title}/>
                        </div>} 
                    /> : <CardRecord key={index} object = {data} title={title}/>
                })}
                </div>
)
}

export default PrecedentsSection