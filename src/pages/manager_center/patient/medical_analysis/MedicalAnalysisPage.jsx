import { MedicalAnalysis } from "../../../../components"
import Header from "./sections/Header"
import {analysis} from "../../../../data/data"
const MedicalAnalysisPage = () => {
    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"]

    return (
    <div dir="rtl" className="flex-grow">
            
            <div className="ml-[1%]">
                <Header/>
                <div className="analysis">
                    {analysis.map((ana,index)=>{
                        return <MedicalAnalysis key={index} title={title} data={ana}/>
                                
                      
                    })}
                </div>
            </div>
    </div>
)
}

export default MedicalAnalysisPage