/* eslint-disable no-unused-vars */
import React from "react";
import SecretaryAccountHeader from "../manager_center/secretary/SecretaryAccountHeader";
import HeaderTextField from "./HeaderTextField";
import society_status from "./../../assets/icons/addPaitentInfo/society_status.svg";
import CustomTextField from "../public/textfield/CustomTextField";
import SelectedTextFeild from "../public/textfield/SelectedTextFeild";
import { useAddPaitentInfoState } from "./AddPaitentInfoState";
import Row from "../public/primitives/Row";
function AddPaitentInfo() {
  const { state, updateState } = useAddPaitentInfoState();

  const genderFilter = {
    array: ["أنثى", "ذكر"],
    title: "الجنس",
  };

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
    <div dir="rtl" className="w-full flex flex-col lg:mr-48 md:mr-48">
      <SecretaryAccountHeader />

      <div className="grid grid-cols-2">
        <div>
          <div className="w-3/4 mr-4">
            <HeaderTextField icon={society_status} text={"الوضع الاجتماعي"} />

            <SelectedTextFeild
              label={genderFilter.title}
              value={state.genderValue === "" ? "الجنس" : state.genderValue}
              filter={genderFilter.array}
              onSelect={(val) => state.selectGender(val)}
            />
          </div>
          <div className="w-3/4 mr-4">
            <HeaderTextField icon={society_status} text={"التعليم"} />

            <SelectedTextFeild
              label={"المستوى التعليمي"}
              value={state.LearnValue === "" ? "التعليم" : state.LearnValue}
              filter={LearnFilter.array}
              onSelect={(val) => state.selectLearn(val)}
            />
          </div>

          <div className="w-3/4 mr-4 mt-2">
            <HeaderTextField icon={society_status} text={"الوضع الاقتصادي"} />

            <SelectedTextFeild
              label={"الدخل العام"}
              value={
                state.economicSituation === ""
                  ? "متوسط"
                  : state.economicSituation
              }
              filter={economicSituationFilter.array}
              onSelect={(val) => state.selectEconomicSituation(val)}
            />
          </div>
          <div className="w-3/4 mr-4 mt-2">
            <SelectedTextFeild
              label={"نوع الدخل "}
              value={state.economicType === "" ? "ثابت" : state.economicType}
              filter={economicTypeFilter.array}
              onSelect={(val) => state.selectEconomicType(val)}
            />
          </div>
          <div className="w-3/4 mr-4 mt-2">
            <SelectedTextFeild
              label={"مصدر الدخل "}
              value={
                state.economicSource === "" ? "وظيفة" : state.economicSource
              }
              filter={economicSourceFilter.array}
              onSelect={(val) => state.selectEconomicSource(val)}
            />
          </div>
        </div>

        <div>
        <div className="w-3/4 mr-4">
        <HeaderTextField icon={society_status} text={"الوضع العائلي"} />

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
          <div className="w-3/4 mr-4">
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

          <div className="w-3/4 mr-4">
        <HeaderTextField icon={society_status} text={"العمل"} />

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

          <div className="w-3/4 mr-4">
        <HeaderTextField icon={society_status} text={"السكن"} />

        <SelectedTextFeild
              label={"الاقامة"}
              value={state.location === "" ? "ايجار" : state.location}
              filter={location.array}
              onSelect={(val) => state.selectLocation(val)}
            />
          </div>



          
        </div>

       
      </div>

      <HeaderTextField text={"مرافق المريض"}/>
      <Row>
      <div className="w-1/2 mr-4">
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
          <div className="w-1/2 mr-4">
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
      </Row>

    
    </div>
  );
}

export default AddPaitentInfo;

{
  /* <div className="w-1/2 mr-4">
        <CustomTextField
          size="3"
          required={true}
          label={"الحالة الاجتماعية:"}
          placeholder="اسم المستخدم"
          type="text"
        />
      </div> */
}
