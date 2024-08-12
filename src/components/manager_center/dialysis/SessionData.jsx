/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SessionData({data}) {

  
  
  
 

  const sessionData = {
    nurseName: data.dialysisSession.nurse,
    centerName: data.dialysisSession.center,
    supervisingDoctor: data.dialysisSession.doctor,
    sessionStatus: data.dialysisSession.sessionStartTime.split(' ')[1].slice(0, 5),
    sessionDate: data.dialysisSession.sessionStartTime.split(' ')[0],  
  };

  return (
    <div>
      <div className="cardOne bg-white w-full flex flex-col justify-start rounded-lg ">
        <div className="cardOneHeader flex flex-row justify-start ">
          <h5 className="text-titleColor font-bold text-xl ">جلسة غسيل الكلى</h5>
        </div>

        <div className="cardGrid grid grid-cols-2 ">
          <h4 className="text-right">اسم الممرض</h4>
          <h4 className="text-right font-bold">{sessionData.nurseName}</h4>

          <h4 className="text-right">اسم المركز</h4>
          <h4 className="text-right font-bold">{sessionData.centerName}</h4>

          <h4 className="text-right">اسم الطبيب المشرف</h4>
          <h4 className="text-right font-bold">{sessionData.supervisingDoctor}</h4>

          <h4 className="text-right">حالة الجلسة</h4>
          <h4 className="text-right font-bold">{sessionData.sessionStatus}</h4>

          <h4 className="text-right">تاريخ الجلسة</h4>
          <h4 className="text-right font-bold">{sessionData.sessionDate}</h4>
        </div>
      </div>
    </div>
  );
}

export default SessionData;
