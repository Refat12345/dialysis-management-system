// import CustomButton from "../public/button/CustomButton";
// import { PlusIcon } from "@heroicons/react/20/solid";
// import { bodyMeduimStyle } from "../../utils/StyleUtils";
// import CustomTextField from "../public/textfield/CustomTextField";
// import AddPrescriptionState, { useAddPrescriptionState } from "./AddPrescriptionState";
// import PublicHeader from "../manager_center/secretary/PublicHeader";
// import addPrespictionIcon from "../../assets/icons/addPrespiction.svg";
// import SelectedTextFeild from "../public/textfield/SelectedTextFeild";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import React from "react";
// function AddPrescription() {

//   const { state, postData, userData } = useAddPrescriptionState();
//   const amount = {
//     array: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
//   };

//   return (
//     <>
//       <div
//         dir="rtl"
//         className="w-full flex flex-col md:mr-48 bg-addPaitentInfoPage"
//       >
//         <PublicHeader icon={addPrespictionIcon} title={"اضافة وصفة طبية"} />

//         <div className=" border p-3 rounded-xl m-3">
//           <div className="flex flex-row justify-between p-4">
//             <span className="mr-2">ادوية الوصفة</span>
//             <div className="ml-3">
//               <CustomButton
//                 variant="solid"
//                 onClick={() => {
//                   state.addContactInfo();
//                 }}
//                 className={`bg-addPaitentInfoPage text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
//                 title={
//                   <div className="flex items-center justify-center">
//                     <span className="text-sm">إضافة دواء</span>
//                     <div className="w-2"></div>
//                     <PlusIcon className="w-6 h-6 mr-2 text-gray700" />
//                   </div>
//                 }
//                 radius="full"
//               />
//             </div>
//           </div>

//           {state.prescriptionInfo.map((contact, index) => (
//             <React.Fragment key={index}>
//               <div
//                 key={index}
//                 className="bg-slate-200 border p-3 rounded-xl m-3 "
//               >
//                 <div className="grid grid-cols-2">
//                   <div>
//                     <div className="w-1/2 mr-4 mt-3">
//                       <div className="mt-3"></div>

//                       <SelectedTextFeild
//                         activeLabel={false}
//                         value={
//                           contact.prescriptionName === ""
//                             ? "اختر الدواء"
//                             : contact.prescriptionName
//                         }
//                         filter={userData}
//                         onSelect={(val) => {
//                           state.updateContactInfo(index, {
//                             prescriptionName: val,
//                           });
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <div className="w-1/2 mr-4 mt-3">
//                     <div className="mt-3"></div>

//                     <SelectedTextFeild
//                       activeLabel={false}
//                       value={
//                         contact.amount === undefined
//                           ? "اختر الكمية"
//                           : contact.amount
//                       }
//                       filter={amount.array}
//                       onSelect={(val) => {
//                         state.updateContactInfo(index, {
//                           amount: val,
//                         });
//                       }}
//                     />
//                   </div>

//                   <div className=" mr-3 mt-2 p-5">

//                     <div className="flex flex-col items-start justify-center">
//                       <label htmlFor="drugStartDate" className="text-lg mb-2">
//                         {"تاريخ بدء اخذ الدواء "}
//                       </label>
//                       <DatePicker
//                        className="w-72 h-8"
//                         id="start-date"
//                         selected={
//                           new Date(
//                             contact.yearStart,
//                             contact.monthStart - 1,
//                             contact.dayStart
//                           )
//                         }
//                         onChange={(date) => {
//                           const year = date.getFullYear();
//                           const month = date.getMonth() + 1;
//                           const day = date.getDate();
//                           state.updateContactInfo(index, {
//                             yearStart: year,
//                             monthStart: month,
//                             dayStart: day,
//                           });
//                         }}
//                         dateFormat="yyyy/MM/dd"
//                         placeholderText="اختر تاريخ البدء"
//                         calendarAriaLabel="اختر تاريخ البدء"
//                       />
//                     </div>
//                   </div>

