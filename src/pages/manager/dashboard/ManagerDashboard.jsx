/* eslint-disable react-hooks/exhaustive-deps */
import Cards from "./sections/Cards";
import { DropDown, PageLoader } from "../../../components";
import { useState, useEffect } from "react";

import PieCharts from "./sections/PieCharts";
import {
  useGetAllCentersQuery,
  useGetAllStatisticsQuery,
  useGetCauseRenalQuery,
  useGetMedicinesQuery,
} from "../../../services/manager/dashboard/ManagerDashboardSlice";

const ManagerDashboard = () => {
  const [date, setDate] = useState({
    month: "",
    year: ""
  });
 
  
  const [id, setId] = useState(0);
  const [centerName,setCenterName] = useState("المراكز الطبية")
  // Query hooks
  const {
    data: medicalCenters,
    isSuccess: medicalCentersSuccess,
    isLoading: medicalCentersLoading,
  } = useGetAllCentersQuery();

  const {
    data: medicineDate,
    isSuccess: medicineSuccess,
    isLoading: medicineLoading,
    refetch: reMedicines,
  } = useGetMedicinesQuery({
    year:date.year,
    month:date.month,
    id:id
  });
  

  const {
    data: causeRenalData,
    isSuccess: causeRenalSuccess,
    isLoading: causeRenalLoading,
    refetch: reCause,
  } = useGetCauseRenalQuery(id);

  const {
    data: statistics,
    isSuccess: statisticsSuccess,
    isLoading: statisticsLoading,
    refetch: reStatistics,
  } = useGetAllStatisticsQuery(id);

  useEffect(()=>{
    if (centerName === "المراكز الطبية") {
      setId(0);
    } else {
      const selectedCenter = medicalCenters.centers.find(
        (array) => array.centerName === centerName
      );
      if (selectedCenter) {
        setId(selectedCenter.id);
      }
    }
  },[centerName])

  // Refetch data when id changes
  useEffect(() => {
    if (id !== null) {
      reStatistics();
      reCause();
      reMedicines();
    }
  }, [id, reStatistics, reCause, reMedicines]);

//   useEffect(() => {
//     if(date.month != "" && date.year != "" ){
//       reMedicines();
//     }
// }, [date]);

  // Handle loading state
  if (medicineLoading || causeRenalLoading || statisticsLoading || medicalCentersLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  // Prepare dropdown options
  let arrays = [];
  if (medicalCentersSuccess) {
    medicalCenters.centers.forEach((array) => {
      arrays.push(array.centerName);
    });
  }

  const filters = {
    title:centerName,
    array: arrays,
  };

  const colors = {
    titleColor: "bgSideButton",
    contentColor: "bgButtonColor",
    textColor: "textMenuColor",
  };

  return (
    medicalCentersSuccess &&
    medicineSuccess &&
    causeRenalSuccess &&
    statisticsSuccess && (
      <div className="flex-grow md:mr-48  bg-bgMedicalRecord  ">
        <div className="mx-[2%] h-screen mt-8">
          <div dir="rtl" className="w-[20%]  ">
            <DropDown
              colors={colors}
              filter={filters.array}
              title={filters.title}
              onSelect={(val) => {
                setCenterName(val)
              }}
              manager={true}
            />
          </div>
          <Cards data={statistics[0]} />
          <PieCharts
            causeRenalData={causeRenalData.causeRenalFailure}
            medicineData={medicineDate.pieChart}
            date={date}
            setValue={setDate}
            loading={medicineLoading}
          />
        </div>
      </div>
    )
  );
};

export default ManagerDashboard;
