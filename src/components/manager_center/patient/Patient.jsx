
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { patientData } from "../../../data/data";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import { useNavigate } from 'react-router-dom';

export default function Patient() {


  const navigate = useNavigate();

  const handleRowClick = (patientId) => {
    navigate(`/patient/a`);
  };

  const getRowColor = (index) =>
    index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";

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
    
    {/* header */}
    <input dir="ltr"
        type="text"
        placeholder="...البحث"
        className="bg-search mt-5 text-right w-1/4 p-2.5 h-10  text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
      />


    <div className="flex justify-between mb-5 mt-5">
      <h2 className="text-customPurple text-customSize">المرضى</h2>
      <div className="relative w-1/5 ">
        <select className="bg-dropmenu  text-right w-full p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option>المرضى المقبولين</option>
          <option>الخيار 2</option>
          <option>الخيار 3</option>
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img className="w-5 h-5 " src={down} alt="Patient" />
        </div>
      </div>
    </div>

    <table className="min-w-full bg-white">
      <thead>
        <tr className="bg-headerTable">
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm">
            الاسم
          </th>
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm">
            الجنس
          </th>
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm">
            العمر
          </th>
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm">
            السكن
          </th>
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm">
            الهاتف
          </th>
          <th className="text-right py-3 px-4 uppercase font-semibold text-sm"></th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {patientData.map((row, index) => (
          <tr
            key={index}
            className={`text-right border-b ${getRowColor(index)}`}
            onClick={() => handleRowClick(row.id)}
          >
            <td className="py-3 px-4 w-48">
              <div>
                <img
                  class="inline-block w-6 h-6 mr-0"
                  src={patient}
                  alt="Patient"
                />
                <h1 class="inline-block pr-2 pl-0 ml-0">{row.name}</h1>
              </div>{" "}
            </td>
            <td className="py-3 px-4">{row.nationality}</td>
            <td className="py-3 px-4">{row.age}</td>
            <td className="py-3 px-4">{row.area}</td>
            <td className="py-3 w-48" dir="ltr">
              {row.phone}
            </td>

            <td className="py-3 pr-6">
              <img className="w-5 h-5 pr-18 -ml-4" src={down} alt="Patient" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </>
  );
}