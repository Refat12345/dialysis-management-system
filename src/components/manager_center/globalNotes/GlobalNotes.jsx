/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import image from "./../../../assets/icons/medical-center/detailsSession.svg";



function GlobalNotes({ note, type }) {
  return (
    <div >
      



      <div className="mt-5 w-full  overflow-hidden rounded-lg  shadow-inner shadow-grey-200  p-4 bg-primaryColor flex flex-row" dir="rtl">

      <div className="grid grid-cols-2 gap-96 ">

        <div className="w-64">
        <div className="grid grid-cols-2 gap-4">
            <h4 className="text-right">مرسل الملاحظة</h4>
            <h4 className="text-right font-bold">{note.senderName}</h4>

            {/* {type !== "sidebar" ? (
              <>
                <h4 className="text-right">مستقبل الملاحظة</h4>
                <h4 className="text-right">{note.receiverName}</h4>
              </>
            ) : null} */}

            <h4 className="text-right">التاريخ والوقت</h4>
            <h4 className="text-right font-bold">{note.date}</h4>
          </div>
        </div>

        <div className="w-96">
        <h4 className="text-right pb-2">تفاصيل الملاحظة:</h4>
        <div className="break-words font-bold">{note.noteContent}</div>
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default GlobalNotes;