/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function PatientHeader({ setSearchTerm, type }) {
  const navigate = useNavigate();

  return (
    <>
      {type === "patient" ? (
        <div dir="ltr" className="flex justify-between">
          <button
            onClick={() => {
              navigate("/app/getunacceptedpatient");
            }}
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-left ml-10"
          >
            زر
          </button>
          <input
            dir="rtl"
            type="text"
            placeholder="البحث"
            className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        <div className="mr-56 overflow-x-auto  " dir="rtl">
          <input
            dir="rtl"
            type="text"
            placeholder="البحث"
            className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </>
  );
}

export default PatientHeader;
