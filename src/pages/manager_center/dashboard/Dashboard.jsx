/* eslint-disable no-unused-vars */
import { Cards, PieCharts, DialysisSessions } from "../../index";

import { SideBar, PaginationComponent } from "../../../components/index";
import { managerCenterSideBar } from "../../../data/data";
import { sessions } from "../../../data/data";

const Dashboard = () => {
  return (
    <div className="flex-grow mr-52">
      <Cards />
      <div className="flex flex-row-reverse justify-between mt-6">
        <div className="flex flex-col md:w-7/12 ">
          <PaginationComponent
            data={sessions}
            RenderComponent={DialysisSessions}
            itemsPerPage={6}
          />
        </div>
        <div className="hidden xl:block">
          <PieCharts />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
