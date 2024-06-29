/* eslint-disable no-unused-vars */
import { PaginationComponent, SideBar } from "../../../../components";
import Header from "../../../../components/manager_center/users/Header";
import ViewCard from "../../../../components/manager_center/users/ViewCard";
import React, { useState, useEffect } from "react";
import { PageLoader } from "../../../../components/index";
import { useUsers } from "./UserListState";
const UsersListPage = () => {
  const { userData, isLoading, isSuccess, setSearchTerm, filteredData } =
    useUsers();
  const [searchTerm, setSearchTermState] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);



  useEffect(() => {
    if (searchTerm) {
      if (filteredData.length) {
        setNoResultsFound(false);
      } else {
        setNoResultsFound(true);
      }
    } else {
      setNoResultsFound(false);
    }
  }, [searchTerm, filteredData]);

  if (isLoading)
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  if (!userData.length && !searchTerm) return <div>No data available</div>;

  return (
    <>
      {isSuccess && !isLoading && (
        <div className="flex-grow mr-56 ml-8">
          <Header
            title={"user"}
            setSearchTerm={(term) => {
              setSearchTermState(term);
              setSearchTerm(term);
            }}
          />
          {noResultsFound ? (
            <div
              className="no-results-message"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p>لم نعثر على أي نتائج مطابقة لبحثك.</p>
                <p>جرب كلمات مفتاحية مختلفة أو قم بتوسيع نطاق البحث.</p>
              </div>
            </div>
          ) : (
            <PaginationComponent
              data={filteredData.length ? filteredData : userData}
              RenderComponent={ViewCard}
              itemsPerPage={4}
            />
          )}
        </div>
      )}
    </>
  );
};

export default UsersListPage;

/* eslint-disable no-unused-vars */
// import {
//   CustomButton,
//   PaginationComponent,
//   SideBar,
// } from "../../../../components";
// import Header from "../../../../components/manager_center/users/Header";
// import ViewCard from "../../../../components/manager_center/users/ViewCard";
// import React, { useState, useEffect } from "react";
// import LoadingComponent from "../../../../components/public/LoadingComponent ";
// import { useUsers } from "./UserListState";
// import s1 from "./../../../../assets/icons/s1.svg";
// import {
//   bodyMeduimStyle,
//   bodySmallStyle,
//   heightSmall,
// } from "../../../../utils/StyleUtils";
// const UsersListPage = () => {
//   const { userData, isLoading, isSuccess, setSearchTerm, filteredData } =
//     useUsers();
//   const [searchTerm, setSearchTermState] = useState("");
//   const [noResultsFound, setNoResultsFound] = useState(false);

//   useEffect(() => {
//     if (searchTerm) {
//       if (filteredData.length) {
//         setNoResultsFound(false);
//       } else {
//         setNoResultsFound(true);
//       }
//     } else {
//       setNoResultsFound(false);
//     }
//   }, [searchTerm, filteredData]);

//   if (isLoading) return <LoadingComponent />;
//   if (!userData.length && !searchTerm) return <div>No data available</div>;

//   return (
//     <>
//       <div className="flex-grow mr-56 ml-8" dir="rtl">
//         <div
//           className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 "
//           dir="rtl"
//         >
//           <div>
//             <div className=" bg-white w-full flex flex-col justify-start rounded-lg ">
//               <div className="cardOneHeader flex flex-row justify-start ">
//                 <img src={s1} />
//                 <h5 className="text-textButtonColor text-xl mr-2 mt-1">
//                   جلسة غسيل الكلى
//                 </h5>
//               </div>

//               <div className="cardGrid grid grid-cols-2 ">
//                 <div className="flex flex-row justify-start ">
//                   <img className="w-5 h-5" src={s1} />

//                   <h4 className="text-right mr-2">العنوان</h4>
//                 </div>
//                 <h4 className="text-right">سامر </h4>

//                 <div className="flex flex-row justify-start mt-2">
//                   <img className="w-5 h-5" src={s1} />

//                   <h4 className="text-right mr-2">رقم التواصل</h4>
//                 </div>
//                 <h4 className="text-right">سامر </h4>

//                 <div className="flex flex-row justify-start mt-2">
//                   <img className="w-5 h-5" src={s1} />

//                   <h4 className="text-right mr-2">اسم المرافق</h4>
//                 </div>
//                 <h4 className="text-right">سامر </h4>

//                 <div className="flex flex-row justify-start mt-2">
//                   <img className="w-5 h-5" src={s1} />

//                   <h4 className="text-right mr-2">رقم المرافق</h4>
//                 </div>
//                 <h4 className="text-right">سامر </h4>

//               </div>

//               <div className="flex justify-end mt-3 ml-5 mb-4">
//                 <CustomButton
//                   variant="solid"
//                   onClick={() => {}}
//                   className={`bg-blue-800 text-white h-8 transition-all font-semibold ${bodyMeduimStyle} `}
//                   title={
//                     <div className="flex items-center justify-center">
//                       <span className={`${bodySmallStyle}`}>
//                           اعطاء موعد
//                       </span>
//                       <div className="lg:w-2 md:w-2 w-1"></div>
//                     </div>
//                   }
//                 />

//                 <CustomButton
//                   variant="solid"
//                   onClick={() => {}}
//                   className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle} mr-2`}
//                   title={
//                     <div className="flex items-center justify-center">
//                       <span className={`${bodySmallStyle}`}>
//                         اضافة الى قائمة الانتظار
//                       </span>
//                       <div className="lg:w-2 md:w-2 w-1"></div>
//                     </div>
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UsersListPage;
