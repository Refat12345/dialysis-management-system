/* eslint-disable react/prop-types */

import { bodyMeduimStyle } from "../../../../utils/StyleUtils";

export const CardRow = ({ title, content, color }) => {
  return (
    <div dir="rtl" className="flex flex-row my-1 px-3 py-1 w-full">
      <div className={`${bodyMeduimStyle} flex w-1/3`}>{title}:</div>
      <div className={`${bodyMeduimStyle} ${color} font-bold w-2/3 px-1`}>{content}</div>
    </div>
  );
};

export const CardHeader = ({ title, icon }) => (
  <div
    dir="rtl"
    className="flex flex-row rounded-t-2xl items-center justify-between border-[#2E307D26] border-[1px] lg:p-3 p-2 bg-blue400"
  >
    <h2 className={`${bodyMeduimStyle} font-semibold`}>{title}</h2>
    <img className="w-6" src={icon} alt="" />
  </div>
);

const GlobalInfoCard = ({ headerTitle, headerIcon, cardContent }) => {
  return (
    <div className="bg-cardColor shadow rounded-lg break-inside-avoid pb-2 mb-5">
      <CardHeader title={headerTitle} icon={headerIcon} />
      <div className="py-1">{cardContent}</div>
    </div>
  );
};

export default GlobalInfoCard;