//                   <div className="mr-3 mt-2 p-5">

//                     <div className="flex flex-col items-start justify-center">
//                       <label htmlFor="drugEndDate" className="text-lg mb-2">
//                         {"تاريخ نهاية اخذ الدواء "}
//                       </label>
//                       <DatePicker
//                        className="w-72 h-8"
//                         id="end-date"
//                         selected={
//                           new Date(
//                             contact.yearEnd,
//                             contact.monthEnd - 1,
//                             contact.dayEnd
//                           )
//                         }
//                         onChange={(date) => {
//                           const year = date.getFullYear();
//                           const month = date.getMonth() + 1;
//                           const day = date.getDate();
//                           state.updateContactInfo(index, {
//                             yearEnd: year,
//                             monthEnd: month,
//                             dayEnd: day,
//                           });
//                         }}
//                         dateFormat="yyyy/MM/dd"
//                         placeholderText="اختر تاريخ النهاية"
//                         calendarAriaLabel="اختر تاريخ النهاية"
//                       />
//                     </div>
//                   </div>

//                   <div className="w-1/2 mr-4 mt-3">
//                     <div className="mt-3"></div>

//                     <CustomTextField
//                       size="3"
//                       required={true}
//                       label={"تفاصيل عامة :"}
//                       value={contact.note}
//                       type="text"
//                       onChange={(val) => {
//                         state.updateContactInfo(index, {
//                           note: val.target.value,
//                         });
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </React.Fragment>
//           ))}
//           <div className="flex justify-end mt-2">
//             <CustomButton
//               variant="solid"
//               onClick={() => {
//                 postData(state.prescriptionInfo);
//               }}
//               className={`bg-headerTable w-full text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
//               title={
//                 <div className="flex items-center justify-center">
//                   <span className="text-sm w-full"> حفظ </span>
//                 </div>
//               }
//               radius="full"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddPrescription;
/////////
import CustomButton from "../public/button/CustomButton";
import { PlusIcon } from "@heroicons/react/20/solid";
import { bodyMeduimStyle } from "../../utils/StyleUtils";
import CustomTextField from "../public/textfield/CustomTextField";
import AddPrescriptionState, {
  useAddPrescriptionState,
} from "./AddPrescriptionState";
import PublicHeader from "../manager_center/secretary/PublicHeader";
import addPrespictionIcon from "../../assets/icons/addPrespiction.svg";
import SelectedTextFeild from "../public/textfield/SelectedTextFeild";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import CustomDatePicker from "../public/datepicker/CustomDatePicker";
import dayjs from "dayjs";  

