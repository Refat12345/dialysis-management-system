import { useState } from "react";
import { usePatient } from "../../../pages/manager_center/patient/patient_list/PaitientListState";
import { useNavigate } from "react-router-dom";

const GetUnAcceptedPatient = () => {
    const navigate = useNavigate();

  const { isSuccessUnAccepted, isLoadingUnAccepted, patientUnAcceptedData } = usePatient();
  console.log(isSuccessUnAccepted);
    const handleCardClick = (patient) => {
    navigate(`/app/patient/${patient.id}/addPatientInfo`);
      };

  return (
    <>
        {isSuccessUnAccepted && !isLoadingUnAccepted && patientUnAcceptedData && (
        <div
          dir="rtl"
          className="w-full flex flex-col lg:mr-48 md:mr-48 h-screen bg-bgDashboard"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {patientUnAcceptedData.map((patient) => (
              <div
                key={patient.id}
                className="rounded overflow-hidden shadow-lg p-4 bg-white cursor-pointer"
                onClick={() => handleCardClick(patient)}
              >
                <div className="font-bold text-xl mb-2">{patient.fullName}</div>
                <p className="text-gray-700 text-base">
                  الحالة: {patient.accountStatus}
                </p>
                <p className="text-gray-700 text-base">
                  الجنس: {patient.gender}
                </p>
                <p className="text-gray-700 text-base">الدور: {patient.role}</p>
                <p className="text-gray-700 text-base">
                  المدينة: {patient.city}
                </p>
                <p className="text-gray-700 text-base">العمر: {patient.age}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GetUnAcceptedPatient;
