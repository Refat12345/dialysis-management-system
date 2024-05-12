/* eslint-disable react/prop-types */

const CircleChart = ({title,color }) => {

    return (
      <div className="flex  mb-2 ">
      <div style={{background:color}} className="h-4 w-4 rounded-full"></div>
      <span className="ml-2 text-sm font-primaryBold">{title}</span>
    </div>
    )
  }
  
  export default CircleChart