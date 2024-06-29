/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TableHeader from "../../patient/TableHeader";
import TableRow from "../../patient/TableRow";
import down from "../../../../assets/icons/medical-center/patient/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { dialysisRoute, dialysisDetailsRoute } from "../../../../data/data";
import { useGeneralDialysis } from "./GeneralDialysisState";
import SelectedTextFeild from "../../../public/textfield/SelectedTextFeild";
function GeneralDialysis({ data ,type2 }) {
  const navigate = useNavigate();

  const {
    userData,
    isLoading,
    isSuccess,
    selectedYearOption,
    handleSelectYearChange,
    selectedMonthOption,
    handleSelectMonthChange,
    userByPatient,
    isLoadingByPatient,
    isSuccessByPatient,

  } = useGeneralDialysis();


  if (isLoading || !userData || !userData.dialysisSessions) {
    return <div>جاري تحميل البيانات...</div>;
  }

  const filteredData = data.map((item) => ({
    Name: item.patientName,
    nurse: item.nurseName,
    date: item.sessionStartTime.split(" ")[0],
    time: item.sessionStartTime.split(" ")[1].slice(0, 5),
    chair: item.chair,
    roomName: item.roomName,
  }));
  

  const columns = [
    { key: "name", title: "اسم المريض" },
    { key: "gender", title: "اسم الممرض" },
    { key: "birth", title: "التاريخ" },
    { key: "location", title: "التوقيت" },
    { key: "phone", title: "الكرسي" },
    { key: "room", title: "القاعة" },
  ];
  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";
  };

  const filterMonth = {
    title: "شهر ",
    array: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  };

  const filterYear = {
    title: "شهر ",
    array: [
      "2024",
      "2025",
      "2026",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
      "2031",
      "2032",
      "2033",
      "2034",
    ],
  };

  const handleRowClick = (userId) => {
    navigate(`${dialysisDetailsRoute.replace(":id", userId)}`);
  };

  return (
    <>
    {
      type2 === "dialysis" ?  isSuccess && !isLoading && userData && (
        <div
          className="flex-grow overflow-x-auto mr-56 ml-8 h-full mt-2 min-h-customAbove600"
          dir="rtl"
        >
          <div className="flex justify-between mb-5 mt-5">
            <h2 className="text-customPurple text-customSize">جلسات الغسيل</h2>

            <div className="relative w-1/5 ">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedYearOption === "" ? "اختر السنة" : selectedYearOption}
                filter={filterYear.array}
                onSelect={handleSelectYearChange}
              />

              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5 " src={down} alt="Patient" />
              </div>
            </div>

            <div className="relative w-1/5 ">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedMonthOption === "" ? "اختر الشهر" : selectedMonthOption}
                filter={filterMonth.array}
                onSelect={handleSelectMonthChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5 " src={down} alt="Patient" />
              </div>
            </div>
          </div>
          <table className="min-w-full bg-white">
            <TableHeader columns={columns} color="bg-headerTable" />

            <tbody className="text-gray-700">
              {filteredData.map((row, index) => (
                <TableRow
                  id={data[index].id}
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={handleRowClick}
                  getRowColor={() => getRowColor(index, row.name)}
                  type={"dialysis"}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) 
      :

      isSuccessByPatient && !isLoadingByPatient && userByPatient && (
        <div
          className="flex-grow overflow-x-auto  ml-8 h-full mt-2 min-h-customAbove600"
          dir="rtl"
        >
          <div className="flex justify-between mb-5 mt-5">
            <h2 className="text-customPurple text-customSize">جلسات الغسيل</h2>

            <div className="relative w-1/5 ">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedYearOption}
                filter={filterYear.array}
                onSelect={handleSelectYearChange}
              />

              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5 " src={down} alt="Patient" />
              </div>
            </div>

            <div className="relative w-1/5 ">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedMonthOption}
                filter={filterMonth.array}
                onSelect={handleSelectMonthChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img className="w-5 h-5 " src={down} alt="Patient" />
              </div>
            </div>
          </div>
          <table className="min-w-full bg-white">
            <TableHeader columns={columns} color="bg-headerTable" />

            <tbody className="text-gray-700">
              {filteredData.map((row, index) => (
                <TableRow
                  id={data[index].id}
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={handleRowClick}
                  getRowColor={() => getRowColor(index, row.name)}
                  type={"dialysis"}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) 
      
    }
     
    </>
  );
}

export default GeneralDialysis;
