import CustomButton from "../public/button/CustomButton";
import { PlusIcon } from "@heroicons/react/20/solid";
import { bodyMeduimStyle } from "../../utils/StyleUtils";
import CustomTextField from "../public/textfield/CustomTextField";
import DatePickerr from "./DatePicker";
import { useAddPrescriptionState } from "./AddPrescriptionState";
import PublicHeader from "../manager_center/secretary/PublicHeader";
import patient from "../../assets/icons/addPaitentInfo/econamic_status.svg";
function AddPrescription() {
  const { state, updateState,postData } = useAddPrescriptionState();

  return (
    <>
      <div
        dir="rtl"
        className="w-full flex flex-col md:mr-48 bg-addPaitentInfoPage"
      >
        <PublicHeader icon={patient} title={"اضافة وصفة طبية"} />

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
            <>
              <div
                key={index}
                className="bg-slate-200 border p-3 rounded-xl m-3 "
              >
                <div className="grid grid-cols-2">
                  <div className="col-span-2">
                    <div className="w-3/4 mr-4 mt-3">
                      <div className="mt-3"></div>

                      <CustomTextField
                        size="3"
                        required={true}
                        label={"اسم الدواء :"}
                        value={contact.prescriptionName}
                        type="text"
                        onChange={(val) => {
                          state.updateContactInfo(index, {
                            prescriptionName: val.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="mr-3 mt-2">
                    <DatePickerr
                      contact={contact}
                      label={"تاريخ  بدء اخذ الدواء"}
                      index={index}
                    />
                  </div>
                  <div className="mr-3 mt-2">
                    <DatePickerr
                      contact={contact}
                      label={"تاريخ نهاية اخذ الدواء"}
                      index={index}
                    />
                  </div>

                  <div className="w-3/4 mr-4 mt-3">
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

                {/* زر الحفظ يلزم تعديلل */}
                <div className="flex justify-center mt-2">
                <CustomButton
                variant="solid"
                onClick={() => {
                  // state.addContactInfo();
                  postData(state.prescriptionInfo);
                }}
                className={`bg-addPaitentInfoPage text-gray700 h-10 shadow-xl transition-all font-semibold pl-6 ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <span className="text-sm">إضافة دواء</span>
                    <div className="w-2"></div>
                   
                  </div>
                }
                radius="full"
              />

                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddPrescription;
