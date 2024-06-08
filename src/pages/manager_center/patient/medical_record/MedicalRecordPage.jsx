/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { HealthInformation, NavItemRecord, PageLoader } from "../../../../components";
import { healthInformation } from "../../../../data/data";
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg";
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg";
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg";
import { useGetMedicalRecordQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { useMemo } from "react";

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
  const { data, isSuccess, isLoading,isError } = useGetMedicalRecordQuery(16);

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
            <p>خطأ بجلب البيانات </p>
        </div>
    );
}
  return (
    <div className="flex-grow">
      <>
          <HealthInformation title={healthInformation} information={medicalRecord} />
          <div dir="rtl" className="bg-primaryColor ml-[1%] mt-[4%] p-6 shadow-lg rounded-lg overflow-y-auto">
            <NavItemRecord array={precedents} />
            <Outlet  medicalRecordData={medicalRecord} />
          </div>
      </>
    </div>
  );
}

export default MedicalRecordPage;
