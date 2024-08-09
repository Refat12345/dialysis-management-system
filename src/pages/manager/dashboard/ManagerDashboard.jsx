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
    year: "",
  });
  const [id, setId] = useState(0);
  
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
  } = useGetMedicinesQuery(id);

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

  // Refetch data when id changes
  useEffect(() => {
    if (id !== null) {
      reStatistics();
      reCause();
      reMedicines();
    }
  }, [id, reStatistics, reCause, reMedicines]);

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
    title: "المراكز الطبية",
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
      <div className="flex-grow md:mr-48 bg-bgMedicalRecord h-screen ">
        <div className="mx-[2%] h-screen">
          <div dir="rtl" className="w-[20%] mt-8 ">
            <DropDown
              colors={colors}
              filter={filters.array}
              title={filters.title}
              onSelect={(val) => {
                if (val === "المراكز الطبية") {
                  setId(0);
                } else {
                  const selectedCenter = medicalCenters.centers.find(
                    (array) => array.centerName === val
                  );
                  if (selectedCenter) {
                    setId(selectedCenter.id);
                  }
                }
              }}
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
