/* eslint-disable react/prop-types */
import BasicPie from "./BasicPie"
import CircleChart from './CircleChart'
const PieChart = ({title,data}) => {

  const colors = title[1];
    const size = {
        height:window.innerHeight,
        width:window.innerWidth
    }
  return (
    <div className="flex flex-row-reverse justify-between bg-white shadow-2xl rounded-lg">
        <BasicPie colors = {colors} content = {data} size={size}/>
        <div className={`flex flex-col mt-10 ${size.width>1420 ?"ml-[10%]":"ml-[8%]"} `}>
            {title[0].map((title,index)=>{
                return  <CircleChart key={index} title={title} color={colors[index]} size={size} />
                    
                })}
        </div>
      </div>
  )
}

export default PieChart