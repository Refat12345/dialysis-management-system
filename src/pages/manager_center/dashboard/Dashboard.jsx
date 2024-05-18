/* eslint-disable no-unused-vars */
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent } from "../../../components/index";
import { data ,pieChartData } from "../../../data/data";
const Dashboard = () => {
  let height = window.innerHeight;

  const itemsPerPage = height > 599 ?( height > 819 ? 7 : 6 ) : 5



  return (
    <div  className="flex-grow md:mr-48 bg-bgDashboard h-screen">
    <Cards/>
    <div className={`flex flex-row-reverse justify-between ${height>700 ?"mt-7":"mt-5"}`}>
                <div  className="flex flex-col  md:w-7/12 ">
                      <PaginationComponent data={data.dialysisSessions} RenderComponent={DialysisSessions} itemsPerPage={itemsPerPage} type={"dashboard"}/>
                </div> 
                <div className="hidden lg2:block w-1/3">ٍ
                    <PieCharts data = {pieChartData} />
                </div>
          </div>
  </div>
  );
};
export default Dashboard;



