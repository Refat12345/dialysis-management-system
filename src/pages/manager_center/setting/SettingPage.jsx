import React from "react";
import GeneralAboutCenter from "../../../components/manager_center/setting/GeneralAboutCenter";
import Cards from "../../../components/manager_center/setting/Cards";
import ContactCenter from "../../../components/manager_center/setting/ContactCenter";
import NoteCenter from "../../../components/manager_center/setting/NoteCenter";
import {
  dataCenterLocation,
  dataCenterTime,
  dataNoteInMedicalCenter,
} from "../../../data/data";
import TimeCenter from "../../../components/manager_center/setting/TimeCenter";
function SettingPage() {
  return (
    <div className="bg-cardDetailsColor w-full">
      <div
        className="flex-grow mr-56 ml-8 h-max mt-9 bg-cardDetailsColor "
        dir="rtl"
      >
        <div className="flex items-center">
          <span className="text-2xl text-blue-700 mr-2 ml-5">معلومات المركز</span>
          <hr className="custom-hrr flex-grow " />
        </div>

        <div className="flex flex-row gap-6">
          <GeneralAboutCenter />
          <div className="flex flex-col gap-6">
            <Cards />
            <div className="flex flex-row  w-full gap-6">
              <ContactCenter data={dataCenterLocation} />
              <TimeCenter data={dataCenterTime} />
            </div>
            <NoteCenter data={dataNoteInMedicalCenter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
