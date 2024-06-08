/* eslint-disable react/prop-types */
import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";

function ContactInformation({ data }) {
//   const { isLoading, isSuccess } = useDetailsUsers();

//   if (!data || !data.telecomData) {
//     return <div>جاري تحميل المعلومات...</div>;
//   }

//   return (
//     <>
//       {isSuccess && !isLoading && data.length != 0 && (
//         <div className="border p-4 rounded-xl bg-whiteCard" style={{ height: "300px" }}>
//           <div className="flex flex-row justify-end  mt-2 mb-2 ">
//             <div dir="ltr" className="flex flex-grow justify-start items-center"> 
//               <img src={contact} />            
//           </div>
//             <h3 className="text-xl text-bgtitle">معلومات التواصل</h3>
//           </div>
//           <div className="flex flex-row-reverse  ">
//             <div className="flex flex-col gap-2 mt-3">
//               {data.telecomData.phone[0]?.value !== undefined ? (
//                 <>
//                   <h3 className="text-right">:الجوال</h3>
//                   <h3 className="text-right">
//                     {data.telecomData.phone[0].value}
//                   </h3>
//                 </>
//               ) : null}
//               {data.telecomData.phone[1]?.value !== undefined ? (
//                 <>
//                   <h3 className="text-right">الهاتف</h3>
//                   <h3 className="text-right">
//                     {data.telecomData.phone[1].value}
//                   </h3>
//                 </>
//               ) : null}

// {
//   data.telecomData.gmail && data.telecomData.gmail.length > 0 && data.telecomData.gmail[0].value ? (
//     <>
//       <div className="flex flex-col gap-2">
//         <h3 className="text-right mt-2">البريد الاكتروني</h3>
//         <h3 className="text-right">
//           {data.telecomData.gmail[0].value}
//         </h3>
//       </div>
//     </>
//   ) : null
// }
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );



const { isLoading, isSuccess } = useDetailsUsers();

// التحقق من وجود البيانات والتأكد من أن telecomData ليست فارغة
if (!data || !data.telecomData || (data.telecomData.phone && data.telecomData.phone.length === 0) && (!data.telecomData.gmail || data.telecomData.gmail.length === 0)) {
  return <div>جاري تحميل المعلومات...</div>;
}

return (
  <>
    {isSuccess && !isLoading && (
      <div className="border p-4 rounded-xl bg-whiteCard" style={{ height: "300px" }}>
        <div className="flex flex-row justify-end  mt-2 mb-2 ">
          <div dir="ltr" className="flex flex-grow justify-start items-center"> 
            <img src={contact} alt="Contact Information" />            
          </div>
          <h3 className="text-xl text-bgtitle">معلومات التواصل</h3>
        </div>
        <div className="flex flex-row-reverse  ">
          <div className="flex flex-col gap-2 mt-3">
            {data.telecomData.phone?.[0]?.value && (
              <>
                <h3 className="text-right">:الجوال</h3>
                <h3 className="text-right">
                  {data.telecomData.phone[0].value}
                </h3>
              </>
            )}
            {data.telecomData.phone?.[1]?.value && (
              <>
                <h3 className="text-right">الهاتف</h3>
                <h3 className="text-right">
                  {data.telecomData.phone[1].value}
                </h3>
              </>
            )}
            {data.telecomData.gmail?.[0]?.value && (
              <>
                <div className="flex flex-col gap-2">
                  <h3 className="text-right mt-2">البريد الاكتروني</h3>
                  <h3 className="text-right">
                    {data.telecomData.gmail[0].value}
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default ContactInformation;
