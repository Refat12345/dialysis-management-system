/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { patientData, patientsRoute } from "../../../data/data";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import React, { useState } from "react";
import TableHeader from "./TableHeader";

export function Table({ data }) {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleRowClick = (patientName) => {
    navigate(`${patientsRoute}/${patientName}`);
  };

  const getRowColor = (index, name) => {
    if (name.includes(searchTerm) && searchTerm !== "") {
      return "bg-search";
    }
    return index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";
  };

  const columns = [
    { key: 'name', title: 'الاسم' },
    { key: 'gender', title: 'الجنس' },
    { key: 'birth', title: 'العمر' },
    { key: 'location', title: 'السكن' },
    { key: 'phone', title: 'الهاتف' },
    { key: 'icon', title: '' },


  ];
  return (
    <>
      <style>
        {`
        tbody  tr:hover {
            background-color: #f3f3f3; 
            cursor: pointer;
          }
        `}
      </style>
      <div className="overflow-x-auto  ml-11" dir="rtl">
        <input
          dir="rtl"
          type="text"
          placeholder="البحث"
          className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-between mb-5 mt-5">
          <h2 className="text-customPurple text-customSize">المرضى</h2>
          <div className="relative w-1/5 ">
            <select className="bg-dropmenu  text-right w-full p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>المرضى المقبولين</option>
              <option>المرضى المرفوضين</option>
              <option>مرضى الانتظار</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img className="w-5 h-5 " src={down} alt="Patient" />
            </div>
          </div>
        </div>

        <table className="min-w-full bg-white">
          <TableHeader columns={columns} color="bg-headerTable" />
          <tbody className="text-gray-700">
            {data
              .filter((row) => row.name.includes(searchTerm))
              .map((row, index) => (
                <TableRow
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={handleRowClick}
                  getRowColor={() => getRowColor(index, row.name)}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
