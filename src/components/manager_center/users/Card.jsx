/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import online from '../../../assets/icons/medical-center/users/users-list/online.svg';

function Card({ data }) {
  return (
    <>
      <div className="bg-cardColor p-2 rounded-lg shadow-lg max-w-[270px] mx-auto">
        <div className="flex flex-row-reverse items-center">
          <img className="w-13" src={data.image} />

          <div className="flex flex-col">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 ml-2 mr-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" transform="rotate(90 5 12)" />
                <circle cx="19" cy="12" r="1" transform="rotate(90 19 12)" />
              </svg>

              <h3 className="text-right mr-2 text-base text-gray-700 font-semibold">
                {data.name}  ({data.role})
              </h3>
            </div>
            <span className="text-sm mr-2 text-green-500 text-right">
              {data.status} 
              <img
                className="h-2 w-2 inline-block text-green-500 mr-1 ml-2"
                src={online}
                alt="online"
              />
            </span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <div className="flex items-end justify-end">
            <span className="ml-2 text-sm text-gray-600">{data.location}</span>

            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"
              />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">{data.gender}</span>

            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex items-end justify-end mt-3">
            <span className="ml-2 text-sm text-gray-600">{data.phone}</span>

            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2C20 17.5 12 22 12 22z"
              />
              <circle cx="12" cy="8" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;