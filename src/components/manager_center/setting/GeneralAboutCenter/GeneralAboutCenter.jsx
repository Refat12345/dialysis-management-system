/* eslint-disable react/prop-types */
import medical from "./../../../../assets/icons/medical-center/setting/MedicalCenter.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
import add from "./../../../../assets/icons/medical-center/setting/addtime.svg";
import { useSelector } from "react-redux";

import { useState } from "react";
import DialogCenterData from "./DialogCenterData";

function GeneralAboutCenter({ data }) {
  const [open, setOpen] = useState(false);
  const [type, settype] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <div className=" w-80 pb-20 pl-5 pr-5 bg-white border border-indigo-300 rounded-3xl mb-7 pt-5 ">
      <div className="flex justify-end ">
        {!data.charityName && user.role === "secretary" && (
          <button
            className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded-xl flex items-center mb-5"
            onClick={() => {
              setOpen(true);
              settype("add");
            }}
          >
            <img src={add} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
            {"اضافة"}
          </button>
        )}

        {data.charityName && user.role === "secretary" && (
          <button
            className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded-xl flex items-center mb-5"
            onClick={() => {
              setOpen(true);
              settype("edit");
            }}
          >
            <img src={edit} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
            {"تعديل"}
          </button>
        )}
      </div>

      <div className="flex flex-col justify-center items-center ml-1">
        <img className="w-32 h-32" src={medical} alt="Medical" />
        <span className="mt-4 text-xl">{data.centerName || ""}</span>
      </div>

      <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
        <span className="block">مديرالمركز</span>
        <span>{data.adminName || ""}</span>
      </div>
      <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
        <span className="block">الجمعية الخيرية التابعة للمركز</span>
        <span>{data.charityName || ""}</span>
      </div>
      <div className="w-72 border border-indigo-300 mt-3 p-5 rounded-3xl">
        <span className="block">عنوان المركز</span>
        <span>
          {data["address"] && data["address"][0]
            ? data["address"][0].cityName
            : ""}
        </span>
      </div>

      <DialogCenterData open={open} setOpen={setOpen} data={data} type={type} />
    </div>
  );
}

export default GeneralAboutCenter;
