/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
  
  export default function WeightData() {
    const [weightData, setWeightData] = useState({
    weightBefore: '70كغ',
    weightAfter: '60كغ',
    totalWithdrawalRate: 'معدل السحب الكلي/سا',
    sessionStart: '12:00PM',
    sessionEnd: '4:00PM'
  });
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
  