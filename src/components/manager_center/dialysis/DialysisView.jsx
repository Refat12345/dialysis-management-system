/* eslint-disable no-unused-vars */

import SessionData from "./SessionData";
import WeightData from "./WeightData";
import PBData from "./PBData";
import MedicinesGiven from "./MedicinesGiven";
import MachineData from "./MachineData";
import NotesSessionData from "./NotesSessionData";
import { useDialysisDetails } from "../../../pages/manager_center/dialysis/DialysisPageState";
import PublicLoader from "../../public/loader/PublicLoader";

export default function DialysisView() {

  const {patientData,isLoading,isSuccess} = useDialysisDetails();

 
  if (isLoading) {
    return (
      <PublicLoader/>
    );
  }
  if (!patientData) return <div>No data available</div>;



  
  

  return (
<>
{
  isSuccess && !isLoading && patientData && 
      (
        <div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mr-56 ml-8 mt-12 "
      dir="rtl"
    >
      <SessionData data={patientData} />

      <WeightData data={patientData} />

      <PBData bloodPressures={patientData.dialysisSession.bloodPressures} />

      <MedicinesGiven medicines={patientData.dialysisSession.medicines} />

      <MachineData data={patientData}  />

      <NotesSessionData notes={patientData.dialysisSession.sessionNotes} />
    </div>

      )
    }
    
</>
 
  );
}
