import { MedicalAnalysis } from "../../../../components"
import Header from "./sections/Header"

import { useGetMedicalAnalysisQuery } from "../../../../services/patient_profile/medical_analysis/MedicalAnalysisSlice"
const MedicalAnalysisPage = () => {
    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"]
    const {data,isSuccess} = useGetMedicalAnalysisQuery(2);
    return (
        isSuccess &&  <div dir="rtl" className="flex-grow">
            
        <div className="ml-[1%]">
            <Header/>
            <div className="analysis">
                {data.analysis.map((analysis,index)=>{
                    return <MedicalAnalysis key={index} title={title} analysis={analysis}/>   
                })}
            </div>
        </div>
</div>
)
}

export default MedicalAnalysisPage