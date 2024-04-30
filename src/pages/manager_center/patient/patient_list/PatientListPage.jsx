import { SideBar } from "../../../../components";
import { adminSideBar } from "../../../../data/data";

const PatientListPage = () => {
  return (
    <div>
      <SideBar sideBarData={adminSideBar} />
      PatientListPage
    </div>
  );
};

export default PatientListPage;
