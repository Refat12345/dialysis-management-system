/* eslint-disable no-unused-vars */
import {
  econamic_status,
  education,
  family_status,
  home_location,
  patient,
  society_status,
  work,
} from "../../assets/index";
import { useAddPatientInfoMutation } from "./../../services/secretariat/patient_profile/AddPatientProfileSlice";

import React from "react";
import PublicHeader from "../manager_center/secretary/PublicHeader";
import HeaderTextField from "./HeaderTextField";
import CustomTextField from "../public/textfield/CustomTextField";
import SelectedTextFeild from "../public/textfield/SelectedTextFeild";
import { useAddPaitentInfoState } from "./AddPaitentInfoState";
import Row from "../public/primitives/Row";
import Column from "../public/primitives/Column";
import patientIcon from "../../assets/icons/addPaitentInfo/econamic_status.svg";
import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../../utils/StyleUtils";

import ContactSecretariaComponent from "../../pages/manager_center/secretaria_account/secretaria_sections/ContactSecretariaComponent";
import CustomButton from "../public/button/CustomButton";
import { PlusIcon } from "@heroicons/react/20/solid";
function AddPaitentInfo() {
  const { state, updateState } = useAddPaitentInfoState();

  const genderFilter = {
    array: ["سوري", "فلسطيني", "اردني", "اجنبي"],
    title: "الجنسية",
  };

  const relativeRelationFilter = {
    array: ["اخ", "ابن عم", "ام", "اب"],
    title: "صلة القرابة",
  };

  const statusFilter = {
    array: ["مقبول", "انتظار", "مرفوض", "معلق"],
    title: "حالة الحساب",
  };

  const useFilter = ["المنزل", "العمل"];
  const typeContactFilter = ["الهاتف", "البريد الالكتروني"];
  const typeAddressFilter = [
    "دمشق",
    "حلب",
    "حمص",
    "حماة",
    "اللاذقية",
    "طرطوس",
    "دير الزور",
    "الرقة",
    "الحسكة",
    "إدلب",
    "درعا",
    "السويداء",
    "القنيطرة",
    "بانياس",
    "القامشلي",
    "تدمر",
    "ريف دمشق",
  ];
  const LearnFilter = {
    array: ["ثانوي", "جامعي"],
    title: "التعليم",
  };

  const economicSituationFilter = {
    array: ["متوسط", "عالي", "منخفض"],
    title: "المستوى",
  };

  const economicTypeFilter = {
    array: ["ثابت", "متغير"],
    title: "ثابت",
  };

  const economicSourceFilter = {
    array: ["عقد عمل", "وظيفة"],
    title: "وظيفة",
  };

  const location = {
    array: ["ايجار", "ملك"],
    title: "ايجار",
  };
  return (
    <div
      dir="rtl"
      className="w-full flex flex-col lg:mr-48 md:mr-48 bg-addPaitentInfoPage"
    >
      <PublicHeader title={"اضافة المعلومات العامة"} icon={patientIcon} />

      <div className="grid grid-cols-2">
        <div>
          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={society_status} text={"الوضع الاجتماعي"} />
            <div className="mt-3"></div>

            <SelectedTextFeild
              label={genderFilter.title}
              value={state.genderValue === "" ? "الجنسية" : state.genderValue}
              filter={genderFilter.array}
              onSelect={(val) => state.selectGender(val)}
            />
          </div>
          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={education} text={"التعليم"} />
            <div className="mt-3"></div>

            <SelectedTextFeild
              label={"المستوى التعليمي"}
              value={state.LearnValue === "" ? "التعليم" : state.LearnValue}
              filter={LearnFilter.array}
              onSelect={(val) => state.selectLearn(val)}
            />
          </div>

          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={econamic_status} text={"الوضع الاقتصادي"} />
            <div className="mt-3"></div>

            <CustomTextField
              size="3"
              required={true}
              label={"الدخل العام"}
              value={state.publicIncome}
              type="number"
              onChange={(e) =>
                updateState({
                  publicIncome: e.target.value,
                })
              }
            />
          </div>
          <div className="w-3/4 mr-4 mt-3">
            <SelectedTextFeild
              label={"نوع الدخل "}
              value={state.economicType === "" ? "اختر نوع الدخل" : state.economicType}
              filter={economicTypeFilter.array}
              onSelect={(val) => state.selectEconomicType(val)}
            />
          </div>
          <div className="w-3/4 mr-4 mt-3">
            <SelectedTextFeild
              label={"مصدر الدخل "}
              value={
                state.economicSource === "" ? "اختر مصدر الدخل" : state.economicSource
              }
              filter={economicSourceFilter.array}
              onSelect={(val) => state.selectEconomicSource(val)}
            />
          </div>
        </div>

        <div>
          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={family_status} text={"الوضع العائلي"} />
            <div className="mt-3"></div>

            <CustomTextField
              size="3"
              required={true}
              label={"عدد الاولاد"}
              value={state.nationaltyNumber}
              type="number"
              onChange={(e) =>
                updateState({
                  nationaltyNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="w-3/4 mr-4 mt-3">
            <CustomTextField
              size="3"
              required={true}
              label={"الحالة الصحية للأولاد"}
              value={state.childreStatus}
              type="text"
              onChange={(e) =>
                updateState({
                  childreStatus: e.target.value,
                })
              }
            />
          </div>

          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={work} text={"العمل"} />
            <div className="mt-3"></div>

            <CustomTextField
              size="3"
              required={true}
              label={"طبيعة العمل "}
              value={state.work}
              type="text"
              onChange={(e) =>
                updateState({
                  work: e.target.value,
                })
              }
            />
          </div>

          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={home_location} text={"السكن"} />
            <div className="mt-3"></div>

            <SelectedTextFeild
              label={"الاقامة"}
              value={state.location === "" ? "اختر نوع الاقامة" : state.location}
              filter={location.array}
              onSelect={(val) => state.selectLocation(val)}
            />
          </div>


          {/* /// */}
          <div className="w-3/4 mr-4 mt-3">
            <HeaderTextField icon={home_location} text={"حالة الحساب"} />
            <div className="mt-3"></div>

            <SelectedTextFeild
              label={"الحالة"}
              value={state.status === "" ? "اختر الحالة" : state.status}
              filter={statusFilter.array}
              onSelect={(val) => state.selectStatus(val)}
            />
          </div>
          {
            state.status === "مرفوض" || state.status === "انتظار" ?  <div className="w-3/4 mr-4 mt-3">
            <div className="mt-3"></div>

            <CustomTextField
              size="3"
              required={true}
              label={"السبب"}
              value={state.reasonOfStatus}
              type="text"
              onChange={(e) =>
                updateState({
                  reasonOfStatus: e.target.value,
                })
              }
            />
          </div>  : null
          }


        </div>
      </div>


      {/* /////////////////////// //////////////////////////////*/}
      <div className="mt-7"></div>
      <HeaderTextField text={"مرافق المريض"} width={"كامل"} />
      <div className="mt-3"></div>

      <Row>
        <div className="w-6/12 mr-4 ml-2">
          <CustomTextField
            size="3"
            required={true}
            label={"اسم المستخدم:"}
            placeholder="اسم المستخدم"
            value={state.username}
            type="text"
            onChange={(e) =>
              updateState({
                username: e.target.value,
              })
            }
          />
        </div>
        <div className="w-6/12 mr-4 ml-4">
          <SelectedTextFeild
            label={"صلة القرابة"}
            value={
              state.relativeRelation === "" ? "اختر صلة القرابة" : state.relativeRelation
            }
            filter={relativeRelationFilter.array}
            onSelect={(val) => state.selectrelativeRelation(val)}
          />
        </div>
      </Row>

      <div className="mt-3"></div>

      <div className="mr-4">
        <Column>
          <p dir="rtl" className={`font-medium ${bodyMeduimStyle} w-full`}>
            {"معلومات التواصل:"}
          </p>

          <div className="h-1"></div>

          {state.contactInfo.map((contact, index) => (
            <ContactSecretariaComponent
              key={index}
              selectUse={(val) => state.updateContactInfo(index, { use: val })}
              useValue={contact.use}
              filterUse={useFilter}
              filterType={typeContactFilter}
              typeValue={contact.type}
              selectType={(val) =>
                state.updateContactInfo(index, { type: val })
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
                <span className={`${bodySmallStyle}`}>إضافة معلومة تواصل</span>
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
              selectUse={(val) => state.updateAddressInfo(index, { use: val })}
              useValue={contact.use}
              filterUse={useFilter}
              filterType={typeAddressFilter}
              typeValue={contact.cityName}
              selectType={(val) =>
                state.updateAddressInfo(index, { cityName: val })
              }
              value={contact.line}
              onChange={(val) => {
                state.updateAddressInfo(index, { line: val.target.value });
              }}
              onRemove={() => state.removeAddressInfo(index)}
              showDeleteButton={state.addressInfo.length > 1}
              firstLabel={"الاستخدام"}
              secondLabel={"المدينة"}
              type={"سكن"}
              val={contact.countryName}
              onChangeCountryName={(val) => {
                state.updateAddressInfo(index, {
                  countryName: val.target.value,
                });
              }}
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
                <span className={`${bodySmallStyle}`}>إضافة عناون</span>
                <div className="lg:w-2 md:w-2 w-1"></div>
                <PlusIcon className="w-5 h-5 mr-1 text-white" />
              </div>
            }
            radius="full"
          />
        </Column>
      </div>

      {/* <div className="mt-3"></div>

      <span className="mr-4 text-xl">ملاحظات:</span>
      <div className="w-full mr-4 ml-2 ">
        <CustomTextField
          size="3"
          required={true}
          placeholder="ادخل الملاحظة..."
          value={state.note}
          type="text"
          onChange={(e) =>
            updateState({
              note: e.target.value,
            })
          }
        />
      </div> */}

      <div className="mt-3"></div>
      <div dir="ltr" className="ml-3 mb-5 ">
        <CustomButton
          variant="solid"
          onClick={() => {
            const data = {
              maritalStatus: state.genderValue,
              status: state.status,
              reasonOfStatus: state.reasonOfStatus,
              educationalLevel: state.LearnValue,

              generalIncome: state.publicIncome,

              incomeType: state.economicType,

              sourceOfIncome: state.economicSource,
              workDetails: state.work,
              residenceType: state.location,
              fullName: state.username,
              degreeOfKinship: state.relativeRelation,
              patientID: '15',
              childrenNumber: state.nationaltyNumber,
              healthStateChildren: state.childreStatus,
              telecomDataArray: state.contactInfo,
              address: state.addressInfo,
            };
            console.log("is", data);
            // addPatientInfo(state).unwrap()
            // .then((payload) => {
            //   // هنا يمكنك التعامل مع الاستجابة في حالة النجاح
            //   console.log(payload);
            // })
            // .catch((error) => {
            //   // هنا يمكنك التعامل مع الأخطاء
            //   console.error(error);
            // });
          }}
          className={`w-40  bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
          title={
            <div className="flex items-center justify-center">
              <span className={`${bodySmallStyle}`}>حفظ</span>
              <div className="lg:w-2 md:w-2 w-1"></div>
            </div>
          }
          radius="full"
        />
      </div>
    </div>
  );
}

export default AddPaitentInfo;
