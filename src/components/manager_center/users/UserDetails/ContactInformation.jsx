/* eslint-disable react/prop-types */
import React from "react";
import truee from "./../../../../assets/icons/medical-center/users/user-details/true.svg";
import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
import location from "./../../../../assets/icons/medical-center/users/user-details/locationInformation.svg"
function ContactInformation({ data }) {
  return (
    <div className="border p-4 rounded-xl bg-whiteCard">
      <div className="flex flex-row justify-end  mt-2 mb-2 ">
        <div dir="ltr" className="flex flex-grow justify-start items-center">
         {Object.keys(data).length === 4?<img src={contact} />:<img src={location} />} 
        </div>

        <h3 className="text-xl text-bgtitle">{data.title}</h3>
      </div>
      {Object.keys(data).length === 4 ? (
        <div className="flex flex-row-reverse  ">
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-right">الهاتف</h3>
            <h3 className="text-right">0113741201</h3>
            <h3 className="text-right mt-2">الموبايل</h3>
            <h3 className="text-right">+963992841193</h3>
            <div className="flex flex-col gap-2">
              <h3 className="text-right mt-2">البريد الاكتروني</h3>
              <h3 className="text-right">refatabdalwahed@gmail.com</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse  ">
          <div className="flex flex-col gap-2 mt-3">
            <h3 className="text-right">المنزل</h3>
            <h3 className="text-right">{data.house}</h3>
            <h3 className="text-right mt-2">العمل</h3>
            <h3 className="text-right">{data.work}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactInformation;
