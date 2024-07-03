import { Column, Row } from "../../../components";
import { useCreateSecretaryAccountState } from "./CreateSecretariaAccountState";
import { UserNumberIcon, LoginUserIcon } from "../../../assets/index";
import CustomTextField from "../../../components/public/textfield/CustomTextField";
import { SecretaryImage } from "../../../assets/index";
import SelectedTextFeild from "../../../components/public/textfield/SelectedTextFeild";
import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../../../utils/StyleUtils";
import CustomDatePicker from "../../../components/public/datepicker/CustomDatePicker";
import ContactSecretariaComponent from "./secretaria_sections/ContactSecretariaComponent";
import { PlusIcon } from "@heroicons/react/16/solid";
import CustomButton from "../../../components/public/button/CustomButton";
import {
  typeAddressFilter,
  genderFilter,
  permissionsOptions,
  typeContactFilter,
  useFilter,
} from "./secretaria_sections/secretariaData";
import MultiSelectTextField from "../../../components/public/textfield/MultiSelectTextField";
import { PublicHeader } from "../../../components";

const CreateSecretariaAccountPage = () => {
  const {
    state,
    selectGender,
    selectDate,
    updateContactInfo,
    updateAddressInfo,
    addContactInfo,
    removeContactInfo,
    addAddressInfo,
    removeAddressInfo,
    handleSelectPermission,
    removePermissions,
    updateState,
    handleSubmit,
    isLoading,
  } = useCreateSecretaryAccountState();

  return (
    <div
      dir="rtl"
      className="w-full flex flex-col lg:mr-48 md:mr-48 bg-bgDashboard"
    >
      <PublicHeader title={"إضافة سكرتاريا"} icon={SecretaryImage} />
      <div className="h-screen lg:pt-4 md:pt-4 pt-2 lg:pl-10 md:pl-8 pl-4 transition-all">
        <form onSubmit={handleSubmit}>
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
                onSelect={(val) => selectGender(val)}
              />
            </div>
            <div className="w-1/2 mr-4">
              <CustomDatePicker
                label="تاريخ الميلاد"
                date={state.birthdate}
                onSelect={selectDate}
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
                  selectUse={(val) => updateContactInfo(index, { use: val })}
                  useValue={contact.use}
                  filterUse={useFilter}
                  filterType={typeContactFilter}
                  typeValue={contact.type}
                  selectType={(val) => updateContactInfo(index, { type: val })}
                  value={contact.value}
                  onChange={(val) => {
                    updateContactInfo(index, { value: val.target.value });
                  }}
                  onRemove={() => removeContactInfo(index)}
                  showDeleteButton={state.contactInfo.length > 1}
                  firstLabel="الاستخدام"
                  secondLabel="النوع"
                />
              ))}
              <div className="h-3"></div>
              <CustomButton
                variant="solid"
                onClick={(e) => {
                  e.preventDefault();
                  addContactInfo();
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
                <ContactSecretariaComponent
                  key={index}
                  selectUse={(val) => updateAddressInfo(index, { use: val })}
                  useValue={contact.use}
                  filterUse={useFilter}
                  filterType={typeAddressFilter}
                  typeValue={contact.city}
                  selectType={(val) => updateAddressInfo(index, { city: val })}
                  value={contact.line}
                  onChange={(val) => {
                    updateAddressInfo(index, { line: val.target.value });
                  }}
                  onRemove={() => removeAddressInfo(index)}
                  showDeleteButton={state.addressInfo.length > 1}
                  firstLabel={"الاستخدام"}
                  secondLabel={"المدينة"}
                />
              ))}
              <div className="h-3"></div>
              <CustomButton
                variant="solid"
                onClick={(e) => {
                  e.preventDefault();
                  addAddressInfo();
                }}
                className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <span className={`${bodySmallStyle}`}>إضافة عناون</span>
                    <div className="lg:w-2 md:w-2 w-1"></div>
                    <PlusIcon className="w-5 h-5 mr-1 text-white" />
                  </div>
                }
                radius="full"
              />
            </Column>
            <div className="h-5"></div>
            <Column>
              <p dir="rtl" className={`font-medium ${bodyMeduimStyle} w-5/6`}>
                {"الصلاحيات:"}
              </p>
              <div className="h-1"></div>
              <MultiSelectTextField
                activeLabel={false}
                label="الصلاحيات لهذا المستخدم"
                selectedValues={state.permissions}
                filter={permissionsOptions}
                onSelect={(val) => {
                  handleSelectPermission(val);
                }}
                onRemove={(val) => removePermissions(val)}
              />
            </Column>
            <div className="h-5"></div>
            <Row mainAxisAlignment="justify-end">
              <CustomButton
                variant="solid"
                type="submit"
                loading={isLoading}
                className={`bg-bgbutton text-white h-10 transition-all font-semibold ${bodyMeduimStyle}`}
                title={
                  <div className="flex items-center justify-center">
                    <PlusIcon className="w-5 h-5 mr-1 text-white" />
                    <div className="lg:w-2 md:w-2 w-1"></div>
                    <span className={`${bodySmallStyle}`}>حفظ المعلومات</span>
                  </div>
                }
                radius="full"
              />
            </Row>
          </div>
          <div className="h-5"></div>
        </form>
      </div>
    </div>
  );
};

export default CreateSecretariaAccountPage;
