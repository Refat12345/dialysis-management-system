// import { useState } from "react";
// import medicalContact from "./../../../../assets/icons/medical-center/setting/medicalContact.svg";
// import editIcon from "./../../../../assets/icons/medical-center/setting/edit.svg";
// import addTimeIcon from "./../../../../assets/icons/medical-center/setting/addtime.svg";
// import DialogContactCenter from "./DialogContactCenter";
// import { useSelector } from "react-redux";

// function ContactCenter({ data }) {
//   const [open, setOpen] = useState(false);
//   const isEmpty = !data || data.length === 0;
//   const user = useSelector((state) => state.user);

//   return (
//     <div className="border p-4 rounded-xl bg-whiteCard overflow-hidden">
//       <div className="flex flex-row-reverse mt-2 mb-2">
//         <div className="flex flex-grow justify-end items-center gap-3">
//           {
//             user.role === "secretary" && (
//               <>
//               <div
//             className="border p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black"
//             onClick={() => setOpen(true)}
//             style={{ cursor: "pointer" }}
//           >

//             <img src={addTimeIcon} alt="إضافة وقت" />

//           </div>
//           {!isEmpty && (
//             <button
//               className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7"
//               onClick={() => setOpen(true)}
//             >
//               <img src={editIcon} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
//               {"تعديل"}
//             </button>
//           )}
//               </>

//             )
//           }

//         </div>
//         <h3 className="text-xl text-blue700">معلومات التواصل:</h3>
//         <img className="ml-2" src={medicalContact} alt="Contact" />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {data.map((card, index) => (
//           <div key={index} className=" p-3 rounded-lg">
//             <h3 className="text-right">{card.system}</h3>
//             <p className="text-right">{card.value}</p>
//           </div>
//         ))}
//       </div>
//       <DialogContactCenter open={open} setOpen={setOpen} />
//     </div>
//   );
// }

// export default ContactCenter;

import { useState } from "react";
import medicalContact from "./../../../../assets/icons/medical-center/setting/medicalContact.svg";
import editIcon from "./../../../../assets/icons/medical-center/setting/edit.svg";
import addTimeIcon from "./../../../../assets/icons/medical-center/setting/addtime.svg";
import DialogContactCenter from "./DialogContactCenter";
import { useSelector } from "react-redux";
import DialogEditTelcome from "./DialogEditTelcome";

function ContactCenter({ data }) {
  const [open, setOpen] = useState(false);
  const [openEditTelcome, setOpenEditTelcome] = useState(false);

  const isEmpty = !data || data.length === 0;
  const user = useSelector((state) => state.user);

  return (
    <div className="border p-4 rounded-xl bg-whiteCard overflow-hidden">
      <div className="flex flex-row-reverse mt-2 mb-2">
        <div className="flex flex-grow justify-end items-center gap-3">
          {
            <>
              <div
                className="border p-4 rounded-xl h-4 flex justify-center items-center hover:bg-slate-300 text-black"
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              >
                {
                  user.role === "secretary" && (
                    <img src={addTimeIcon} alt="إضافة وقت" />
                  )
                }
               
              </div>
              {!isEmpty && user.role === "secretary" && (
                <button
                  className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-7"
                  onClick={() => setOpenEditTelcome(true)}
                >
                  <img
                    src={editIcon}
                    className="w-5 h-5 mr-2 ml-2"
                    alt="Edit"
                  />
                  {"تعديل"}
                </button>
              )}
            </>
          }
        </div>
        <h3 className="text-xl text-blue700">معلومات التواصل:</h3>
        <img className="ml-2" src={medicalContact} alt="Contact" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div key={index} className=" p-3 rounded-lg">
            <h3 className="text-right">{card.system}</h3>
            <p className="text-right">{card.value}</p>
          </div>
        ))}
      </div>
      <DialogEditTelcome open={openEditTelcome} setOpen={setOpenEditTelcome} data={data} />

      <DialogContactCenter open={open} setOpen={setOpen}  />
    </div>
  );
}

export default ContactCenter;
