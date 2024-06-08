/* eslint-disable no-unused-vars */
import NationalInformation from "./NationalInformation";
import ContactInformation from "./ContactInformation";
import { dataContact, dataLocation } from "../../../../data/data";
import { UserDetailsProvider, useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../public/LoadingComponent ";
import AdressInformation from "./AdressInformation";

function UserDetailsView() {


  const { userData, isLoading, isSuccess } = useDetailsUsers();

  const [dada, setdada] = useState({});
  
  


  useEffect(() => {
    if (isSuccess && !isLoading && userData) {
      const [userDataa] = userData;
      const { fullName } = userDataa;
      setdada(userDataa);
      console.log(fullName);

    const telecomData = userDataa.telecom.reduce((acc, { system, value, use }) => {
      if (!acc[system]) {
        acc[system] = [];
      }
      acc[system].push({ value, use });
      return acc;
    }, {});


      const addressData = userDataa.address.reduce((acc, {  use, cityName }) => {
        if (!acc[use]) {
          acc[use] = [];
        }
        acc[use].push({  cityName });
        return acc;
      }, {});
    setdada(prevState => ({
      ...prevState,
      telecomData,
      addressData
    }));
    }
  }, [isSuccess, isLoading, userData]);

  console.log(dada.addressData?.work?.[0]?.cityName);
  

  if (isLoading) return <LoadingComponent />;
  if (!userData) return <div>No data available</div>;


  

  return (
  
<>
    
    {isSuccess  && !isLoading  && (

       <div>
     <h3 dir="rtl" className="-mt-12 pb-6 text-2xl text-blue-700">
       تفاصيل الحساب
     </h3>
     <div className="grid grid-cols-2 gap-4 p-4">
       <NationalInformation data={dada} />
       
       <AdressInformation data={dada}/>
       {dada.address!=null?  <ContactInformation data={dada} />:null}
      
     </div>
   </div> 

     )
   }
   
   </>
   
    
   
    
  );
}

export default UserDetailsView;
