/* eslint-disable react/prop-types */

import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({content,colors,size}) {

  const series = [
    {
      data: content,
      arcLabel: (item) => `${((item.value / totalValue) * 100).toFixed(0)}%`,
      innerRadius: '50%', 
    },
  ];

  const width = size.width > 1340 ? (size.width > 1420 ? 220 : 205) :(size.width>1290?(size.width>1200?170:150):190);
  const height = size.height >600 ? (size.height> 630 ? (size.height > 700 ? 160 : 140) :130): 120;

  const totalValue = series[0].data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div dir="rtl" className='my-5' >
        <PieChart
            series={series}
            margin={{ top:0, right: 0, bottom: 0, left: 10 }}
            slotProps={{
              legend: {
                hidden:true
              },
            }}
            colors= {colors}
            width={width}
            height={height}
           
    />
    </div>
  );
}

