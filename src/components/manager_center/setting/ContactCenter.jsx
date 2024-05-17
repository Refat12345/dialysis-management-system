import React from "react";
import medicalContact from "./../../../assets/icons/medical-center/setting/medicalContact.svg";

function ContactCenter({ data }) {
  return (
    <div className="border p-4 rounded-xl bg-whiteCard w-1/2">
      <div className="flex flex-row-reverse   mt-2 mb-2 ">
        <div className="flex flex-grow justify-end items-center">
          <img src={medicalContact} />
        </div>

        <h3 className="text-xl text-blue700 ">معلومات التواصل </h3>
      </div>

      <div className="flex flex-row  ">
        <div className="flex flex-col gap-2 mt-3">
          <h3 className="text-right">المنزل</h3>
          <h3 className="text-right">+5478515225</h3>
          <h3 className="text-right mt-2">العمل</h3>
          <h3 className="text-right">+5478515225</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactCenter;
