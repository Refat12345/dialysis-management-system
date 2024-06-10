/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent, PageLoader } from "../../../components/index";
import { pieChartData } from "../../../data/data";
import { useGetSessionsQuery, useGetStatisticsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: sessionData, isSuccess: sessionSuccess, isLoading: sessionLoading  } = useGetSessionsQuery();
  const { data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetStatisticsQuery();
  
  const height = window.innerHeight;
  const itemsPerPage = useMemo(() => (height > 599 ? (height > 819 ? 7 : 6) : 5), [height]);
  
  useEffect(() => {
    if (!isLoaded) {
      Cookies.set("token", "22|uheq145P7KxoWfJcO0pndmpdh3qbpZh9W3NLCHogaa1cdfc5");
      setIsLoaded(true);
    }
  }, [isLoaded]);

  if (sessionLoading || statisticsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!sessionSuccess || !statisticsSuccess) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-2xl">خطأ بجلب البيانات أعد المحاولة من فضلك </p>
      </div>
    );
  }

  return (
    <div className="flex-grow md:mr-48 bg-bgDashboard h-screen">
      <Cards data={statisticsData[0]} />
      <div className={`flex flex-row-reverse justify-between ${height > 700 ? "mt-7" : "mt-5"}`}>
        <div className="flex flex-col md:w-7/12">
          <PaginationComponent
            data={sessionData.dialysisSessions}
            RenderComponent={DialysisSessions}
            itemsPerPage={itemsPerPage}
            type="dashboard"
          />
        </div>
        <div className="hidden lg2:block w-1/3">
          <PieCharts data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
