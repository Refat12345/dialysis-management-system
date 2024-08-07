import { useState } from "react";
import { usePatient } from "../../../pages/manager_center/patient/patient_list/PaitientListState";
import { useNavigate } from "react-router-dom";

const GetUnAcceptedPatient = () => {
  const navigate = useNavigate();
  const { isSuccessUnAccepted, isLoadingUnAccepted, patientUnAcceptedData } =
    usePatient();

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

  // const handleCardClick = (patient) => {
  //   navigate(`/app/patient/${patient.id}/addPatientInfo`);
  // };

  const handleIconClick = (event, patient) => {
    event.stopPropagation(); 
    setSelectedPatient(patient);
    setShowDropdown(!showDropdown);
  };

  const handleAddGeneralInfo = () => {
    navigate(`/app/patient/${selectedPatient.id}/addPatientInfo`);
    setShowDropdown(false);
  };

  const handleAddMedicalRecord = () => {
    navigate(`/app/patient/${selectedPatient.id}/addMedicalRecord`);
    setShowDropdown(false);
  };

  return (
    <>
      {isSuccessUnAccepted && !isLoadingUnAccepted && patientUnAcceptedData && (
        <div
          dir="rtl"
          className="w-full flex flex-col lg:mr-48 md:mr-48 h-screen bg-bgDashboard "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {patientUnAcceptedData.map((patient) => (
              <div
                key={patient.id}
                className=" rounded-lg  overflow-hidden shadow-lg p-4 bg-white cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out relative"
                // onClick={() => handleCardClick(patient)}
              >
                <svg
                  className="h-5 w-5 text-green-500 mb-3 absolute top-2 left-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(event) => handleIconClick(event, patient)}
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" transform="rotate(90 5 12)" />
                  <circle cx="19" cy="12" r="1" transform="rotate(90 19 12)" />
                </svg>

                {showDropdown && selectedPatient === patient && (
                  <div className="absolute top-8 left-8 bg-white shadow-lg rounded-md p-2">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleAddGeneralInfo}
                    >
                      إضافة المعلومات العامة
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleAddMedicalRecord}
                    >
                      إضافة السجل الطبي
                    </div>
                  </div>
                )}



                <div className="font-bold text-xl mb-2 text-blue-600">
                  {patient.fullName}
                </div>
                <p className="text-gray-700 text-base">
                  الحالة:{" "}
                  <span className="font-semibold">{patient.accountStatus}</span>
                </p>
                <p className="text-gray-700 text-base">
                  الجنس: <span className="font-semibold">{patient.gender}</span>
                </p>
                <p className="text-gray-700 text-base">
                  الدور: <span className="font-semibold">{patient.role}</span>
                </p>
                <p className="text-gray-700 text-base">
                  المدينة: <span className="font-semibold">{patient.city}</span>
                </p>
                <p className="text-gray-700 text-base">
                  العمر: <span className="font-semibold">{patient.age}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GetUnAcceptedPatient;
