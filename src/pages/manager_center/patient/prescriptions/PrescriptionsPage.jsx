import Prescriptions from "./sections/Prescriptions";
import { useEffect, useState, useMemo } from "react";
import { PublicLoader, Text } from "../../../../components";
import { useGetPrescriptionsQuery } from "../../../../services/public/patient_profile/ShowPatientProfileSlice";
import { useParams } from "react-router-dom";
const PrescriptionsPage = () => {
  const height = window.innerHeight;
  const { patientName } = useParams();
  const id = useMemo(() => patientName, [patientName]);
  const { data, isSuccess, isLoading, isError } = useGetPrescriptionsQuery(id);
  const [prescriptions, setPrescriptions] = useState([]);
  

  useEffect(() => {
    if (isSuccess && data?.prescriptions) {
      setPrescriptions(data.prescriptions);
    }
  }, [isSuccess, data]);

  const headerMarginClass = useMemo(() => {
    if (height > 700) {
      return "mb-6";
    } else if (height > 600) {
      return "mb-4";
    } else {
      return "mb-2";
    }
  }, [height]);

  if (isLoading) {
    return (
        <PublicLoader/>
    );}

if(isError || !isSuccess) {
    return (
        <Text text={"خطأ بجلب البيانات أعد المحاولة من فضلك"}/>
    );
}

if (isSuccess && prescriptions.length === 0) {
  return (
      <Text text={"لا يوجد وصفات طبية لهذا المريض"}/>
  );}

  return (
    <div className="flex-grow">
        <div dir="rtl" className="prescriptions ml-[1%]">
            <p className={`text-titleSideColor text-2xl font-primaryBold ${headerMarginClass}`}>
              الوصفات الطبية
            </p>
            {prescriptions.map((prescription, index) => (
              <Prescriptions key={index} prescriptions={prescription} height={height} />
            ))}
          </div>
    </div>
  );
};

export default PrescriptionsPage;
