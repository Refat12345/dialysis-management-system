/* eslint-disable no-unused-vars */
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent } from "../../../components/index";

import { useGetPieChartsQuery, useGetSessionsQuery } from "../../../services/dashboard/DashboardSlice";

const Dashboard = () => {
  const height = window.innerHeight;

  const {data ,isSuccess} = useGetSessionsQuery();
  const {data:pieChartData,isSuccess:pieIsSuccess} = useGetPieChartsQuery();

  return (
    (isSuccess && pieIsSuccess) && <div  className="flex-grow md:mr-48 bg-bgDashboard h-screen">
    <Cards/>
    <div className={`flex flex-row-reverse justify-between ${height>700 ?"mt-7":"mt-5"}`}>
                <div  className="flex flex-col  md:w-7/12 ">
                      <PaginationComponent data={data.dialysisSessions} RenderComponent={DialysisSessions} itemsPerPage={height>600?(height>760?(height>830?8:7):6):5}/>
                </div> 
                <div className="hidden lg2:block w-1/3">
                    <PieCharts data = {pieChartData} />
                </div>
          </div>
  </div>
  );
};
export default Dashboard;



