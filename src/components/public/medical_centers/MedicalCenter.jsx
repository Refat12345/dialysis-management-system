/* eslint-disable react/prop-types */
import { useState } from "react";
import EllipsisIcon from "../../../assets/icons/public/ellipsis.svg";
import AlertDialog from "../dialog/Dialog";
import MedicalCenterDetails from "./MedicalCenterDetails";

const MedicalCenter = ({ icons, content ,role }) => {

  const title = ["العنوان","معلومات التواصل","تفاصيل عامة"] ;
  const height = window.innerHeight;
  const width = window.innerWidth;

  const responsiveCenterIcon = height > 600 ? (height > 700 ? "w-[23.8%]" : (height > 630 ? "w-[22%]":"w-[21.2%]")) : "w-[20%]"
  const responsiveCenterName = height > 600 ? (height > 700 ? "mt-3 text-17 " : (height > 630 ? "mt-2 text-base" : "mt-1.5 text-base")) : "mt-2 text-sm";
  const responsiveAddress = height > 600 ? (height > 700 ? "mt-3" : (height > 630 ? "mt-2" : "mt-1.5")) : "mt-2";
  const responsiveAddressContent = height > 700 && width > 1315 ? "text-s" : "text-xs";

 
  const [isEllipsisHovered, setIsEllipsisHovered] = useState(false);

  const handleEllipsisClick = (event) => {
    event.stopPropagation();
  };

  const handleEllipsisMouseEnter = () => {
    setIsEllipsisHovered(true);
  };

  const handleEllipsisMouseLeave = () => {
    setIsEllipsisHovered(false);
  };


  return (
    <div
      dir="rtl"
      className={`medical-center p-4 bg-white rounded-lg shadow-lg ${
        isEllipsisHovered ? "" : role === "admin" && "hover:cursor-pointer hover:bg-gray-100"
      }`}
    >
      <div className="flex flex-row justify-between">
        <div className={`${responsiveCenterIcon}`}>
          <img src={icons.centerIcon} />
        </div>
        <div onClick={handleEllipsisClick}>
          <AlertDialog 
              renderComponent={
                <img
                  src={EllipsisIcon}
                  className="w-6 h-6 hover:bg-gray-100  hover:cursor-pointer"  
                  onMouseEnter={handleEllipsisMouseEnter}
                  onMouseLeave={handleEllipsisMouseLeave}
                />
              }
              contentComponent={<MedicalCenterDetails title={title} content={content} />}
              titleButton={"رجوع"}
          />
        </div>
        </div>
        <p className={`${responsiveCenterName} font-primaryBold `}>
            {content.centerName}
        </p>
        <div className={`flex ${responsiveAddress} mb-2`}>
            <img className="w-5 h-5" src={icons.addressIcon} />
            <p className={` font-primaryRegular ${responsiveAddressContent} ${width > 1320 ? "mr-2" :"mr-1.5"} whitespace-nowrap overflow-hidden text-ellipsis`}>{content.address}</p>
        </div>
    </div>
  );
};

export default MedicalCenter;


