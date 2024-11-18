/* eslint-disable react/prop-types */
import { PieChart } from '@mui/x-charts/PieChart';
import { useMemo } from "react";

export default function BasicPie({ content, colors, size, type }) {
  const totalValue = useMemo(() => content.reduce((acc, item) => acc + item.value, 0), [content]);

  const series = useMemo(() => [
    {
      data: content,
      arcLabel: type === "medicine" ? (item) => item.value === 0 ? '' : `${item.value}` : (item) => item.value === 0 ? '' : `${((item.value / totalValue) * 100).toFixed(0)}%`,
      innerRadius: '50%',
    },
  ], [content, totalValue, type]);

  const width = useMemo(() => {
    if (size.width > 1340) {
      return size.width > 1420 ? 220 : 205;
    } else {
      return size.width > 1290 ? (size.width > 1200 ? 170 : 150) : 190;
    }
  }, [size.width]);

  const height = useMemo(() => {
    if (size.height > 600) {
      return size.height > 630 ? (size.height > 700 ? 160 : 140) : 130;
    } else {
      return 120;
    }
  }, [size.height]);

  return (
    <div dir="rtl" className='my-5'>
      <PieChart
        series={series}
        margin={{ top: 0, right: 0, bottom: 0, left: 10 }}
        slotProps={{
          legend: {
            hidden: true
          },
        }}
        colors={colors}
        width={width}
        height={height}
      />
    </div>
  );
}
