/* eslint-disable react/prop-types */
import time from "./../../../../assets/icons/medical-center/setting/time.svg";
import addTime from "./../../../../assets/icons/medical-center/setting/addtime.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
import DialogTimeCenter from "./DialogTimeCenter";
import React, { useState,useContext } from "react";
import { DataContext } from "../DataContext";

function TimeCenter() {
  const { data } = useContext(DataContext);
  const isEmpty = !data.centerTime || data.centerTime.length === 0;
  const [open, setOpen] = useState(false);
 

  return (
    <>
      <div className="border p-4 rounded-xl bg-whiteCard overflow-hidden ">
        <div className="flex flex-row-reverse   mt-2 mb-2 ">
          <div className="flex flex-grow justify-end items-center gap-3">
          <div className="border p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black">
          <img
        src={addTime}
        alt="إضافة وقت"
        onClick={() => setOpen(true)}  
        style={{ cursor: 'pointer' }} 
      />
       
</div>
            
            {!isEmpty && (
              <button className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7">
                <img src={edit} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
                {"تعديل"}
              </button>
            )}
          </div>

          <h3 className="text-xl text-blue700 ">الورديات:</h3>
          <img className="ml-2" src={time} />
        </div>
        <div className="flex flex-wrap -mx-2">
          {data.centerTime.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 mt-3 ${
                index == 0 ? "pr-2" : "px-24"
              }`}
            >
              <h3 className="text-right">{card.name}</h3>
              <h3 className="text-right">
                {card.start} إلى {card.end}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <DialogTimeCenter open={open} setOpen={setOpen} />

    </>
  );
}

export default TimeCenter;
