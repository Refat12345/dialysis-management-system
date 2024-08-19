/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { usePatient } from "../../../pages/manager_center/patient/patient_list/PaitientListState";
import { DropDown, } from "../..";

import { useSelector } from "react-redux";
import { useState } from "react";

export function Table({ data }) {
  const {
    selectedOption,
    handleSelectChange,
    MedicalCenters,
    handleSelectCenterChange,
    selectedCenterOption,
  } = usePatient();

  const height = window.innerHeight

  const user = useSelector((state) => state.user);

  const filteredData = data.map((item) => ({
    fullName: item.fullName,
    gender: item.gender,
    age: item.age,
    city: item.city,
    contactNumber: item.contactNumber,
  }));

  const navigate = useNavigate();

  const handleRowClick = (patientName) => {
    navigate(`/app/patients/${patientName}/global-info`);
  };

  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";
  };
  const colors = {
    titleColor: "primaryColor",
    contentColor: "bgButtonColor",
    textColor: "textMenuColor",
}
const patientFilter = {
    title :"مرضى مقبولين",
    array :["مرضى مقبولين" ,"مرضى مرفوضين" ,"مرضى انتظار"
    ]
}

  const columns = [
    { key: "name", title: "الاسم" },
    { key: "gender", title: "الجنس" },
    { key: "birth", title: "العمر" },
    { key: "location", title: "السكن" },
    { key: "phone", title: "الهاتف" },
    { key: "icon", title: "" },
  ];
  const [isEllipsisHovered, setIsEllipsisHovered] = useState(false);


  let responsive = height>620 ? ( height>680 ? ( height > 740 ? (height > 800 ? "min-h-PatientAbove800" :"min-h-PatientAbove740") : "min-h-PatientAbove700") : "min-h-PatientAbove630") : "min-h-PatientUnder630"
 
  return (
    <div className={`${responsive}`}>
      <style>
        {`
        tbody  tr:hover {
            background-color: ${isEllipsisHovered ? "" : "#f3f3f3"};
            cursor: ${isEllipsisHovered ? "" :"pointer"}};
          }
        `}

      </style>

      <div className="overflow-x-auto " dir="rtl">
        
        <div className="flex  mb-5 mt-5">
          
          <div className=" w-full flex    ">
          <div className="w-[20%]">
          <DropDown
          colors={colors}
          filter={patientFilter.array}
          title={patientFilter.title}
          onSelect={handleSelectChange}
          type={"shift"}
          />
          </div>
          
            {user.role === "superAdmin" && (

              <div className="w-[20%]">
              <DropDown
              colors={colors}
              filter={MedicalCenters?.map((center) => center.centerName)}
              title={selectedCenterOption}
              onSelect={handleSelectCenterChange}
              type={"shift"}
          />
          </div>
            )}
          </div>
        </div>

        <table className="min-w-full bg-white">
          <TableHeader columns={columns} color="bg-headerTable" />

          <tbody className="text-gray-700">
            {filteredData.map((row, index) => (
              <TableRow
                id={data[index].id}
                key={index}
                row={row}
                index={index}
                handleRowClick={handleRowClick}
                getRowColor={() => getRowColor(index, row.name)}
                type={"patient"}
                typeOFSelectedPatient={selectedOption}
                setIsEllipsisHovered = {setIsEllipsisHovered}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
