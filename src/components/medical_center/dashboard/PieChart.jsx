/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";



   
const PieChart = ({obj}) => {
  const data = [
    ["Task", "Hours per Day"],
    [obj.medicines[0], 9],
    [obj.medicines[1], 5],
    [obj.medicines[2], 5],
  ];
  
   const options = { 
    pieHole: 0.5, 
    chartArea: {
      top: '10%', 
      height:'80%',
    
      
     
    },
    is3D: false,
    slices: { 
      0: { textStyle: { fontSize: 10 } }, 
      1: { textStyle: { fontSize: 10 } },
      2: { textStyle: { fontSize: 10 ,} }  
    },
    legend: { position: 'left'  , textStyle: { color: '233333', fontSize: 14 }},
    colors: [obj.colors[0], obj.colors[1], obj.colors[2]],
    
  };
  return (
    <div   className="rounded-lg bg-white p-1">     
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            />
  </div>
  )
}

export default PieChart

