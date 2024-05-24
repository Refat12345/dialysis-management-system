/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { PatientProfileNav } from "../../../../components/index";
import { usePatientProfileState } from "./PatientProfileState";

const PatientProfilePage = () => {
  const { state } = usePatientProfileState();

  return (
    <div className="w-full flex flex-col lg:mr-56 md:mr-56 pl-6">
      <PatientProfileNav />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default PatientProfilePage;
