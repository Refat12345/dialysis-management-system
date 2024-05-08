/* eslint-disable no-unused-vars */
import { PatientProfileNav } from "../../../../components/index";
import { usePatientProfileState } from "./PatientProfileState";

const PatientProfilePage = () => {
  const { state } = usePatientProfileState();

  return (
    <div className="w-full flex flex-col mr-36 pl-6">
      <PatientProfileNav />
      <div className="w-full">{state.selectScreen(state.activeItem)}</div>
    </div>
  );
};

export default PatientProfilePage;
