/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent, PageLoader } from "../../../components/index";
import { pieChartData ,dialysisSessions  } from "../../../data/data";
import { useGetCausesRenalFailureQuery, useGetCenterStatisticsQuery, useGetPieChartsQuery, useGetSessionsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [date,setDate] = useState({
    month:"",
    year:""
  })
  
  const {data :medicineDate , isSuccess:medicineSuccess, isLoading: medicineLoading ,refetch} = useGetPieChartsQuery(date)
  const { data: sessionData, isSuccess: sessionSuccess, isLoading: sessionLoading  } = useGetSessionsQuery();
 // const { data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetStatisticsQuery();
  const {data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetCenterStatisticsQuery()
  const { data: causeRenalData, isSuccess: causeRenalSuccess, isLoading: causeRenalLoading } = useGetCausesRenalFailureQuery();
  const height = window.innerHeight;
  const itemsPerPage = useMemo(() => (height > 599 ? (height > 819 ? 7 : 6) : 5), [height]);
  useEffect(() => {
      if(date.month != "" && date.year != "" ){
        refetch();
      }
  }, [date, refetch]);
  useEffect(() => {
    if (!isLoaded) {
      Cookies.set("token", "24|TbUrwOJysmu7xwdiMEcdw0EN24owyrfZGCTa6xHqed7c3412");
      setIsLoaded(true);
    }
  }, [isLoaded]);
  if (sessionLoading || statisticsLoading  || causeRenalLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PageLoader />
      </div>
    );
  }

  if (!sessionSuccess || !statisticsSuccess  || !causeRenalSuccess) {
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
          <PieCharts medicineData={medicineDate.pieChart} causeRenalData = {causeRenalData.causeRenalFailure} loading= {medicineLoading} setValue={setDate} date= {date} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
