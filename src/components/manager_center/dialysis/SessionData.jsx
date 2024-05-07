/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SessionData() {
  const [sessionData, setSessionData] = useState({
    nurseName: "سعيد الحوزاني",
    centerName: "حسن حبنكة",
    supervisingDoctor: "سعيد محمد",
    sessionStatus: "منتهية",
    sessionDate: "2024 كانون2 الثاني",
  });
  return (
    <div>
      <div className="cardOne bg-cardInDialysisPage w-full flex flex-col justify-start rounded-lg ">
        <div className="cardOneHeader flex flex-row justify-start ">
          <h5 className="text-textButtonColor text-xl ">جلسة غسيل الكلى</h5>
        </div>

        <div className="cardGrid grid grid-cols-2 ">
          <h4 className="text-right">اسم الممرض</h4>
          <h4 className="text-right">{sessionData.nurseName}</h4>

          <h4 className="text-right">اسم المركز</h4>
          <h4 className="text-right">{sessionData.centerName}</h4>

          <h4 className="text-right">اسم الطبيب المشرف</h4>
          <h4 className="text-right">{sessionData.supervisingDoctor}</h4>

          <h4 className="text-right">حالة الجلسة</h4>
          <h4 className="text-right">{sessionData.sessionStatus}</h4>

          <h4 className="text-right">تاريخ الجلسة</h4>
          <h4 className="text-right">{sessionData.sessionDate}</h4>
        </div>
      </div>
    </div>
  );
}

export default SessionData;
