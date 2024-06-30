/* eslint-disable no-unused-vars */
import { PublicHeader ,CustomButton , Toast } from "../../../../components"
import { useParams } from "react-router-dom";
import { MedicalRecord } from "../../../../assets"
import {PublicInformation ,PathologicalPrecedents,SurgicalPrecedents,PharmacologicalPrecedents} from "./sections/index"
import { useEnterMedicalRecordState } from "./EnterMedicalRecordState";
import "./style.css"
import { toast } from 'react-toastify';
import { textToastStyle ,textErrorToastStyle } from "../../../../data/data";
import 'react-toastify/dist/ReactToastify.css';
import { useCreateMedicalRecordMutation } from "../../../../services/secretariat/patient_profile/AddPatientProfileSlice";
import ButtonLoader from "../../../../components/public/loader/ButtonLoader";

const EnterMedicalRecordPage = () => {
const { state , updateState } = useEnterMedicalRecordState();
const [createMedicalRecord , {data,isError,isSuccess,isLoading  ,error}] = useCreateMedicalRecordMutation();
let { patientName } = useParams();
let status=true

const handlePost =async () => {
  let body =state.postData(state , patientName);
  try{
    await createMedicalRecord(body).unwrap();
    console.log(isError);
    toast("تم اضافة السجل الطبي بنجاح");

  }catch(error) {
    status = false
    toast.error("ليست لديك صلاحيات لاضافة السجل الطبي")
    console.log(error);
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
            {!isLoading ? <div>
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
            
            </div>:<ButtonLoader/>}
            <Toast textStyle={status ? textToastStyle :textErrorToastStyle} progressColor={"white"}/>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default EnterMedicalRecordPage








