/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import {
  GlobalInfoAddressIcon,
  GlobalInfoContactsIcon,
  GlobalInfoFamilyIcon,
  GlobalInfoGenderIcon,
  GlobalInfoPatientAvatar,
  GlobalInfoPatientBirthdateIcon,
  GlobalInfoSalaryIcon,
  GlobalInfoSocietyIcon,
  GlobalInfoUserProfileIcon,
} from "../../../../assets";
import GlobalInfoCard, {
  CardRow,
} from "../../../../components/manager_center/patient/global_info/GlobalInfoCard";
import { GlobalInfoStateContext } from "./GlobalInfoState";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  bodyMeduimStyle,
  headlineMediumStyle,
} from "../../../../utils/StyleUtils";
import { PageLoader } from "../../../../components";
import phone from "../../../../assets/icons/medical-center/users/users-list/phone.svg";

const GlobalInfoPage = () => {
  const { state } = useContext(GlobalInfoStateContext);

  if (!state) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  console.log(`state: ${state.id}`);
  return (
    <div className="mx-auto">
      <div className="lg:columns-2 md:columns-2 sm:columns-2 columns-1 gap-y-5 md:gap-x-10 md:mx-10 sm:mx-7 sm:gap-x-5 mr-8 ml-2 gap-x-3 items-end transition-all">
        <GlobalInfoCard
          headerTitle={<span>معلومات التواصل</span>}
          headerIcon={GlobalInfoContactsIcon}
          cardContent={
            <div>
              {state.userDetails.telecom.map((e, index) => (
                <CardRow key={index} title={e.use} content={e.value} />
              ))}
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={
            <span>
              معلومات المريض العامة{" "}
              <span className="text-blue600">(الحالة الاجتماعية)</span>
            </span>
          }
          headerIcon={GlobalInfoSocietyIcon}
          cardContent={
            <div>
              <CardRow
                title="عمر المريض"
                content={state.userDetails.age ?? 40}
              />
              <CardRow
                title="جنسية المريض"
                content={state.userDetails.generalInformation.nationality}
              />
              <CardRow
                title="حالة انضمام المريض"
                content={state.userDetails.generalInformation.status}
                color="text-green400"
              />
              <CardRow
                title="سبب الحالة"
                content={
                  state.userDetails.generalInformation.reasonOfStatus ||
                  "لا يوجد"
                }
              />
              <CardRow
                title="الحالة الاجتماعية"
                content={state.userDetails.generalInformation.maritalStatus}
              />
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>الوضع الاجتماعي</span>}
          headerIcon={GlobalInfoSalaryIcon}
          cardContent={
            <div>
              <CardRow
                title="الدخل العام"
                content={state.userDetails.generalInformation.generalIncome}
              />
              <CardRow
                title="نوع الدخل"
                content={state.userDetails.generalInformation.incomeType}
              />
              <CardRow
                title="مصدر الدخل"
                content={state.userDetails.generalInformation.sourceOfIncome}
              />
              <CardRow
                title="طبيعة العمل"
                content={state.userDetails.generalInformation.workDetails}
              />
              <CardRow
                title="مكان الإقامة"
                content={state.userDetails.generalInformation.residenceType}
              />
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>معلومات حساب المريض</span>}
          headerIcon={GlobalInfoUserProfileIcon}
          cardContent={
            <div>
              <InfoCard patientInfo={state.userDetails} />
              <CardRow
                title={
                  <span className="flex flex-row">
                    <img src={GlobalInfoGenderIcon} alt="" />
                    <span className="pr-2">الجنس</span>
                  </span>
                }
                content={state.userDetails.gender}
              />
              <CardRow
                title={
                  <span className="flex flex-row">
                    <img src={GlobalInfoPatientBirthdateIcon} alt="" />
                    <span className="pr-2">تاريخ الميلاد</span>
                  </span>
                }
                content={state.userDetails.dateOfBirth}
              />
              <CardRow
                title={
                  <span className="flex flex-row">
                    <img src={phone} alt="" />
                    <span className="pr-2">الرقم الوطني</span>
                  </span>
                }
                content={state.userDetails.nationalNumber}
              />
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>عنوان المستخدم</span>}
          headerIcon={GlobalInfoAddressIcon}
          cardContent={
            <div>
              {state.userDetails.address.map((e, index) => (
                <CardRow
                  key={index}
                  title={e.use}
                  content={`${e.countryName} - ${e.cityName} - ${e.line} `}
                />
              ))}
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>الوضع العائلي</span>}
          headerIcon={GlobalInfoFamilyIcon}
          cardContent={
            <div>
              <CardRow
                title="عدد الاولاد"
                content={state.userDetails.patientCompanion.length}
              />
              <CardRow title="الحالة الصحية للأولاد" content="غير محدد" />
              <CardRow
                title="المستوى التعليمي"
                content={state.userDetails.generalInformation.educationalLevel}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

const InfoCard = ({ patientInfo }) => {
  return (
    <div className="flex flex-row-reverse">
      <div className="px-3 pt-4 pb-2">
        <img className="w-16" src={GlobalInfoPatientAvatar} alt="" />
      </div>
      <div className="flex flex-col items-end justify-start px-1 pt-5">
        <div className={`font-bold ${headlineMediumStyle} mb-1 transition-all`}>
          {patientInfo.fullName}
        </div>
        <div className="flex flex-row-reverse items-center justify-end">
          {patientInfo.accountStatus === "active" ? (
            <CheckIcon className="text-green400 w-6 h-6" />
          ) : (
            <XMarkIcon className="text-red-600 w-6 h-6" />
          )}
          <span
            className={`${
              patientInfo.accountStatus === "active"
                ? "text-green400"
                : "text-red-600"
            } mx-2 ${bodyMeduimStyle}`}
          >
            {patientInfo.accountStatus === "active" ? "مفعّل" : "غير مفعّل"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalInfoPage;
