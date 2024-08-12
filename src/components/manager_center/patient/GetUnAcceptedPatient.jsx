import { useState } from "react";
import { usePatient } from "../../../pages/manager_center/patient/patient_list/PaitientListState";
import { useNavigate } from "react-router-dom";
import patientt from "./../../../assets/icons/medical-center/users/users-list/nurseMan.svg"
import PageLoader from "../../public/loader/PageLoader";
import { useUnAccepectedPatient } from "../../../pages/manager_center/patient/UnAccepectedPatient";
const GetUnAcceptedPatient = () => {
  const navigate = useNavigate();
  const { isSuccessUnAccepted, isLoadingUnAccepted, patientUnAcceptedData } =
    useUnAccepectedPatient();

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

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
    navigate(`/app/patient/${selectedPatient.id}/enterMedicalRecord`);
    setShowDropdown(false);
  };

  if (isLoadingUnAccepted)
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );

    if (!patientUnAcceptedData.length ) return <div>No data available</div>;

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

                {/* <div className="font-bold text-xl mb-2 text-blue-600">
                  {patient.fullName}
                </div> */}
                <div className="font-bold text-xl mb-2 text-blue-600 flex items-center">
  <img
    src={patientt}     
    
    className="h-9 w-9 rounded-full ml-2"
  />
    <span>{patient.fullName}</span>

</div>

                <p className="text-gray-700 text-base">
                  الجنس: <span className="font-semibold">{patient.gender}</span>
                </p>
                <p className="text-gray-700 text-base">
                  الدور: <span className="font-semibold">{"مريض"}</span>
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
