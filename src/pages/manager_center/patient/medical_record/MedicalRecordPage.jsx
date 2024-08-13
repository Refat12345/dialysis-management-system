/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { AlertDialog, HealthInformation, NavItemRecord, PageLoader, Text } from "../../../../components";
import { healthInformation } from "../../../../data/data";
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg";
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg";
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg";
import { useGetMedicalRecordQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie"
import HealthInformationDialog from "./sections/HealthInformationDialog";

const precedents = [
  {
    name: "السوابق المرضية",
    path: "pathologicalHistory",
    icon: PathologicalIcon
  },
  {
    name: "السوابق الجراحية",
    path: "surgicalHistory",
    icon: SurgicalIcon
  },
  {
    name: "السوابق الدوائية",
    path: "pharmacologicalHistory",
    icon: PharmacologicalIcon
  }
];

const MedicalRecordPage = () => {
  const { patientName } = useParams();

  const id = useMemo(() => patientName, [patientName]);
  

  const { data, isSuccess, isLoading,isError } = useGetMedicalRecordQuery(id);

  const medicalRecord = useMemo(() => isSuccess ? data.medicalRecord : null, [isSuccess, data]);


  if (isLoading) {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="mr-48">
            <PageLoader />
          </div>
        </div>
    );}

if(isError || !isSuccess) {
    return (
      <Text text={"خطأ بجلب البيانات أعد المحاولة من فضلك "}/>
    );
}
if(medicalRecord === "لا يوجد سجل طبي لهذاالمريض") {
  return <Text text={"لا يوجد سجل طبي لهذا المريض"}/>
}
  return (
    <div className="flex-grow">
      <>
          {Cookies.get("role") != "secretary" ?<HealthInformation title={healthInformation} information={medicalRecord} /> : <AlertDialog renderComponent={<div className="hover:cursor-pointer">
            <HealthInformation title={healthInformation} information={medicalRecord} />
          </div>}
          contentComponent={<HealthInformationDialog medicalRecord={medicalRecord} />}/>}
          <div dir="rtl" className="bg-primaryColor ml-[1%] mt-[4%] p-6 shadow-lg rounded-lg overflow-y-auto">
            <NavItemRecord array={precedents} />
            <Outlet context={medicalRecord} />
          </div>
      </>
    </div>
  );
}

export default MedicalRecordPage;
