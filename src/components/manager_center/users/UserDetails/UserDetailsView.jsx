// /* eslint-disable no-unused-vars */
// import NationalInformation from "./NationalInformation";
// import ContactInformation from "./ContactInformation";
// import { dataContact, dataLocation } from "../../../../data/data";
// import {
//   UserDetailsProvider,
//   useDetailsUsers,
// } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
// import { useState, useEffect } from "react";
// import LoadingComponent from "../../../public/LoadingComponent ";
// import AdressInformation from "./AdressInformation";

// function UserDetailsView() {
//   const { userData, isLoading, isSuccess } = useDetailsUsers();

//   const [dada, setdada] = useState({});

//   useEffect(() => {
//     if (isSuccess && !isLoading && userData) {
//       const [userDataa] = userData;
//       const { fullName } = userDataa;
//       setdada(userDataa);

//       const telecomData = userDataa.telecom.reduce(
//         (acc, { system, value, use }) => {
//           if (!acc[system]) {
//             acc[system] = [];
//           }
//           acc[system].push({ value, use });
//           return acc;
//         },
//         {}
//       );

//       const addressData = userDataa.address.reduce((acc, { use, cityName }) => {
//         if (!acc[use]) {
//           acc[use] = [];
//         }
//         acc[use].push({ cityName });
//         return acc;
//       }, {});
//       setdada((prevState) => ({
//         ...prevState,
//         telecomData,
//         addressData,
//       }));
//     }
//   }, [isSuccess, isLoading, userData]);
//   useEffect(() => {
//     if (isSuccess && !isLoading && userData) {

//       const [userDataa] = userData;
//       // const { fullName } = userDataa;
  
//       const telecomData = userDataa.telecom.reduce(
//         (acc, { system, value, use }) => {
//           if (!acc[system]) {
//             acc[system] = [];
//           }
//           acc[system].push({ value, use });
//           return acc;
//         },
//         {}
//       );
  
//       const addressData = userDataa.address.reduce((acc, { use, cityName }) => {
//         if (!acc[use]) {
//           acc[use] = [];
//         }
//         acc[use].push({ cityName });
//         return acc;
//       }, {});
  
//       setdada({
//         ...userDataa,
//         telecomData,
//         addressData,
//       });
//     }
//   }, [isSuccess, isLoading, userData]);

 

//   if (isLoading) return <LoadingComponent />;
//   if (!userData) return <div>No data available</div>;

//   return (
//     <>
//       {isSuccess && !isLoading && (
//         <div>
//           <h3 dir="rtl" className="-mt-12 pb-6 text-2xl text-blue-700">
//             تفاصيل الحساب
//           </h3>
//           <div className="grid grid-cols-2 gap-4 p-4">
//             <NationalInformation data={dada} />

//            { dada.address && <AdressInformation data={dada} setData={setdada}  />}
//             {dada.address != null ? (
//               <ContactInformation
//                 data={dada}
//                 setData={setdada}              />
//             ) : null}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default UserDetailsView;

import NationalInformation from "./NationalInformation";
import ContactInformation from "./ContactInformation";
import { dataContact, dataLocation } from "../../../../data/data";
import {
  UserDetailsProvider,
  useDetailsUsers,
} from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../public/LoadingComponent ";
import AdressInformation from "./AdressInformation";

function UserDetailsView() {
  const { userData, isLoading, isSuccess } = useDetailsUsers();

  const [data, setData] = useState(null);


  useEffect(() => {
    if (isSuccess && !isLoading && userData) {
      const { userDetails } = userData;
      setData(userDetails);

      const telecomData = userDetails.telecom.reduce(
        (acc, { system, value, use }) => {
          if (!acc[system]) {
            acc[system] = [];
          }
          acc[system].push({ value, use });
          return acc;
        },
        {}
      );

      const addressData = userDetails.address.reduce((acc, { use, cityName }) => {
        if (!acc[use]) {
          acc[use] = [];
        }
        acc[use].push({ cityName });
        return acc;
      }, {});
      setData((prevState) => ({
        ...prevState,
        telecomData,
        addressData,
      }));
    }
  }, [isSuccess, isLoading, userData]);

  if (isLoading) return <LoadingComponent />;
  if (!userData) return <div>No data available</div>;



  return (
    
    <>
      {isSuccess && !isLoading && data &&  (
        <div>
          <h3 dir="rtl" className="-mt-12 pb-6 text-2xl text-blue-700">
            تفاصيل الحساب
          </h3>
          <div className="grid grid-cols-2 gap-4 p-4">
            <NationalInformation data={data} />

           { data.address && <AdressInformation data={data} setData={setData}  />}
            {data.address != null ? (
              <ContactInformation
                data={data}
                setData={setData}              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetailsView;