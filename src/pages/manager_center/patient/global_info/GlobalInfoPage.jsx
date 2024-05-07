/* eslint-disable no-unused-vars */
import { useContext } from "react";
import {
  GlobalInfoAddressIcon,
  GlobalInfoContactsIcon,
  GlobalInfoFamilyIcon,
  GlobalInfoGenderIcon,
  GlobalInfoPatientBirthdateIcon,
  GlobalInfoSalaryIcon,
  GlobalInfoSocietyIcon,
  GlobalInfoUserProfileIcon,
} from "../../../../assets";
import GlobalInfoCard, {
  CardRow,
  InfoCard,
} from "../../../../components/manager_center/patient/global_info/GlobalInfoCard";
import { GlobalInfoStateContext } from "./GlobalInfoState";

const GlobalInfoPage = () => {
  const { state } = useContext(GlobalInfoStateContext);

  return (
    <div className="container mx-auto">
      <div className="columns-2 gap-y-5 md:gap-x-10 md:mx-10 sm:mx-7 sm:gap-x-5 items-end">
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
                  <span className="flex flex-row-reverse">
                    <img src={GlobalInfoGenderIcon} alt="" />
                    <span className="pr-2">الجنس</span>
                  </span>
                }
                content={state.patientInfo.gender}
              />
              <CardRow
                title={
                  <span className="flex flex-row-reverse">
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

export default GlobalInfoPage;
