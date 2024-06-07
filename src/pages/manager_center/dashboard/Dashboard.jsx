/* eslint-disable no-unused-vars */
import { Cards, PieCharts, DialysisSessions  } from "../../index";
import { PaginationComponent ,PageLoader } from "../../../components/index";
import { data ,pieChartData } from "../../../data/data";
import { useGetSessionsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";
import { useEffect } from "react";
const Dashboard = () => {

  const height = window.innerHeight;
  const {data,isSuccess,isLoading} = useGetSessionsQuery();
  const itemsPerPage = height > 599 ?( height > 819 ? 7 : 6 ) : 5
  return (
    <div  className="flex-grow md:mr-48 bg-bgDashboard h-screen">
      { isLoading ? 
      <div className="flex items-center justify-center h-full">
        <PageLoader />
      </div> :
        <>
          <Cards/>
          <div className={`flex flex-row-reverse justify-between ${height>700 ?"mt-7":"mt-5"}`}>
                <div  className="flex flex-col  md:w-7/12 ">
                      <PaginationComponent data={data.dialysisSessions} RenderComponent={DialysisSessions} itemsPerPage={itemsPerPage} type={"dashboard"}/>
                </div> 
                <div className="hidden lg2:block w-1/3">ٍ
                    <PieCharts data = {pieChartData} />
                </div>
          </div>
          </>
          }
  </div>
  );
};
export default Dashboard;
