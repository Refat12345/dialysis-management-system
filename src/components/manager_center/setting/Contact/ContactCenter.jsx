/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import medicalContact from "./../../../../assets/icons/medical-center/setting/medicalContact.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
import addTime from "./../../../../assets/icons/medical-center/setting/addtime.svg";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContactCenter from "./DialogContactCenter";
function ContactCenter({ data }) {
  const [open, setOpen] = useState(false);

  const isEmpty = !data || data.length === 0;

  return (
    <div className="border p-4 rounded-xl bg-whiteCard overflow-hidden">
      <div className="flex flex-row-reverse   mt-2 mb-2 ">
        <div className="flex flex-grow justify-end items-center gap-3">
          <div className="border p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black">
            <img
              src={addTime}
              alt="إضافة وقت"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            />
            <DialogContactCenter open={open} setOpen={setOpen} />
          </div>
          {!isEmpty && (
            <button className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7">
              <img src={edit} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
              {"تعديل"}
            </button>
          )}
        </div>

        <h3 className="text-xl text-blue700 ">معلومات التواصل:</h3>
        <img className="ml-2" src={medicalContact} />
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="flex flex-row gap-56 mt-3 ">
          <div className="flex flex-col">
            <h3 className="text-right">{"المكتب"}</h3>
            <h3 className="text-right">{data.line}</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-right">{"الموبايل"}</h3>
            <h3 className="text-right">{data.phone}</h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-right">{"الايميل"}</h3>
            <h3 className="text-right">{data.gmail}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCenter;
