/* eslint-disable no-unused-vars */
import { PublicHeader ,CustomButton  } from "../../../../components"
import { useLocation, useParams } from "react-router-dom";
import { MedicalRecord } from "../../../../assets"
import {PublicInformation ,PathologicalPrecedents,SurgicalPrecedents,PharmacologicalPrecedents} from "./sections/index"
import { useEnterMedicalRecordState } from "./EnterMedicalRecordState";
import "./style.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateMedicalRecordMutation } from "../../../../services/secretariat/patient_profile/AddPatientProfileSlice";
import ButtonLoader from "../../../../components/public/loader/ButtonLoader";

const EnterMedicalRecordPage = () => {
const { state , updateState } = useEnterMedicalRecordState();
const location = useLocation();
const dataReceived = location.state;
const [createMedicalRecord , {data,isError,isSuccess,isLoading  ,error:err}] = useCreateMedicalRecordMutation();
let { patientName } = useParams();
let status=true

const handlePost =async () => {
  let body =state.postData(state , patientName);
  if(body != undefined) {
  try{
    await createMedicalRecord(body).unwrap();
    toast.success("تم اضافة السجل الطبي بنجاح");
    updateState({
      causeRenalFailure: "",
      bloodType: "",
      dryWeight: "",
      dialysisStartDate:null,
      kidneyTransplant:"",
      vascularEntrance:"",
      errors:{},
      surgicalPrecedents: [
        {
          surgeryName: "",
          surgeryDate: null,
          generalDetails: "",
        }
      ],
      pathologicalPrecedents: [
        {
          illnessName: "",
          medicalDiagnosisDate: null,
          generalDetails: "",
        }
      ],
      pharmacologicalPrecedents: [
        {
          medicineName: "",
          dateStart: null,
          dateEnd: null,
          generalDetails:""
        }
        
      ],})
  }catch(error) {    
    toast.error(error.data.error)
  }
  }
}

  return (
    <div dir="rtl" className="parent flex-grow  h-screen bg-bgMedicalRecord">
        <div className="md:mr-48 bg-bgMedicalRecord">
            <div className="mx-[1.5%]">
              <ToastContainer position="top-right"/>
                <PublicHeader  title={"السجل الطبي"} icon={MedicalRecord} bool={true} name={dataReceived.name} />
                
                <PublicInformation state={state} updateState={updateState}/>
                {/* <PathologicalPrecedents state={state} updateState={updateState}/> */}
                <div className="element"></div>
                <div className="flex justify-between ">
                <SurgicalPrecedents state={state} updateState={updateState}/>
                <PathologicalPrecedents state={state} updateState={updateState}/>
                {/* <PharmacologicalPrecedents state={state} updateState={updateState}/> */}
                </div>
                <div className="mgButton"></div>
            <div className="flex justify-end ">
            {!isLoading ? <div>
              <CustomButton
              variant="solid"
              onClick={handlePost}
              className={` bg-bgbutton text-white h-8  font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110 `}
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
            </div>:<ButtonLoader/>}
            </div>
            </div> 
        </div>
    </div>
  )
}

export default EnterMedicalRecordPage


