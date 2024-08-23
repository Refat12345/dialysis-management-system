/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TableHeader from "../../patient/TableHeader";
import TableRow from "../../patient/TableRow";
import down from "../../../../assets/icons/medical-center/patient/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { dialysisRoute, dialysisDetailsRoute } from "../../../../data/data";
import { useGeneralDialysis } from "./GeneralDialysisState";
import SelectedTextFeild from "../../../public/textfield/SelectedTextFeild";
import DropDown from "../../../public/drop_down/DropDown";
function GeneralDialysis({ data, type2 }) {
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
    navigate(`/app/dialysisDetails/${userId}`);
  };
  const colors = {
    titleColor: "primaryColor",
    contentColor: "bgButtonColor",
  };
  let height = window.innerHeight;

  let responsive =
    height > 630
      ? height > 670
        ? height > 740
          ? height > 800
            ? "min-h-AuditAbove8000"
            : "min-h-AuditAbove7400"
          : "min-h-AuditAbove7000"
        : "min-h-AuditAbove6300"
      : "min-h-AuditUnder6300";

  return (
    <>
      {type2 === "dialysis"
        ? isSuccess &&
          !isLoading &&
          userData && (
            <div
              className={`flex-grow overflow-x-auto mr-56 ml-8  mt-2 ${responsive} `}
              // className={`flex-grow overflow-x-auto mr-56 ml-8 h-full mt-2 min-h-customAbove600 `}
              dir="rtl"
            >
              <div className="flex justify-between mb-5 mt-5">
                <h2 className="text-titleColor font-bold text-customSize w-[30%]">
                  جلسات الغسيل
                </h2>

                <div className="w-full flex justify-end">
                  <div className="relative w-1/5 ">
                    <DropDown
                      colors={colors}
                      title={
                        selectedYearOption === ""
                          ? "اختر السنة"
                          : selectedYearOption
                      }
                      filter={filterYear.array}
                      onSelect={handleSelectYearChange}
                    />
                  </div>

                  <div className="relative w-1/5 ">
                    <DropDown
                      colors={colors}
                      title={
                        selectedMonthOption === ""
                          ? "اختر الشهر"
                          : selectedMonthOption
                      }
                      filter={filterMonth.array}
                      onSelect={handleSelectMonthChange}
                    />
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
        : isSuccessByPatient &&
          !isLoadingByPatient &&
          userByPatient && (
            <div
            className={`flex-grow overflow-x-auto  ml-8  mt-2 ${responsive} `}

              dir="rtl"
            >
              <div className="flex  mb-5 mt-5">
                <h2 className="text-titleColor font-bold text-customSize">
                  جلسات الغسيل
                </h2>
                <div className="flex flex-grow  justify-end">
                <div className="relative w-[22%] mr-5 self-center  ">
                  <DropDown
                    colors={colors}
                    title={
                      selectedYearOption === ""
                        ? "اختر السنة"
                        : selectedYearOption
                    }
                    filter={filterYear.array}
                    onSelect={handleSelectYearChange}
                    type={"shift"}
                  />
                </div>

                <div className="relative w-[22%] self-center  ">
                <DropDown
                      colors={colors}
                      title={
                        selectedMonthOption === ""
                          ? "اختر الشهر"
                          : selectedMonthOption
                      }
                      filter={filterMonth.array}
                      onSelect={handleSelectMonthChange}
                      type={"shift"}
                    />
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
          )}
    </>
  );
}

export default GeneralDialysis;
