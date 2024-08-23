/* eslint-disable react/prop-types */
import { useState } from "react";
import DialogNote from "./DialogNote";
import { useSelector } from "react-redux";
import addTime from "./../../../../assets/icons/medical-center/setting/addtime.svg";

function NoteCenter({ data }) {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <>
      <div
        className="bg-white h-32 p-4 border border-indigo-300 rounded-2xl mb-7 max-w-5xl"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-row justify-between items-center"> 
        <span  className="block text-titleColor mb-1 text-xl">
          تفاصيل عامة :
        </span>
        {user.role === "secretary" && (
            <div className="border ml-10 p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black">
              <img
                src={addTime}
                alt="إضافة وقت"
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
        
        <p className="font-bold text-black">{data}</p>
      </div>
      <DialogNote open={open} setOpen={setOpen} data={data} />
    </>
  );
}

export default NoteCenter;
