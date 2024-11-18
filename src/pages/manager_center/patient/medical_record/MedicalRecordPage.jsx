/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { HealthInformation, NavItemRecord, PageLoader, PublicLoader, Text } from "../../../../components";
import { healthInformation } from "../../../../data/data";
import PharmacologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pharmacological-Icon.svg";
import PathologicalIcon from "../../../../assets/icons/medical-center/medical_record/Pathological-Icon.svg";
import SurgicalIcon from "../../../../assets/icons/medical-center/medical_record/Surgical-Icon.svg";
import { useGetMedicalRecordQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { useMemo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import HealthInformationDialog from "./sections/HealthInformationDialog";
import { ToastContainer } from "react-toastify";
import PublicDialog from "../../../../components/public/dialog/AlertDialog";

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
  // {
  //   name: "السوابق الدوائية",
  //   path: "pharmacologicalHistory",
  //   icon: PharmacologicalIcon
  // }
];

const MedicalRecordPage = () => {
  const { patientName, status } = useParams();
  const id = useMemo(() => patientName, [patientName]);
  const { data, isSuccess, isLoading, isError } = useGetMedicalRecordQuery(id);
  const medicalRecord = useMemo(() => isSuccess ? data.medicalRecord : null, [isSuccess, data]);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = useCallback(() => {
    if (status === "acceptable") {
      setOpen(true);
    }
  }, [status]);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching medical record");
    }
  }, [isError]);

  if (isLoading) {
    return <PublicLoader />;
  }

  if (isError || !isSuccess) {
    return <Text text={"خطأ بجلب البيانات أعد المحاولة من فضلك "} />;
  }

  if (medicalRecord === "لا يوجد سجل طبي لهذاالمريض") {
    return <Text text={"لا يوجد سجل طبي لهذا المريض"} />;
  }

  return (
    <div className="flex-grow">
      <>
        <ToastContainer position="top-right" />
        {Cookies.get("role") !== "secretary" ? (
          <HealthInformation title={healthInformation} information={medicalRecord} />
        ) : (
          <>
            <div onClick={handleOpenDialog} className={`${status === "acceptable" && "hover:cursor-pointer"}`}>
              <HealthInformation title={healthInformation} information={medicalRecord} />
            </div>
            <PublicDialog component={<HealthInformationDialog medicalRecord={medicalRecord} setOpen={setOpen} />} open={open} setOpen={setOpen} />
          </>
        )}
        <div dir="rtl" className="bg-primaryColor ml-[1%] mt-[4%] p-6 shadow-lg rounded-lg overflow-y-auto">
          <NavItemRecord array={precedents} />
          <Outlet context={medicalRecord} />
        </div>
      </>
    </div>
  );
};

export default MedicalRecordPage;
