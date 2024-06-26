/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { AlertDialog, HealthInformation, NavItemRecord, PageLoader } from "../../../../components";
import { healthInformation } from "../../../../data/data";
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg";
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg";
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg";
import { useGetMedicalRecordQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { useMemo } from "react";
import { useMedicalRecordState } from "./MedicalRecordState";
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
  const id = sessionStorage.getItem("patientId");
  const { data, isSuccess, isLoading,isError } = useGetMedicalRecordQuery(id);

  const medicalRecord = useMemo(() => isSuccess ? data.medicalRecord : null, [isSuccess, data]);


  if (isLoading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <PageLoader />
        </div>
    );}

if(isError || !isSuccess) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-2xl">خطأ بجلب البيانات أعد المحاولة من فضلك </p>
      </div>
    );
}
if(medicalRecord === "لا يوجد سجل طبي لهذاالمريض") {
  return <div className="flex items-center justify-center h-screen">
      <p className="font-bold text-2xl">لا يوجد سجل طبي لهذا المريض</p>
  </div>
}
  return (
    <div className="flex-grow">
      <>
          {Cookies.get("role") === "admin" ?<HealthInformation title={healthInformation} information={medicalRecord} /> : <AlertDialog renderComponent={<div className="hover:cursor-pointer">
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
