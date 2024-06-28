/* eslint-disable react/prop-types */
import { MedicalCenter ,TransferPatient , AlertDialog } from "../../../../components/index"
import  addressIcon from "../../../../assets/icons/public/address.svg"
import  centerIcon from "../../../../assets/icons/public/MedicalCenterIcon.svg"

const GridView = ({data}) => {
    const icons = {
        centerIcon:centerIcon,
        addressIcon:addressIcon
    }
    console.log(data);
    const height = window.innerHeight;
    const width = window.innerWidth;
    const responsive =  (height > 630 ? (height > 700 ?(width>1410 ? "min-h-centerAbove700_1400" : "min-h-centerAbove700") : "min-h-centerUnder700") : "min-h-centerUnder630" )

return (
    <div className={`grid grid-cols-3 xl:grid-cols-4  bg-bgSideButton shadow-inner  rounded-lg p-4 gap-3 ${responsive}`}>
    {data.map((medicalCenter , index)=>{
        return <AlertDialog key={index} 
                renderComponent={<MedicalCenter icons={icons} content={medicalCenter}/>} 
                contentComponent={<TransferPatient patientID={"15"} destinationCenterID={medicalCenter.id}/>} 
                />

    })}
</div>
  )
}

export default GridView