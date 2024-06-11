/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent, PageLoader } from "../../../components/index";
import { pieChartData ,dialysisSessions  } from "../../../data/data";
import { useGetCausesRenalFailureQuery, useGetPieChartsQuery, useGetSessionsQuery, useGetStatisticsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [date,setDate] = useState(null)
  let dateOne= date != null && new Date(date.$d)
   let dateObj = date !=null && {
    month:dateOne.getMonth()+1,
    year:dateOne.getFullYear()
    
  }
  const {data :medicineDate , isSuccess:medicineSuccess, isLoading: medicineLoading ,refetch} = useGetPieChartsQuery(dateObj)
  const { data: sessionData, isSuccess: sessionSuccess, isLoading: sessionLoading  } = useGetSessionsQuery();
  const { data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetStatisticsQuery();
  const { data: causeRenalData, isSuccess: causeRenalSuccess, isLoading: causeRenalLoading } = useGetCausesRenalFailureQuery();
  const height = window.innerHeight;
  const itemsPerPage = useMemo(() => (height > 599 ? (height > 819 ? 7 : 6) : 5), [height]);
  useEffect(() => {
      refetch();
  }, [date, refetch]);
  useEffect(() => {
    if (!isLoaded) {
      Cookies.set("token", "21|Cz0zpod31DuLNDWnVy2IT8iEnP3JzR246P0nDdnP7c34e6e5");
      setIsLoaded(true);
    }
  }, [isLoaded]);
  if (sessionLoading || statisticsLoading ||causeRenalLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!sessionSuccess || !statisticsSuccess || !causeRenalSuccess) {
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
        <div className="flex flex-col md:w-[62%]">
          <PaginationComponent
            data={dialysisSessions}
            RenderComponent={DialysisSessions}
            itemsPerPage={itemsPerPage}
            type="dashboard"
          />
        </div>
        <div className="hidden lg2:block w-1/3">
          <PieCharts medicineData={medicineDate.pieChart} causeRenalData = {causeRenalData.causeRenalFailure} loading= {medicineLoading} setValue={setDate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
