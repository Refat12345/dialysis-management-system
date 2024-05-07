import { MedicalAnalysis } from "../../../../components"
import Header from "./sections/Header"
import {analysis} from "../../../../data/data"
const MedicalAnalysisPage = () => {
    const title = ["اسم التحليل", "القيمة", "تاريخ أخذ التحليل", "ملاحظات"]

    return (
    <div dir="rtl" className="flex-grow  mr-52 mt-16">
            
            <div className="ml-[7%]">
                <Header/>
                <div className="analysis">
                    {analysis.map((ana,index)=>{
                        return <>
                                <MedicalAnalysis key={index} title={title} data={ana}/>
                                <div className="mb-4"></div>
                        </>
                    })}
                </div>
            </div>
    </div>
)
}

export default MedicalAnalysisPage