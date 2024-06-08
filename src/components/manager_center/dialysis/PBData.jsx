/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function PBData({bloodPressures}) {

  return (
    // <div>
    //   <div className="w-full">
    //     <div className="cardd bg-cardInDialysisPage shadow-md rounded-lg overflow-hidden ">
    //       <div className="cardThreeHeader  ">
    //         <h2 className="text-xl font-semibold text-textButtonColor">
    //           الجلسة P/BP
    //         </h2>
    //       </div>

    //       <div className="table w-full  ">
    //         <div
    //           dir="rtl"
    //           className="w-full bg-white shadow-md rounded-lg overflow-hidden"
    //         >
    //           <div className="headertable flex justify-start items-center   border-b rounded-t-lg">
    //             <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
    //               التوقيت
    //             </h2>
    //             <h3 className="text-xl text-gray-600 flex-1 ">القيمة</h3>
    //           </div>
    //           {[...Array(3)].map((_, index) => (
    //             <div
    //               key={index}
    //               className="tabledata flex justify-start items-center   border-b"
    //             >
    //               <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
    //                 1:30 PM
    //               </span>
    //               <span className="span2 text-lg text-gray-700 flex-1 pr-3">
    //                 11.2
    //               </span>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
    <div className="w-full">
      <div className="cardd bg-cardInDialysisPage shadow-md rounded-lg overflow-hidden ">
        <div className="cardThreeHeader  ">
          <h2 className="text-xl font-semibold text-textButtonColor">
            الجلسة P/BP
          </h2>
        </div>

        <div className="table w-full  ">
          <div
            dir="rtl"
            className="w-full bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="headertable flex justify-start items-center   border-b rounded-t-lg">
              <h2 className="text-xl text-gray-600 flex-1 border-l-2 ">
                التوقيت
              </h2>
              <h3 className="text-xl text-gray-600 flex-1 ">القيمة</h3>
            </div>
            {bloodPressures.map((bp, index) => (
              <div
                key={index}
                className="tabledata flex justify-start items-center   border-b"
              >
                <span className="sapn1 text-lg text-gray-700 flex-1 border-l-2 ">
                  {new Date(bp.time).toLocaleTimeString('ar-EG', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="span2 text-lg text-gray-700 flex-1 pr-3">
                  {bp.pressureValue}/{bp.pulseValue}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PBData
