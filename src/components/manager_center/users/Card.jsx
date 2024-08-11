/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import online from "../../../assets/icons/medical-center/users/users-list/online.svg";
import location from "../../../assets/icons/medical-center/users/users-list/location.svg";
import gender from "../../../assets/icons/medical-center/users/users-list/gender.svg";
import phone from "../../../assets/icons/medical-center/users/users-list/phone.svg";
import doctor from "../../../assets/icons/medical-center/users/users-list/doctor.svg";
import nurse from "../../../assets/icons/medical-center/users/users-list/nurse.svg";
import nurseMan from "../../../assets/icons/medical-center/users/users-list/nurseMan.svg";
import secretary from "../../../assets/icons/medical-center/users/users-list/secretary.svg";
import { useNavigate } from "react-router-dom";

export function RoleImage({ role, width, height }) {
  let imageSrc;
  switch (role) {
    case "nurse":
      imageSrc = nurse;
      break;
    case "secretary":
      imageSrc = secretary;
      break;
    default:
      imageSrc = doctor;
  }

  return <img className={`w-${width} h-${height}`} src={imageSrc} alt={role} />;
}

function Card({ data }) {
  let displayRole =
    data.role === "nurse"
      ? "ممرض"
      : data.role === "doctor"
      ? "طبيب"
      : data.role === "secretary"
      ? "سكرتاريا"
      : data.role;
  let displayStatus =
    data.accountStatus === "verified" ? "نشط الان" : "غير نشط";
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/app/users/${data.id}`);
  };
  return (
    <>
      ِ
      <div
        className="transition-transform transform hover:scale-105 hover:cursor-pointer bg-bgUserColor p-2 rounded-lg shadow-lg max-w-[300px]  h-[100%] sm:h-[100%] md:h-[100%] lg:h-[89%]"
        onClick={() => handleCardClick()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-black mb-3 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" transform="rotate(90 5 12)" />
              <circle cx="19" cy="12" r="1" transform="rotate(90 19 12)" />
            </svg>
          </div>

          <div className="flex flex-row-reverse items-center">
            <RoleImage role={data.role} width={11} className="mr-4" />
            <div className="flex flex-col">
              <h3 className="text-base text-gray-700 font-semibold text-right">
                {data.fullName} ({displayRole})
              </h3>
              <span className="text-sm text-green-500 text-right">
                {displayStatus}
                <img
                  className="h-2 w-2 inline-block text-green-500 mr-2"
                  src={online}
                  alt="online"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 px-2">
          <div className="flex items-end justify-end">
            <span className="ml-2 text-sm text-gray-600">{data.city}</span>
            <img src={location} className="w-5 h-5" />
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">{data.gender}</span>
            <img src={gender} className="w-5 h-5" />
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">
              {data.contactNumber}
            </span>
            <img src={phone} className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
