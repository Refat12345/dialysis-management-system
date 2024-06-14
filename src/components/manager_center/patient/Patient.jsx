/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { globalInfoRoute, patientsRoute } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { usePatient } from "../../../pages/manager_center/patient/patient_list/PaitientListState";
import {SelectedTextFeild} from "../.."
import { useEffect,useState } from "react";


export function Table({ data }) {
  const { selectedOption, handleSelectChange } = usePatient();
 

  const filter = {
    title: "نوع ",
    array: ["مرضى مقبولين", "مرضى مرفوضين", "مرضى انتظار"],
  };


  const filteredData = data.map(item => ({
    
    fullName: item.fullName,
    gender: item.gender,
    age:item.age,
    city:item.city,
    contactNumber:item.contactNumber

  }));


  const navigate = useNavigate();

  const handleRowClick = (patientName) => {
   
    navigate(`${patientsRoute}/${patientName}/${globalInfoRoute}`);
    
  };

  const getRowColor = (index) => {
   
    return index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";
  };

  const columns = [
    { key: "name", title: "الاسم" },
    { key: "gender", title: "الجنس" },
    { key: "birth", title: "العمر" },
    { key: "location", title: "السكن" },
    { key: "phone", title: "الهاتف" },
    { key: "icon", title: "" },
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

      <div className="overflow-x-auto  ml-11 min-h-customAbove600" dir="rtl">
     
        <div className="flex justify-between mb-5 mt-5">
          <h2 className="text-customPurple text-customSize">المرضى</h2>
          <div className="relative w-1/5 ">
            <SelectedTextFeild
              activeLabel={false}
              value={selectedOption}
              filter={filter.array}
              onSelect={handleSelectChange}
            />
          </div>
        </div>

        <table className="min-w-full bg-white">

          <TableHeader columns={columns} color="bg-headerTable" />
          
          <tbody className="text-gray-700">
            {filteredData.map((row, index) => (
                <TableRow
                  id = {data[index].id}
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={handleRowClick}
                  getRowColor={() => getRowColor(index, row.name)}
                  type={"patient"}
                />
              ))}
          </tbody>
        </table>

      </div>
    </>
  );
}
