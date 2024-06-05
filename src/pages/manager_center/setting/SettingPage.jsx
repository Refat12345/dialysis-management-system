import GeneralAboutCenter from "../../../components/manager_center/setting/GeneralAboutCenter/GeneralAboutCenter";
import Cards from "../../../components/manager_center/setting/Cards";
import ContactCenter from "../../../components/manager_center/setting/Contact/ContactCenter";
import NoteCenter from "../../../components/manager_center/setting/Note/NoteCenter";
import { DataProvider } from "../../../components/manager_center/setting/DataContext";
import {
  dataCenterLocation,
  dataCenterTime,
  
} from "../../../data/data";
import TimeCenter from "../../../components/manager_center/setting/TiemCenter/TimeCenter";
import { SettingProvider, useSetting } from "./SettingState";
import LoadingComponent from "../../../components/public/LoadingComponent ";
function SettingPage() {
  const { SettingData, isLoading, isSuccess } = useSetting();
  console.log("Setting Data in PatientListPage:", SettingData);

  if (isLoading) return <LoadingComponent />;
  if (!SettingData) return <div>No data available</div>;

  return (
    <SettingProvider>
      <>
      {isSuccess && !isLoading && (
         <div className="bg-cardDetailsColor w-full">
         <div
           className="flex-grow mr-56 ml-8 h-max mt-3 bg-cardDetailsColor "
           dir="rtl"
         >
           <div className="flex items-center mb-3">
             <span className="text-2xl text-blue-700 mr-2 ml-5">
               معلومات المركز
             </span>
             <hr className="custom-hrr flex-grow " />
           </div>
 
           <div className="flex flex-row gap-6">
             <GeneralAboutCenter data={SettingData.center} />
             {/* <div className="grid grid-cols-1 gap-3 ">
               <Cards />
               <TimeCenter data={dataCenterTime} />
               <ContactCenter data={dataCenterLocation} />
               <NoteCenter  />
             </div> */}
           </div>
         </div>
       </div>
      )}
      
      </>
     
    </SettingProvider>
  );
}

export default SettingPage;
