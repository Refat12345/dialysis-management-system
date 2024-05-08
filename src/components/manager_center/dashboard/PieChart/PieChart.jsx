/* eslint-disable react/prop-types */
import BasicPie from "./BasicPie"
import CircleChart from './CircleChart'
const PieChart = ({obj}) => {
    const size = {
        height:window.innerHeight,
        width:window.innerWidth
    }
  return (
    <div className="flex flex-row-reverse justify-between bg-white shadow-2xl rounded-lg">
        <BasicPie obj = {obj} size={size}/>
        <div className={`flex flex-col mt-10 ${size.width>1420 ?"ml-[10%]":"ml-[8%]"} `}>
            {obj.medicines.map((data,index)=>{
                return  <CircleChart key={index} obj={data} size={size} />
                    
                })}
        </div>
      </div>
  )
}

export default PieChart