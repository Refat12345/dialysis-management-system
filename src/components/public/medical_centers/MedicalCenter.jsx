/* eslint-disable react/prop-types */
import { useState } from "react";
import EllipsisIcon from "../../../assets/icons/public/ellipsis.svg";
import AlertDialog from "../dialog/Dialog";
import TextArea from "../text_area/TextArea";

const MedicalCenter = ({ icons, content }) => {

  const height = window.innerHeight;
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

  const [userInput, setUserInput] = useState(''); 
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
     
  };
  const handleConfirmation = () => {
    if (userInput  === "") {
      alert('يجب تدخيل أحرف');
    } else {
        console.log("a");
    }
  };

  return (
    <div
      dir="rtl"
      className={`medical-center p-4 bg-white rounded-lg shadow-lg ${
        isEllipsisHovered ? "" : "hover:cursor-pointer hover:bg-gray-100"
      }`}
    >
      <div className="flex flex-row justify-between">
        <div
          className={`${height > 600 ? (height > 700 ? "w-[25%]" : "w-[22%]") : "w-[20%]"}`}
        >
          <img src={icons.centerIcon} />
        </div>
        <div onClick={handleEllipsisClick}>
        <AlertDialog renderComponent={<img
          src={EllipsisIcon}
          className="w-6 h-6 hover:bg-gray-100 hover:cursor-pointer"
          
          onMouseEnter={handleEllipsisMouseEnter}
          onMouseLeave={handleEllipsisMouseLeave}
        />}
        contentComponent={<div dir="rtl">
              <p className="text-lg text-titleSideColor font-primaryBold mb-4">سبب نقل المريض الى مركز اخر</p>
              <TextArea value={userInput} onChange={handleUserInput} label={"السبب"} />
              <div className='flex flex-row justify-center'>
          <button onClick={handleConfirmation}
            className='my-4 font-primaryBold bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg '
          >{"تأكيد"}
          </button>
        </div>
        </div>}
       
        />
        </div>
      </div>
      <p
        className={`${
          height > 600 ? (height > 700 ? "mt-4 text-lg " : "mt-2 text-base") : "mt-1 text-sm"
        } font-primaryBold `}
      >
        {content.centerName}
      </p>
      <div
        className={`flex ${height > 600 ? (height > 700 ? "mt-4" : "mt-2") : "mt-1"} mb-2`}
      >
        <img src={icons.addressIcon} />
        <p className={` font-primaryRegular ${height > 700 ? "text-sm" : "text-xs"} mr-2`}>{content.address}</p>
      </div>
    </div>
  );
};

export default MedicalCenter;