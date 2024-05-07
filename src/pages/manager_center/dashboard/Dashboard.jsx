/* eslint-disable no-unused-vars */
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent } from "../../../components/index";
import { sessions } from "../../../data/data";

const Dashboard = () => {
  const height = window.innerHeight;
  return (
    <div  className="flex-grow md:mr-52 bg-bgDashboard">
      <Cards />
      <div className={`flex flex-row-reverse justify-between ${height>700 ?"mt-7":"mt-5"}`}>
                  <div  className="flex flex-col  md:w-7/12 ">
                        <PaginationComponent data={sessions} RenderComponent={DialysisSessions} itemsPerPage={height>600?(height>760?(height>830?8:7):6):5}/>
                  </div> 
                  <div className="hidden lg2:block w-1/3">
                       <PieCharts/>
                  </div>
            </div>
    </div>
  );
};
export default Dashboard;



