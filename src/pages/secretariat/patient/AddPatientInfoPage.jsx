import React from 'react'
import AddPaitentInfo from '../../../components/addPaitentInfo/AddPaitentInfo'
import { useParams } from 'react-router-dom';

function AddPatientInfoPage() {
    let { patientName } = useParams();
    console.log("inmm" , patientName);

  return (
    <div className="w-full flex flex-col lg:mr-48 md:mr-48 bg-addPaitentInfoPage">
        <>
        <AddPaitentInfo id={patientName}/>

        </>
    </div>
  )
}

export default AddPatientInfoPage
