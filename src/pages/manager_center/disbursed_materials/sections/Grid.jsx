/* eslint-disable react/prop-types */
import PatientCard from "../../../../components/manager_center/disbursed_materials/PatientCard"
const Grid = ({data}) => {
  const height = window.innerHeight;
  const responsive = height > 620 ? (height < 700 ? "gap-3" :"gap-4") :"gap-2"
  return (
    <div className={`grid grid-cols-3 xl:grid-cols-4 ${responsive}`}>
        {data.map((medicalCenter , index)=>{
            return <PatientCard key={index}/>
    
        })}
    </div>
  )
}

export default Grid