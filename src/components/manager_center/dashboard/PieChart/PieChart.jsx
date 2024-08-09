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
    <div className="flex flex-row-reverse justify-between bg-white shadow-2xl rounded-lg h-full">
        {data.length === 3 ? (data[0].value === 0 ||data[0].value === undefined) &&( data[1].value === 0 || data[1].value === undefined) && (data[2].value === 0 || data[2].value === undefined) ? <p className="font-bold px-5 py-12">لا يوجد مستهلكات بعد </p> : <BasicPie colors = {colors} content = {data} size={size}/>:
        (data[0].value === 0 ||data[0].value === undefined) && (data[1].value === 0  || data[1].value === undefined ) && (data[2].value === 0 || data[2].value === undefined) && (data[3].value === 0 ||data[3].value === undefined ) ? <p className="font-bold px-5 py-12">لا يوجد مرضى بعد </p> : <BasicPie colors = {colors} content = {data} size={size}/>
        }
        <div className={`flex flex-col mt-10 ${size.width > 1420 ?"ml-[10%]":"ml-[8%]"} `}>
            {title[0].map((title,index)=>{
                return  <CircleChart key={index} title={title} color={colors[index]} size={size} />
                    
                })}
        </div>
      </div>
  )
}

export default PieChart