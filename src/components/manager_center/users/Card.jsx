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
import { userDetailsRoute } from "../../../data/data";
export function RoleImage({ role, width, height }) {
  let imageSrc;
  switch (role) {
    case "ممرضة":
      imageSrc = nurse;
      break;
    case "سكرتيرة":
      imageSrc = secretary;
      break;
    case "ممرض":
      imageSrc = nurseMan;
      break;
    default:
      imageSrc = doctor;
  }

  return <img className={`w-${width} h-${height}`} src={imageSrc} alt={role} />;
}

function Card({ data }) {
  const navigate = useNavigate();

  const handleCardClick = (userName) => {
    navigate(`${userDetailsRoute}`);
  };

  return (
    <>
      <style>
        {`
      .card-hover:hover {
            background-color: #f3f3f3; 
            cursor: pointer;
          }
        `}
      </style>

      <div
        className="card-hover bg-cardColor p-2 rounded-lg shadow-lg max-w-[300px] "
        onClick={() => handleCardClick()}
      >
        <div className="flex justify-between items-center">
          <svg
            className="h-5 w-5 text-green-500 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" transform="rotate(90 5 12)" />
            <circle cx="19" cy="12" r="1" transform="rotate(90 19 12)" />
          </svg>

          <div className="flex flex-col ml-8">
            <div className="flex items-center">
              <h3 className="text-right text-base text-gray-700 font-semibold">
                {data.name} ({data.role})
              </h3>
            </div>

            <span className="text-sm  text-green-500 text-right">
              {data.status}
              <img
                className="h-2 w-2 inline-block text-green-500  ml-2"
                src={online}
                alt="online"
              />
            </span>
          </div>

          <RoleImage role={data.role} width={11} />
        </div>

        <div className="mt-2 px-2">
          <div className="flex items-end justify-end">
            <span className="ml-2 text-sm text-gray-600">{data.location}</span>
            <img src={location} className="w-5 h-5" />
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">{data.gender}</span>
            <img src={gender} className="w-5 h-5" />
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">{data.phone}</span>
            <img src={phone} className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
