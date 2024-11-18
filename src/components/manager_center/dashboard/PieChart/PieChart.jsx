/* eslint-disable react/prop-types */
import { useMemo } from "react";
import BasicPie from "./BasicPie";
import CircleChart from "./CircleChart";

const PieChart = ({ title, data }) => {
  const colors = title[1];
  const size = useMemo(() => ({
    height: window.innerHeight,
    width: window.innerWidth
  }), []);

  const isDataEmpty = useMemo(() => {
    return data.every(item => item.value === 0 || item.value === undefined);
  }, [data]);

  return (
    <div className="flex flex-row-reverse justify-between bg-white shadow-2xl rounded-lg h-full">
      {isDataEmpty ? (
        <p className="font-bold px-5 py-12">لا يوجد بيانات بعد</p>
      ) : (
        <BasicPie type={data.length === 3 ? "medicine" : undefined} colors={colors} content={data} size={size} />
      )}
      <div className={`flex flex-col mt-10 ${size.width > 1420 ? "ml-[10%]" : "ml-[8%]"}`}>
        {title[0].map((title, index) => (
          <CircleChart key={index} title={title} color={colors[index]} size={size} />
        ))}
      </div>
    </div>
  );
};

export default PieChart;
