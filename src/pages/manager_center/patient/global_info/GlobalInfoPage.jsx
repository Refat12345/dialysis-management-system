/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types"; // Import PropTypes
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

const GlobalInfoPage = () => {
  const { state } = useContext(GlobalInfoStateContext);

  return (
    <div className="mx-auto">
      <div className="lg:columns-2 md:columns-2 sm:columns-2 columns-1 gap-y-5 md:gap-x-10 md:mx-10 sm:mx-7 sm:gap-x-5 mr-8 ml-2 gap-x-3 items-end transition-all">
        <GlobalInfoCard
          headerTitle={<span>معلومات التواصل</span>}
          headerIcon={GlobalInfoContactsIcon}
          cardContent={
            <div>
              {state.contacts.map((e, index) => (
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
              <CardRow title="عمر المريض" content={state.society.age} />
              <CardRow
                title="جنسية المريض"
                content={state.society.nationality}
              />
              <CardRow
                title="حالة انضمام المريض"
                content={state.society.statusInvitation}
              />
              <CardRow
                title="سبب الحالة"
                content={state.society.reason ?? "لا يوجد"}
              />
              <CardRow
                title="الحالة الاجتماعية"
                content={state.society.maritalStatus}
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
                content={state.socialStatus.publicIncome}
              />
              <CardRow
                title="نوع الدخل"
                content={state.socialStatus.incomeType}
              />
              <CardRow
                title="مصدر الدخل"
                content={state.socialStatus.incomeSource}
              />
              <CardRow
                title="طبيعة العمل"
                content={state.socialStatus.workNature}
              />
              <CardRow
                title="مكان الإقامة"
                content={state.socialStatus.placeOfResidence}
              />
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>معلومات حساب المريض</span>}
          headerIcon={GlobalInfoUserProfileIcon}
          cardContent={
            <div>
              <InfoCard patientInfo={state.patientInfo} />
              <CardRow
                title={
                  <span className="flex flex-row">
                    <img src={GlobalInfoGenderIcon} alt="" />
                    <span className="pr-2">الجنس</span>
                  </span>
                }
                content={state.patientInfo.gender}
              />
              <CardRow
                title={
                  <span className="flex flex-row">
                    <img src={GlobalInfoPatientBirthdateIcon} alt="" />
                    <span className="pr-2">تاريخ الميلاد</span>
                  </span>
                }
                content={state.patientInfo.birthDate}
              />
            </div>
          }
        />
        <GlobalInfoCard
          headerTitle={<span>عنوان المستخدم</span>}
          headerIcon={GlobalInfoAddressIcon}
          cardContent={
            <div>
              {state.address.map((e, index) => (
                <CardRow key={index} title={e.use} content={e.value} />
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
                content={state.familyStatus.numberOfChild}
              />
              <CardRow
                title="الحالة الصحية للأولاد"
                content={state.familyStatus.ChildrenHealthStatus}
              />
              <CardRow
                title="المستوى التعليمي"
                content={state.familyStatus.education}
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
          {patientInfo.name}
        </div>
        <div className="flex flex-row-reverse items-center justify-end">
          {patientInfo.status === "enable" ? (
            <CheckIcon className="text-green400 w-6 h-6" />
          ) : (
            <XMarkIcon className="text-red-600 w-6 h-6" />
          )}
          <span
            className={`${
              patientInfo.status === "enable" ? "text-green400" : "text-red-600"
            } mx-2 ${bodyMeduimStyle}`}
          >
            {patientInfo.status === "enable" ? "مفعّل" : "غير مفعّل"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalInfoPage;
