/* eslint-disable no-unused-vars */
import Cards from "./sections/Cards"
import { DropDown, PageLoader } from "../../../components"
import { useState } from "react"
import { useGetPieChartsQuery } from "../../../services/manager_center/dashboard/DashboardSlice"
import { useGetCausesRenalFailureQuery } from "../../../services/manager_center/dashboard/DashboardSlice"
import PieCharts from "./sections/PieCharts"
import { useGetAllStatisticsQuery } from "../../../services/manager/dashboard/ManagerDashboardSlice"
const ManagerDashboard = () => {
  const [date,setDate] = useState({
    month:"",
    year:""
  })
  const {data :medicineDate , isSuccess:medicineSuccess, isLoading: medicineLoading ,refetch} = useGetPieChartsQuery(date)
  const { data: causeRenalData, isSuccess: causeRenalSuccess, isLoading: causeRenalLoading } = useGetCausesRenalFailureQuery();
  const { data: statistics, isSuccess: statisticsSuccess, isLoading: statisticsLoading } = useGetAllStatisticsQuery();
  if( medicineLoading || causeRenalLoading ||statisticsLoading ) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
      
    );
  }
  const filters = 
    {
        title:"المراكز الطبية",
        array:[]
    }

const colors = {
  titleColor: "bgSideButton",
  contentColor: "bgButtonColor",
  textColor: "textMenuColor",
}
  return (
    <div className="flex-grow md:mr-48 bg-bgDashboard h-screen ">
        <div className="mx-[2%] h-screen">
        <div dir="rtl" className="w-[20%] mt-8 ">
        <DropDown
        colors={colors} filter={filters.array} title={filters.title} onSelect={(val)=>{}}
        />
        </div>
        <Cards data= {statistics[0]} />
        <PieCharts causeRenalData={causeRenalData} medicineData={medicineDate} date={date} setValue={setDate} loading= {medicineLoading} />
    
        </div>
      </div>
  )
}

export default ManagerDashboard