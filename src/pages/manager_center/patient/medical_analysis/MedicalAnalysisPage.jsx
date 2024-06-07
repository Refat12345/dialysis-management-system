/* eslint-disable react-hooks/exhaustive-deps */
import { MedicalAnalysis } from "../../../../components"
import Header from "./sections/Header"
import { analysisData } from "../../../../data/data"
import { useEffect, useState } from "react"
const MedicalAnalysisPage = () => {
    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"]
    const [analysis,setAnalysis] = useState([])
    const [filterAnalysis,setFilterAnalysis] =useState([])
    const [filters,setFilters] = useState({
        type:"",
        date:"",
        quarter:""
    })
    useEffect(()=>{
        setAnalysis(analysisData.analysis)
    },[analysis])
    useEffect(()=>{
        setFilterAnalysis(analysisData.analysis)
    },[analysis])


    useEffect(() => {
        let filteredAnalysis = analysis;
        if (filters.type !== "") {
            filteredAnalysis = filters.type === "نوع التحليل" ? filteredAnalysis: filteredAnalysis.filter(
                ana => ana.analysisName.includes(filters.type)
            )
        }
        if (filters.date !== "") {
            filteredAnalysis = filters.date === "الشهر" ? filteredAnalysis:filteredAnalysis.filter(
                ana => {
                    return ana.analysisDate.includes(filters.date)
                }
            )
        }
        if (filters.quarter !== "") {
            filteredAnalysis = filters.quarter === " الربع" ? filteredAnalysis:filteredAnalysis.filter(
                ana => ana.quarter.includes(filters.quarter)
            )
        }

        setFilterAnalysis(filteredAnalysis)
    }, [filters])

    return (
        <div dir="rtl" className="flex-grow">    
        {analysis.length > 1 && <div className="ml-[1%]">
            <Header value={filters} setFilters = {setFilters}/>
            <div className="analysis">
                {filterAnalysis.map((analysis,index)=>{
                    return <MedicalAnalysis key={index} title={title} analysis={analysis}/>   
                })}
            </div>
        </div>}
</div>
)
}

export default MedicalAnalysisPage