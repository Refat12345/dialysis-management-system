// /* eslint-disable react/prop-types */
// import { useState } from "react";

// import DialogTimeCenter from "./DialogTimeCenter";
// import DialogEditShifts from "./DialogEditShifts";

// import addTime from "./../../../../assets/icons/medical-center/setting/addtime.svg";
// import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
// import time from "./../../../../assets/icons/medical-center/setting/time.svg";
// import { useSelector } from "react-redux";

// function TimeCenter({ data }) {
//   const user = useSelector((state) => state.user);

//   const isEmpty = !data || data.length === 0;
//   const [open, setOpen] = useState(false);
//   const [openEditShift, setOpenEditShift] = useState(false);
//   return (
//     <div className="border p-4 rounded-xl bg-whiteCard overflow-hidden">
//       <div className="flex flex-row-reverse   mt-2 mb-2 ">
//         <div className="flex flex-grow justify-end items-center gap-3">
//           <div className="border p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black">
//             {user.role === "secretary" && (
//               <img
//                 src={addTime}
//                 alt="إضافة وقت"
//                 onClick={() => setOpen(true)}
//                 style={{ cursor: "pointer" }}
//               />
//             )}
//           </div>

//           {!isEmpty && user.role === "secretary" && (
//             <button className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7">
//               <img
//                 onClick={() => setOpenEditShift(true)}
//                 src={edit}
//                 className="w-5 h-5 mr-2 ml-2"
//                 alt="Edit"
//               />
//               {"تعديل"}
//             </button>
//           )}
//         </div>

//         <h3 className="text-xl text-blue700 ">الورديات:</h3>
//         <img className="ml-2" src={time} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {data.map((card, index) => (
//           <div key={index} className=" p-3 rounded-lg">
//             <h3 className="text-right">{card.name}</h3>
//             <p className="text-right">
//               {card.shiftStart} إلى {card.shiftEnd}
//             </p>
//           </div>
//         ))}
//       </div>

//       <DialogTimeCenter open={open} setOpen={setOpen} />
//       <DialogEditShifts
//         open={openEditShift}
//         setOpen={setOpenEditShift}
//         data={data}
//       />
//     </div>
//   );
// }

// export default TimeCenter;


/* eslint-disable react/prop-types */
import { useState } from "react";

import DialogTimeCenter from "./DialogTimeCenter";
import DialogEditShifts from "./DialogEditShifts";

import addTime from "./../../../../assets/icons/medical-center/setting/addtime.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
import time from "./../../../../assets/icons/medical-center/setting/time.svg";
import { useSelector } from "react-redux";

function TimeCenter({ data }) {
  const user = useSelector((state) => state.user);

  const isEmpty = !data || data.length === 0;
  const [open, setOpen] = useState(false);
  const [openEditShift, setOpenEditShift] = useState(false);
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
          </div>

          {!isEmpty && (
            <button className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7">
              <img
                onClick={() => setOpenEditShift(true)}
                src={edit}
                className="w-5 h-5 mr-2 ml-2"
                alt="Edit"
              />
              {"تعديل"}
            </button>
          )}
        </div>

        <h3 className="text-xl text-blue700 ">الورديات:</h3>
        <img className="ml-2" src={time} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div key={index} className=" p-3 rounded-lg">
            <h3 className="text-right">{card.name}</h3>
            <p className="text-right">
              {card.shiftStart} إلى {card.shiftEnd}
            </p>
          </div>
        ))}
      </div>

      <DialogTimeCenter open={open} setOpen={setOpen} />
      <DialogEditShifts
        open={openEditShift}
        setOpen={setOpenEditShift}
        data={data}
      />
    </div>
  );
}

export default TimeCenter;
