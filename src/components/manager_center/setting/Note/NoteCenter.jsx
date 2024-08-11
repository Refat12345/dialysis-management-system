import { useState } from "react";
import DialogNote from "./DialogNote";
function NoteCenter({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white h-32 p-4 border border-indigo-300 rounded-2xl mb-7 max-w-5xl"
        onClick={() => setOpen(true)}
      >
        <span onClick={() => setOpen(true)} className="block">
          تفاصيل عامة :
        </span>
        {data}
      </div>
      <DialogNote open={open} setOpen={setOpen} data={data} />
    </>
  );
}

export default NoteCenter;
