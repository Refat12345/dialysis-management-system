import { PatientProfileNav } from "../../../../components/index";
import { usePatientProfileState } from "./PatientProfileState";

const PatientProfilePage = () => {
  const { state } = usePatientProfileState();

  return (
    <div className="w-full flex flex-col mr-52 px-6">
      <PatientProfileNav />
      <div className="w-full">
        {state.activeItem}
      </div>
    </div>
  );
};

export default PatientProfilePage;
