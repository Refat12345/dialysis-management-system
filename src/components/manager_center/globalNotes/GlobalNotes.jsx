/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import image from "./../../../assets/icons/medical-center/detailsSession.svg";

function GlobalNotes({ note }) {
  return (
    <div dir="rtl">
      <div className="mt-5 w-full rounded overflow-hidden shadow-lg p-4 bg-cardInDialysisPage flex flex-row-reverse">
        <div className="w-2/5 p-2">
          <h4 className="text-right pb-2">تفاصيل الملاحظة:</h4>
          <div>{note.content}</div>
        </div>
        <div className="w-3/5  ">
          <div className="grid grid-cols-2 gap-4">
            <h4 className="text-right">مرسل الملاحظة</h4>
            <h4 className="text-right">{note.sender}</h4>

            <h4 className="text-right">مستقبل الملاحظة</h4>
            <h4 className="text-right">{note.receiver}</h4>

            <h4 className="text-right flex items-center">نوع الملاحظة</h4>
            <h4 className="text-right flex items-center">
              {note.type === "ملاحظة جلسة غسيل" ? (
                <>
                  {note.type}
                  <img className="w-40 h-10 pr-4 " src={image} />
                </>
              ) : (
                note.type
              )}
            </h4>

            <h4 className="text-right">التاريخ والوقت</h4>
            <h4 className="text-right">{note.date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalNotes;
