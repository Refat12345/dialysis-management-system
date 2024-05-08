/* eslint-disable react/prop-types */

import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({obj,size}) {

  const series = [
    {
      data: [
        { id: 0, value: 10, label: obj.medicines[0].name },
        { id: 1, value: 15, label: obj.medicines[1].name  },
        { id: 2, value: 20, label: obj.medicines[2].name },
      ],
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
            colors= {[obj.medicines[0].color , obj.medicines[1].color , obj.medicines[2].color]}
            width={width}
            height={height}
           
    />
    </div>
  );
}

