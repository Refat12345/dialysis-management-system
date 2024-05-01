import { SideBar } from "../../../../components";
import { managerCenterSideBar } from "../../../../data/data";

const PatientListPage = () => {
  return (
    <div>
      <SideBar sideBarData={managerCenterSideBar} />
      PatientListPage
    </div>
  );
};

export default PatientListPage;
