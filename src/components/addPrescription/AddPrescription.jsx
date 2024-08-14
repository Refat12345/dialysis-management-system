
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
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import CustomPP from "./CustomPP";
import { ToastContainer } from "react-toastify";

function AddPrescription() {
  const { state, postData, userData } = useAddPrescriptionState();
  const amount = {
    array: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };

  return (
    <>
    <ToastContainer/>
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
                     
                      <CustomPP
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
                    
                       <CustomPP
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
