/* eslint-disable react/prop-types */
// import React from 'react'

// export default function NotesSessionData() {
//   return (
//     <div>
//       <div className="w-full">
//         <div className="cardSix bg-cardInDialysisPage shadow-md rounded-lg overflow-hidden">
//           <div className="cardSixHeader">
//             <h4 className="text-xl font-semibold text-textButtonColor">
//               ملاحظات الجلسة
//             </h4>
//           </div>

//           <div className="tablee  w-full">
//             <div
//               dir="rtl"
//               className="w-full    rounded-lg overflow-hidden"
//             >
//               <textarea
//                 className="notes  w-full  text-lg text-gray-700  rounded-lg   "
//                 placeholder="أدخل ملاحظاتك هنا..."
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


export default function NotesSessionData({ notes }) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h4 className="text-xl font-semibold text-textButtonColor">
            ملاحظات الجلسة
          </h4>
        </div>
        <div className="p-4">
          {notes.length === 0 ? (
            <div className="text-gray-500 h-20">لا توجد ملاحظات</div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="relative group">
                <div className="hidden group-hover:block absolute bg-white border border-gray-300 p-2 rounded shadow-lg z-10">
                  {note.noteContent}
                </div>
                <div className="p-2 bg-gray-100 rounded cursor-pointer">
                  {note.noteContent.substring(0, 20)}...
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
