/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddShiftMutation } from "../../../../services/manager_center/setting/SettingSlice";

export default function DialogTimeCenter({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [shiftName, setShiftName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [addShift] = useAddShiftMutation();

  const handleInputChange = (e, setter) => setter(e.target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newShift = {
  //     shiftStart: startTime,
  //     shiftEnd: endTime,
  //     name: shiftName,
  //     centerID: "1",
  //   };
  //   addShift(newShift)
  //     .unwrap()
  //     .then((payload) => {
  //       console.log("وردية جديدة تمت إضافتها:", payload);
  //       setOpen(false);
  //     })
  //     .catch((error) => console.error("خطأ في إضافة وردية:", error));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formattedStartTime = startTime;
    let formattedEndTime = endTime;

    if (startTime.length === 5) formattedStartTime += ":00";
    if (endTime.length === 5) formattedEndTime += ":00";

    const newShift = {
      shiftStart: formattedStartTime,
      shiftEnd: formattedEndTime,
      name: shiftName,
      centerID: "1",
    };
    addShift(newShift)
      .unwrap()
      .then((payload) => {
        console.log("وردية جديدة تمت إضافتها:", payload);
        setOpen(false);
      })
      .catch((error) => console.error("خطأ في إضافة وردية:", error));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">{"اضافة وردية"}</span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className=" mx-auto p-4  w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="shiftName"
              >
                اسم الوردية:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="shiftName"
                type="text"
                placeholder="أدخل اسم الوردية"
                value={shiftName}
                onChange={(e) => handleInputChange(e, setShiftName)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 w-full cursor-pointer"
                htmlFor="startTime"
              >
                وقت بدء الوردية:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => handleInputChange(e, setStartTime)}
                  onClick={(e) => e.currentTarget.showPicker()}
                />
              </label>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 w-full cursor-pointer"
                htmlFor="endTime"
              >
                وقت انتهاء الوردية:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endTime"
                  type="time"
                  value={endTime}
                  onChange={(e) => handleInputChange(e, setEndTime)}
                  onClick={(e) => e.currentTarget.showPicker()}
                />
              </label>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                حفظ
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
