import { PatientProfileNav } from "../../../../components/index";
import { usePatientProfileState } from "./PatientProfileState";

const PatientProfilePage = () => {
  const { state, updateState } = usePatientProfileState();

  return (
    <div className="w-full flex">
      <PatientProfileNav />
      <div className="mt-80">{state.activeItem}</div>
    </div>
  );
};

export default PatientProfilePage;