function AddPrescription() {
  const { state, postData, userData } = useAddPrescriptionState();
  const amount = {
    array: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };

  return (
    <>
      <div
        dir="rtl"
        className="w-full flex flex-col md:mr-48 bg-addPaitentInfoPage"
      >
        <PublicHeader icon={addPrespictionIcon} title={"اضافة وصفة طبية"} />

        <div className=" border p-3 rounded-xl m-3">
          <div className="flex flex-row justify-between p-4">
            <span className="mr-2">ادوية الوصفة</span>
            <div className="ml-3">
              <CustomButton
                variant="solid"
                onClick={() => {
                  state.addContactInfo();
                }}
                className={`bg-addPaitentInfoPage text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <span className="text-sm">إضافة دواء</span>
                    <div className="w-2"></div>
                    <PlusIcon className="w-6 h-6 mr-2 text-gray700" />
                  </div>
                }
                radius="full"
              />
            </div>
          </div>

          {state.prescriptionInfo.map((contact, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                className="bg-slate-200 border p-3 rounded-xl m-3 "
              >
                <div className="grid grid-cols-2">
                  <div>
                    <div className="w-1/2 mr-4 mt-3">
                      <div className="mt-3"></div>

                      <SelectedTextFeild
                        activeLabel={false}
                        value={
                          contact.prescriptionName === ""
                            ? "اختر الدواء"
                            : contact.prescriptionName
                        }
                        filter={userData}
                        onSelect={(val) => {
                          state.updateContactInfo(index, {
                            prescriptionName: val,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 mr-4 mt-3">
                    <div className="mt-3"></div>

                    <SelectedTextFeild
                      activeLabel={false}
                      value={
                        contact.amount === undefined
                          ? "اختر الكمية"
                          : contact.amount
                      }
                      filter={amount.array}
                      onSelect={(val) => {
                        state.updateContactInfo(index, {
                          amount: val,
                        });
                      }}
                    />
                  </div>

                  <div className=" mr-3 mt-2 p-5 w-80">
                    <div className="flex flex-col items-start justify-center">
                      {/* <label htmlFor="drugStartDate" className="text-lg mb-2">
                        {"تاريخ بدء اخذ الدواء "}
                      </label>
                      <DatePicker
                       className="w-72 h-8"
                        id="start-date"
                        selected={
                          new Date(
                            contact.yearStart,
                            contact.monthStart - 1,
                            contact.dayStart
                          )
                        }
                        onChange={(date) => {
                          const year = date.getFullYear();
                          const month = date.getMonth() + 1;
                          const day = date.getDate();
                          state.updateContactInfo(index, {
                            yearStart: year,
                            monthStart: month,
                            dayStart: day,
                          });
                        }}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="اختر تاريخ البدء"
                        calendarAriaLabel="اختر تاريخ البدء"
                      /> */}
                      <CustomDatePicker
                        label="تاريخ بداية أخذ الدواء"
                        onSelect={(date) => {
                          const year = date.year();
                          const month = date.month() + 1; 
                          const day = date.date();
                          state.updateContactInfo(index, {
                            yearStart: year,
                            monthStart: month,
                            dayStart: day,
                          });
                        }}
                      />{" "}
                    </div>
                  </div>

                  <div className="mr-3 mt-2 p-5 w-80">
                    <div className="flex flex-col items-start justify-center">
                      {/* <label htmlFor="drugEndDate" className="text-lg mb-2">
                        {"تاريخ نهاية اخذ الدواء "}
                      </label>
                      <DatePicker
                        className="w-72 h-8"
                        id="end-date"
                        selected={
                          new Date(
                            contact.yearEnd,
                            contact.monthEnd - 1,
                            contact.dayEnd
                          )
                        }
                        onChange={(date) => {
                          const year = date.getFullYear();
                          const month = date.getMonth() + 1;
                          const day = date.getDate();
                          state.updateContactInfo(index, {
                            yearEnd: year,
                            monthEnd: month,
                            dayEnd: day,
                          });
                        }}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="اختر تاريخ النهاية"
                        calendarAriaLabel="اختر تاريخ النهاية"
                      /> */}
                       <CustomDatePicker
                        label="تاريخ نهاية اخذ الدواء"
                        onSelect={(date) => {
                          const year = date.year();
                          const month = date.month() + 1; 
                          const day = date.date();
                          state.updateContactInfo(index, {
                            yearEnd: year,
                            monthEnd: month,
                            dayEnd: day,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-1/2 mr-4 mt-3">
                    <div className="mt-3"></div>

                    <CustomTextField
                      size="3"
                      required={true}
                      label={"تفاصيل عامة :"}
                      value={contact.note}
                      type="text"
                      onChange={(val) => {
                        state.updateContactInfo(index, {
                          note: val.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          <div className="flex justify-end mt-2">
            <CustomButton
              variant="solid"
              onClick={() => {
                postData(state.prescriptionInfo);
              }}
              className={`bg-headerTable w-full text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
              title={
                <div className="flex items-center justify-center">
                  <span className="text-sm w-full"> حفظ </span>
                </div>
              }
              radius="full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPrescription;
