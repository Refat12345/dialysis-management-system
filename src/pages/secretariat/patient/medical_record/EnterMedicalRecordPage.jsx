import { PublicHeader } from "../../../../components"
import { MedicalRecord } from "../../../../assets"
import PublicInformation from "./sections/PublicInformation"
import { useEnterMedicalRecordState } from "./EnterMedicalRecordState";
import PathologicalPrecedents from "./sections/PathologicalPrecedents";
import SurgicalPrecedents from "./sections/SurgicalPrecedents";
import PharmacologicalPrecedents from "./sections/PharmacologicalPrecedents";
import "./style.css"
const EnterMedicalRecordPage = () => {
  const { state , updateState } = useEnterMedicalRecordState();
  return (
    <div dir="rtl" className="flex-grow bg-bgMedicalRecord h-screen">
        <div className="md:mr-48">
            <div className="mx-[2%]">
                <PublicHeader  title={"السجل الطبي"} icon={MedicalRecord} bool={true} />
                <div className="flex justify-between">
                <PublicInformation state={state} updateState={updateState}/>
                <PathologicalPrecedents state={state} updateState={updateState}/>
                </div>
                <div className="element"></div>
                <div className="flex justify-between ">
                <SurgicalPrecedents state={state} updateState={updateState}/>
                <PharmacologicalPrecedents state={state} updateState={updateState}/>
                </div>
  
            </div>
        </div>
    </div>
  )
}

export default EnterMedicalRecordPage