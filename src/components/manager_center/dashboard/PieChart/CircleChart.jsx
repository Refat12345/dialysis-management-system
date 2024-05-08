/* eslint-disable react/prop-types */

const CircleChart = ({obj }) => {

    return (
      <div className="flex  mb-2 ">
      <div style={{background:obj.color}} className="h-4 w-4 rounded-full"></div>
      <span className="ml-2 text-sm">{obj.name}</span>
    </div>
    )
  }
  
  export default CircleChart