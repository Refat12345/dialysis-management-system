/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function MachineData() {
    const [machineData, setMachineData] = useState({
        sodiumConcentration: '140 mEq/L',
        pumpSpeed: '300 مل/د',
        venousPressure: '150 mmHg',
        filterType: 'FX CorDiax',
        filterColorPostSession: 'أصفر فاتح',
        vascularAccess: 'قثطرة دائمة'
      });
  return (
    <div>
       <div className="cardFive bg-cardInDialysisPage w-full flex flex-col justify-start rounded-lg ">
      <div className="cardGrid grid grid-cols-2">
        <h4 className="text-right">تركيز الصوديوم</h4>
        <h4 className="text-right">{machineData.sodiumConcentration}</h4>

        <h4 className="text-right">سرعة المضخة</h4>
        <h4 className="text-right">{machineData.pumpSpeed}</h4>

        <h4 className="text-right">الضغط الوريدي</h4>
        <h4 className="text-right">{machineData.venousPressure}</h4>

        <h4 className="text-right">نوع الفلتر</h4>
        <h4 className="text-right">{machineData.filterType}</h4>

        <h4 className="text-right">لون الفلتر بعد الجلسة</h4>
        <h4 className="text-right">{machineData.filterColorPostSession}</h4>

        <h4 className="text-right">المدخل الوعائي</h4>
        <h4 className="text-right">{machineData.vascularAccess}</h4>
      </div>
    </div>
    </div>
  )
}
