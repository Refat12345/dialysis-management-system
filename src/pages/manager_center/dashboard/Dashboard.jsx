/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState, useCallback } from "react";
import { Cards, PieCharts, DialysisSessions } from "../../index";
import { PaginationComponent, PageLoader } from "../../../components/index";
import { useGetCausesRenalFailureQuery, useGetCenterStatisticsQuery, useGetPieChartsQuery, useGetSessionsQuery } from "../../../services/manager_center/dashboard/DashboardSlice";
import TextSearch from "../../../components/public/title/TextSearch";

const Dashboard = () => {
  const [date, setDate] = useState({
    month: "",
    year: ""
  });

  const { data: medicineDate, isSuccess: medicineSuccess, isLoading: medicineLoading, refetch } = useGetPieChartsQuery(date);
  const { data: causeRenalData, isSuccess: causeRenalSuccess, isLoading: causeRenalLoading } = useGetCausesRenalFailureQuery();
  const { data: sessionData, isSuccess: sessionSuccess, isLoading: sessionLoading } = useGetSessionsQuery();
  const { data: statisticsData, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetCenterStatisticsQuery();

  const height = window.innerHeight;
  const itemsPerPage = useMemo(() => (height > 599 ? (height > 819 ? 7 : 6) : 5), [height]);

  const handleSetDate = useCallback((newDate) => {
    setDate(newDate);
  }, []);

  if (sessionLoading || statisticsLoading || causeRenalLoading || medicineLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  if (!sessionSuccess || !statisticsSuccess || !causeRenalSuccess || !medicineSuccess) {
    return (
      <TextSearch text={"خطأ أثناء جلب البيانات أعد المحاولة من فضلك"}/>
    );
  }

  return (
    <div className="flex-grow md:mr-48 bg-bgDashboard min-h-screen">
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
          <PieCharts
            medicineData={medicineDate.pieChart}
            causeRenalData={causeRenalData.causeRenalFailure}
            setValue={handleSetDate}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
