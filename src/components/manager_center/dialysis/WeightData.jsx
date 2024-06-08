/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
  
  export default function WeightData({data}) {
 
  const weightData = {
    weightBefore: data.dialysisSession.weightBeforeSession,
    weightAfter: data.dialysisSession.weightAfterSession,
    totalWithdrawalRate: data.dialysisSession.totalWithdrawalRate,
    sessionStart: data.dialysisSession.sessionStartTime.split(' ')[1].slice(0, 5),
    sessionEnd: data.dialysisSession.sessionEndTime.split(' ')[1].slice(0, 5), 
  };
    return (
      <div>
        <div className="cardTwo bg-cardInDialysisPage w-full flex flex-col justify-start rounded-lg ">
      <div className="cardGrid grid grid-cols-2">
        <h4 className="text-right">الوزن قبل الجلسة</h4>
        <h4 className="text-right">{weightData.weightBefore}</h4>

        <h4 className="text-right">الوزن بعد الجلسة</h4>
        <h4 className="text-right">{weightData.weightAfter}</h4>

        <h4 className="text-right">معدل السحب الكلي/سا</h4>
        <h4 className="text-right">{weightData.totalWithdrawalRate}</h4>

        <h4 className="text-right">وقت بداية الجلسة</h4>
        <h4 className="text-right">{weightData.sessionStart}</h4>

        <h4 className="text-right">وقت نهاية الجلسة</h4>
        <h4 className="text-right">{weightData.sessionEnd}</h4>
      </div>
    </div>
      </div>
    )
  }
  