/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent, PageLoader } from "../../../components/index";
import { useGetCausesRenalFailureQuery, useGetCenterStatisticsQuery, useGetPieChartsQuery, useGetSessionsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";
const Dashboard = () => {


  const [date,setDate] = useState({
    month:"",
    year:""
  })
  const {data :medicineDate , isSuccess:medicineSuccess, isLoading: medicineLoading ,refetch} = useGetPieChartsQuery(date)
  const { data: causeRenalData, isSuccess: causeRenalSuccess, isLoading: causeRenalLoading } = useGetCausesRenalFailureQuery();
  const { data: sessionData, isSuccess: sessionSuccess, isLoading: sessionLoading ,error:err   } = useGetSessionsQuery();
  const {data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading , error } = useGetCenterStatisticsQuery()
  const height = window.innerHeight;
  const itemsPerPage = useMemo(() => (height > 599 ? (height > 819 ? 7 : 6) : 5), [height]);
  useEffect(() => {
      if(date.month != "" && date.year != "" ){
        refetch();
      }
  }, [date, refetch]);
  if (sessionLoading || statisticsLoading  || causeRenalLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
      
    );
  }
  
  if (!sessionSuccess || !statisticsSuccess  || !causeRenalSuccess) {
    return (
      <div className="flex-grow md:mr-48">
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-2xl">خطأ بجلب البيانات أعد المحاولة من فضلك </p>
      </div>
      </div>
    );
  }
  return (
    <div className="flex-grow md:mr-48 bg-bgDashboard h-screen">
      <Cards data={statisticsData[0]} />
      <div className={`flex flex-row-reverse justify-between ${height > 700 ? "mt-7" : "mt-5"}`}>
        <div className="flex flex-col md:w-[62%]">
          <PaginationComponent
            data={sessionData.message}
            RenderComponent={DialysisSessions}
            itemsPerPage={itemsPerPage}
            type="dashboard"
          />
        </div>
        <div className="hidden lg2:block w-1/3">
          <PieCharts medicineData={medicineDate.pieChart} causeRenalData = {causeRenalData.causeRenalFailure}  setValue={setDate} date= {date} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
