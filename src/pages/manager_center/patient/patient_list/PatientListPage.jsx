import { SideBar } from "../../../../components";
import Patient from "../../../../components/manager_center/patient/Patient";
import { adminSideBar } from "../../../../data/data";

const PatientListPage = () => {
  return (
    <div>
      <SideBar sideBarData={adminSideBar} />
      <Patient/>
    </div>
  );
};

export default PatientListPage;
