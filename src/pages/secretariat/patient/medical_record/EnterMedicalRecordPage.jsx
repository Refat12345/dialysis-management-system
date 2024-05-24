/* eslint-disable no-unused-vars */
import { PublicHeader ,CustomButton } from "../../../../components"
import { MedicalRecord } from "../../../../assets"
import {PublicInformation ,PathologicalPrecedents,SurgicalPrecedents,PharmacologicalPrecedents} from "./sections/index"
import { useEnterMedicalRecordState } from "./EnterMedicalRecordState";
import "./style.css"
import { useCreateMedicalRecordMutation } from "../../../../services/secretariat/medical_record/EnterMedicalRecordSlice";

const EnterMedicalRecordPage = () => {

const { state , updateState } = useEnterMedicalRecordState();
const [createMedicalRecord,{isError}] = useCreateMedicalRecordMutation();
const object = {
  vascularEntrance :state.vascularEntrance,
  bloodType:state.bloodType,
  dryWeight:state.dryWeight,
  dialysisStartDate:state.dialysisStartDate,
  kidneyTransplant:state.kidneyTransplant,
  causeRenalFailure:state.causeRenalFailure,
  surgicalPrecedents:state.surgicalPrecedents,
  pathologicalPrecedents:state.pathologicalPrecedents,
  pharmacologicalPrecedents:state.pharmacologicalPrecedents
}

const handlePost = async () => {
  try {
    await createMedicalRecord({ss:"sad"})
  }catch(err) {
    console.log("S");
    console.error(+err)
  }
  
}

  return (
    <div dir="rtl" className="parent flex-grow  h-screen bg-bgMedicalRecord">
        <div className="md:mr-48 bg-bgMedicalRecord">
            <div className="mx-[1.5%]">
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
                <div className="mgButton"></div>
            <div className="flex justify-end ">
            <CustomButton
              variant="solid"
              onClick={handlePost}
              className={` bg-bgbutton text-white h-8 transition-all font-bold text-md hover:cursor-pointer  `}
              title={
                <div className="flex items-center justify-center">
                  <span className={``}>
                    إضافة السجل
                  </span>
                  <div className="lg:w-2 md:w-2 w-1"></div>
                </div>
              }
              radius="full"
            />
            </div>
            </div> 
        </div>
    </div>
  )
}

export default EnterMedicalRecordPage








