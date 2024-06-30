/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import CustomButton from "../../public/button/CustomButton";
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { bodyMeduimStyle } from "../../../utils/StyleUtils";
// import { useNavigate } from "react-router-dom";
// import { secretariaAccountRoute } from "../../../data/data";
// import { useUsers } from "../../../pages/manager_center/users/users-list/UserListState";
// function Header() {
//   const navigate = useNavigate();
//   const { selectedOption, handleSelectChange  } = useUsers();

//   return (
//     <div className="mb-5 hidden sm:block ">
//       <div className="flex justify-between mt-5">
//         <CustomButton
//           variant="solid"
//           onClick={() => {
//             navigate(secretariaAccountRoute);
//           }}
//           className={`bg-bgLogin text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
//           title={
//             <div className="flex items-center justify-center">
//               <span className="text-sm">إضافة سكرتاريا</span>
//               <div className="w-2"></div>
//               <PlusIcon className="w-6 h-6 mr-2 text-gray700" />
//             </div>
//           }
//           radius="full"
//         />
//         <div className="flex items-end justify-end pr-2 w-2/4">
//           <div className="  relative w-2/12 mr-4 ">

//              <select
//               className="bg-search text-right w-full p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
//               value={selectedOption}
//               onChange={handleSelectChange}
//             >
//               <option>طبيب</option>
//               <option>ممرض</option>
//               <option>سكرتاريا</option>

//             </select>
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </div>
//           </div>
//           <input
//             type="text"
//             placeholder="...البحث"
//             className="bg-search text-right w-5/12 p-2.5  text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Header;

import CustomButton from "../../public/button/CustomButton";
import { PlusIcon } from "@heroicons/react/24/solid";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";
import { useNavigate } from "react-router-dom";

import { useUsers } from "../../../pages/manager_center/users/users-list/UserListState";
import {  SelectedTextFeild } from "../..";
import { useSelector } from "react-redux";
 import { secretariaAccountRoute } from "../../../data/data";

function Header({ setSearchTerm }) {
  const filter = {
    title: "نوع ",
    array: ["طبيب", "السكرتارية", "ممرض","الكل"],
  };
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const { selectedOption, handleSelectChange,isSuccessMedicalCenters, isLoadingMedicalCenters,  MedicalCenters , handleSelectCenterChange,selectedCenterOption} = useUsers();
 
  return (
    <>
    {
      isSuccessMedicalCenters && !isLoadingMedicalCenters && MedicalCenters && (
        <div className="mb-5 hidden sm:block ">
        <div className="flex justify-between mt-5">

          {
            user.role === "admin" && (

              <CustomButton
              variant="solid"
              onClick={() => {
                navigate("/app/secretaria_account");
              }}
              className={`bg-bgLogin text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
              title={
                <div className="flex items-center justify-center">
                  <span className="text-sm">إضافة سكرتاريا</span>
                  <div className="w-2"></div>
                  <PlusIcon className="w-6 h-6 mr-2 text-gray700" />
                </div>
              }
              radius="full"
            />

            )
          }
         

<CustomButton
            variant="solid"
            onClick={() => {
              navigate("/app/addUser");
            }}
            className={`bg-bgLogin text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
            title={
              <div className="flex items-center justify-center">
                <span className="text-sm">إضافة مستخدم</span>
                <div className="w-2"></div>
                <PlusIcon className="w-6 h-6 mr-2 text-gray700" />
              </div>
            }
            radius="full"
          />
          <div className="flex items-end justify-end pr-2 w-2/4">
            <div className="relative w-2/12 mr-4">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedOption}
                filter={filter.array}
                onSelect={handleSelectChange}
              />
            </div>
            {
              user.role === "superAdmin" && (
                <div className="relative w-2/12 mr-4">
              <SelectedTextFeild
                activeLabel={false}
                value={selectedCenterOption}
                filter={MedicalCenters?.centers?.map(center => center.centerName)}
                onSelect={handleSelectCenterChange}
              />
            </div>
              )
  
            }
            <input
              type="text"
              placeholder="...البحث"
              className="bg-search text-right w-5/12 p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
              onChange={(e) => setSearchTerm(e.target.value)}  
            />
          </div>
        </div>
      </div>
      )
    }
       
    </>

  );
}

export default Header;
