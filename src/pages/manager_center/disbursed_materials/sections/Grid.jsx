/* eslint-disable react/prop-types */
import { AlertDialog } from "../../../../components";
import PatientCard from "../../../../components/manager_center/disbursed_materials/PatientCard"
import DisbursedMaterialsDialog from "./DisbursedMaterialsDialog";
const Grid = ({data}) => {
  const height = window.innerHeight;
  const responsive = height > 620 ? (height < 700 ? "gap-3" :"gap-4") :"gap-2"
  let responsiveGrid = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? "min-h-AuditAbove800" :"min-h-AuditAbove740") : "min-h-AuditAbove700") : "min-h-AuditAbove630") : "min-h-AuditUnder630"
  return (
    <div className={`${responsiveGrid}`}>
    <div className={`grid grid-cols-3 xl:grid-cols-4 ${responsive}`}>
        {data.map((patient , index)=>{
            return <AlertDialog key={index} renderComponent={ <PatientCard  data = {patient}/>}
            contentComponent={<DisbursedMaterialsDialog data = {patient}/>}
            titleButton={"رجوع"}
            />
    
        })}
    </div>
    </div>
  )
}

export default Grid