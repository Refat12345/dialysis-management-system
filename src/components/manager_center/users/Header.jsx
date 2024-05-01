/* eslint-disable no-unused-vars */
import React from "react";
function Header() {
  return (
    <div className="mb-5 hidden sm:block ">
    <div className="flex justify-end ">

      <div className="flex items-end justify-end   mt-5 pr-2 w-2/4">

        <div className="  relative w-2/12 mr-4 ">
          <select className="bg-search text-right w-full p-2.5 text-gray-500  border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>الخيار 1</option>
            <option>الخيار 2</option>
            <option>الخيار 3</option>
          </select>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <input
          type="text"
          placeholder="...البحث"
          className="bg-search text-right w-5/12 p-2.5  text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
        />
      </div>
    </div>
    </div>

  );
}
export default Header;

