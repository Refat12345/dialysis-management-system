/* eslint-disable no-unused-vars */
import DialogContactCenter from "../Contact/DialogContactCenter";
import { useState, useEffect } from "react";
import DialogTimeCenter from "../TiemCenter/DialogTimeCenter";
import DialogCardd from "./DialogCardd";
function Cardd({ data, title, icon }) {
  const [open, setOpen] = useState(false);

  const height = window.innerHeight;

  const style = {
    borderRadius: "50%",
    backgroundColor: "#e4e9f4",
  };
  const styleComponent = {
    marginTop: height > 700 ? "24px" : height < 620 ? "10px" : "16px",
  };
  const responsiveWidth = "w-full sm:w-1/2 md:w-1/3 lg:w-3/4";
  const responsiveHeight = "h-auto";
  const responsiveMargin = "mx-5 my-2";
  const overflowClass = "overflow-hidden";

  const handleClick = () => {
    if (title === "اجمالي الكراسي") {
      setOpen(true);
    }
  };

  return (
    <>
      <>
        <div
          style={styleComponent}
          dir="rtl"
          className={`${responsiveHeight} ${responsiveWidth} ${responsiveMargin}  ${overflowClass} bg-gray300 rounded-xl shadow-lg flex flex-row-reverse items-center text-right`}
          onClick={handleClick}
        >
          <div className="mr-6 ml-5 ">
            <p className="font-bold text-2xl">{data}</p>

            <div className="text-base mb-2">{title}</div>
          </div>

          <div
            style={style}
            className=" flex justify-center items-center w-14 h-14 "
          >
            <img src={icon} alt="" />
          </div>
        </div>
      </>

      <DialogCardd open={open} setOpen={setOpen} />
    </>
  );
}


export default Cardd;
