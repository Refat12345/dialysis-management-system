import { Column, Row } from "../../components";
import { useAddUserState } from "./CreateUserState";
import { UserNumberIcon, LoginUserIcon } from "../../assets/index";
import { CustomTextField } from "../../components";
import UserImage from "../../assets/icons/medical-center/users/users-list/nurse.svg";
import { SelectedTextFeild } from "../../components";
import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../../utils/StyleUtils";
import { CustomDatePicker } from "../../components";
import ContactSecretariaComponent from "../../pages/manager_center/secretaria_account/secretaria_sections/ContactSecretariaComponent";
import { PlusIcon } from "@heroicons/react/16/solid";
import { CustomButton } from "../../components";
import { useAddUserMutation } from "../../services/manager_center/user/AddUserSlice";
import {
  typeAddressFilter,
  genderFilter,
  typeContactFilter,
  useFilter,
  rolefilter,
} from "../../pages/manager_center/secretaria_account/secretaria_sections/secretariaData";
import { PublicHeader } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const AddUser = () => {
  const { state, updateState } = useAddUserState();
  const [addUser] = useAddUserMutation();
  const [loading, setLoading] = useState(false);

  let role;
  if (state.role === "patient") {
    role = "مريض";
  } else if (state.role === "doctor") {
    role = "طبيب";
  } else if (state.role === "nurse") {
    role = "ممرض";
  } else {
    role = state.role;
  }

  const handelAddUser = async () => {
    if (
      !state.username ||
      !state.nationaltyNumber ||
      !state.birthdate ||
      !state.genderValue ||
      !state.role ||
      state.contactInfo.some(
        (contact) => !contact.use || !contact.system || !contact.value
      ) ||
      state.addressInfo.some(
        (address) =>
          !address.use ||
          !address.cityName ||
          !address.line 
          
      )
    ) {
      toast.error("يرجى تعبئة جميع الحقول");
      return;
    }

    if (state.nationaltyNumber.length !== 11) {
      toast.error("يجب أن يحتوي الرقم الوطني على 11 خانة");
      return;
    }

    const data = {
      fullName: state.username,
      nationalNumber: state.nationaltyNumber,
      dateOfBirth: state.birthdate.format("YYYY-MM-DD"),
      gender: state.genderValue,
      role: state.role,
      telecom: state.contactInfo,
      address: state.addressInfo,
    };

    try {
      setLoading(true);
      const result = await addUser(data);

      if (result.data === undefined) {
        toast.error(`حدث خطأ: ${result.error.data["error"]}`);
      } else {
        toast.success("تمت الاضافة بنجاح");
        updateState({
          username: "",
          nationaltyNumber: "",
          birthdate: null,
          genderValue: "",
          role: "",
          contactInfo: [{ use: "", system: "", value: "" }],
          addressInfo: [{ use: "", cityName: "", line: "", countryName: "" }],
        });
      }
    } catch (error) {
      toast.error("حدث خطأ اثناء الاضافة");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        dir="rtl"
        className="w-full flex flex-col lg:mr-48 md:mr-48 bg-bgDashboard"
      >
        <PublicHeader title={"إضافة مستخدم"} icon={UserImage} />
        <div className="h-screen lg:pt-4 md:pt-4 pt-2 lg:pl-10 md:pl-8 pl-4 transition-all">
          <Row mainAxisAlignment="justify-evenly">
            <div className="w-1/2 mr-4">
              <CustomTextField
                size="3"
                required={true}
                label={"اسم المستخدم:"}
                placeholder="اسم المستخدم"
                value={state.username}
                prefixIcon={<img src={LoginUserIcon} alt="" />}
                type="text"
                onChange={(e) =>
                  updateState({
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="w-1/2 mr-4">
              <CustomTextField
                size="3"
                required={true}
                label={"الرقم الوطني:"}
                placeholder="الرقم الوطني"
                value={state.nationaltyNumber}
                prefixIcon={<img src={UserNumberIcon} alt="" />}
                type="number"
                onChange={(e) =>
                  updateState({
                    nationaltyNumber: e.target.value,
                  })
                }
              />
            </div>
          </Row>
          <div className={`${heightSmall}`}></div>
          <Row mainAxisAlignment="justify-evenly">
            <div className="w-1/2 mr-4">
              <SelectedTextFeild
                label={genderFilter.title}
                value={state.genderValue === "" ? "الجنس" : state.genderValue}
                filter={genderFilter.array}
                onSelect={(val) => state.selectGender(val)}
              />
            </div>
            <div className="w-1/2 mr-4">
              <CustomDatePicker
                label="تاريخ الميلاد"
                date={state.birthdate}
                onSelect={state.selectDate}
              />
            </div>
            <div className="w-1/2 mr-4">
              <SelectedTextFeild
                label={rolefilter.title}
                value={role === "" ? "الدور" : role}
                filter={rolefilter.array}
                onSelect={(val) => state.selectRole(val)}
              />
            </div>
          </Row>
          <div className={`${heightSmall}`}></div>
          <div className="mr-4">
            <Column>
              <p dir="rtl" className={`font-medium ${bodyMeduimStyle} w-full`}>
                {"معلومات التواصل:"}
              </p>
              <div className="h-1"></div>
              {state.contactInfo.map((contact, index) => (
                <ContactSecretariaComponent
                  key={index}
                  selectUse={(val) =>
                    state.updateContactInfo(index, { use: val })
                  }
                  useValue={contact.use}
                  filterUse={useFilter}
                  filterType={typeContactFilter}
                  typeValue={contact.system}
                  selectType={(val) =>
                    state.updateContactInfo(index, { system: val })
                  }
                  value={contact.value}
                  onChange={(val) => {
                    state.updateContactInfo(index, { value: val.target.value });
                  }}
                  onRemove={() => state.removeContactInfo(index)}
                  showDeleteButton={state.contactInfo.length > 1}
                  firstLabel="الاستخدام"
                  secondLabel="النوع"
                />
              ))}
              <div className="h-3"></div>
              <CustomButton
                variant="solid"
                onClick={() => {
                  state.addContactInfo();
                }}
                className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <span className={`${bodySmallStyle}`}>
                      إضافة معلومة تواصل
                    </span>
                    <div className="lg:w-2 md:w-2 w-1"></div>
                    <PlusIcon className="w-5 h-5 mr-1 text-white" />
                  </div>
                }
                radius="full"
              />
            </Column>
            <div className="h-3"></div>
            <Column>
              <p dir="rtl" className={`font-medium ${bodyMeduimStyle} w-full`}>
                {"العنوان:"}
              </p>
              <div className="h-1"></div>
              {state.addressInfo.map((contact, index) => (
                // <ContactSecretariaComponent
                //   key={index}
                //   selectUse={(val) =>
                //     state.updateAddressInfo(index, { use: val })
                //   }
                //   useValue={contact.use}
                //   filterUse={useFilter}
                //   filterType={typeAddressFilter}
                //   typeValue={contact.cityName}
                //   selectType={(val) =>
                //     state.updateAddressInfo(index, { cityName: val })
                //   }
                //   value={contact.line}
                //   onChange={(val) => {
                //     state.updateAddressInfo(index, { line: val.target.value });
                //   }}
                //   onRemove={() => state.removeAddressInfo(index)}
                //   showDeleteButton={state.addressInfo.length > 1}
                //   firstLabel={"الاستخدام"}
                //   secondLabel={"المدينة"}
                //   type={"سكن"}
                //   val={contact.countryName}
                //   onChangeCountryName={(val) => {
                //     state.updateAddressInfo(index, {
                //       countryName: val.target.value,
                //     });
                //   }}
                // />
                <ContactSecretariaComponent
                key={index}
                selectUse={(val) => state.updateAddressInfo(index, { use: val })}
                useValue={contact.use}
                filterUse={useFilter}
                filterType={typeAddressFilter}
                typeValue={contact.cityName}
                selectType={(val) => state.updateAddressInfo(index, { cityName: val })}
                value={contact.line}
                onChange={(val) => {
                  state.updateAddressInfo(index, { line: val.target.value })
                }}
                onRemove={() => state.removeAddressInfo(index)}
                showDeleteButton={state.addressInfo.length > 1}
                firstLabel={"الاستخدام"}
                secondLabel={"المدينة"}
              />

              ))}
              <div className="h-3"></div>
              <CustomButton
                variant="solid"
                onClick={() => {
                  state.addAddressInfo();
                }}
                className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <span className={`${bodySmallStyle}`}>إضافة عنوان</span>
                    <div className="lg:w-2 md:w-2 w-1"></div>
                    <PlusIcon className="w-5 h-5 mr-1 text-white" />
                  </div>
                }
                radius="full"
              />
            </Column>
            <div className="h-5"></div>

            <div className="flex justify-center">
              <CustomButton
                variant="solid"
                onClick={handelAddUser}
                className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    {loading ? (
                      <span className={`${bodySmallStyle}`}>
                        جاري التحميل...
                      </span>
                    ) : (
                      <>
                        <span className={`${bodySmallStyle}`}>اضافة</span>
                        <div className="lg:w-2 md:w-2 w-1"></div>
                      </>
                    )}
                  </div>
                }
                radius="full"
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
