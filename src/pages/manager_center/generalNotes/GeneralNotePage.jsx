import React from "react";
import { Globalnotes } from "./../../../data/data";
import GlobalNotes from "../../../components/manager_center/globalNotes/GlobalNotes";

export default function GeneralNotePage() {
  return (
    <div dir="rtl">
      <span className="text-blue-500 text-lg">الملاحظات العامة</span>

      {Globalnotes.map((card, index) => (
        <GlobalNotes key={index} note={card} />
      ))}
    </div>
  );
}
