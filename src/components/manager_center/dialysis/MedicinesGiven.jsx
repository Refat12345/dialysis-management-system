/* eslint-disable react/prop-types */

// function MedicinesGiven() {
//     const drugs = [
//         { name: "حديد", dose: "2" },
//         { name: "هيبارين", dose: "2" },
//         { name: "ايدوتين", dose: "2" },
//       ];
    
//   return (
//     <div>
//          <div className="w-full">
//         <div className="cardd bg-cardInDialysisPage shadow-md rounded-lg overflow-hidden ">
//           <div className="cardThreeHeader  ">
//             <h2 className="text-xl font-semibold text-textButtonColor">
//               الأدوية المعطاة
//             </h2>
//           </div>

    
//           <div className="table w-full">
//             <div
//               dir="rtl"
//               className="w-full bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <div className="headertable flex justify-start items-center border-b rounded-t-lg">
//                 <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
//                   اسم الدواء
//                 </h2>
//                 <h3 className="text-xl text-gray-600 flex-1 ">جرعة الدواء</h3>
//               </div>

//               {drugs.map((drug, index) => (
//                 <div
//                   key={index}
//                   className="tabledata flex justify-start items-center border-b"
//                 >
//                   <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
//                     {drug.name}
//                   </span>
//                   <span className="span2 text-lg text-gray-700 flex-1 pr-3">
//                     {drug.dose}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
function MedicinesGiven({ medicines }) {
  return (
    <div>
      <div className="w-full">
        <div className="cardd bg-white shadow-md rounded-lg overflow-hidden">
          <div className="cardThreeHeader">
            <h2 className="text-xl font-semibold text-textButtonColor">
              الأدوية المعطاة
            </h2>
          </div>

          <div className="table w-full">
            <div
              dir="rtl"
              className="w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="headertable flex justify-start items-center border-b rounded-t-lg">
                <h2 className="text-xl text-gray-600 flex-1 border-l-2">
                  اسم الدواء
                </h2>
                <h3 className="text-xl text-gray-600 flex-1">جرعة الدواء</h3>
              </div>

              {medicines.map((medicine, index) => (
                <div
                  key={index}
                  className="tabledata flex justify-start items-center border-b"
                >
                  <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 font-bold">
                    {medicine.medicineName}
                  </span>
                  <span className="span2 text-lg text-gray-700 flex-1 pr-3 font-bold">
                    {medicine.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MedicinesGiven
