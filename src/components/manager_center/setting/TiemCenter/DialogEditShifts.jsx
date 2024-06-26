/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEditShiftMutation } from "../../../../services/manager_center/setting/SettingSlice";

export default function DialogEditShifts({
  open,
  setOpen,
  data,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const [form, setForm] = useState(data.map((item) => ({ ...item })));
  const [editShift] = useEditShiftMutation();

  const handleInputChange = (e, index, field) => {
    const newForm = [...form];
    newForm[index][field] = e.target.value;
    setForm(newForm);
  };

  // const handleSubmit = (e, index, id) => {
  //   e.preventDefault();

  //   let { name, centerID, shiftStart, shiftEnd } = form[index];
  //   if (shiftStart.length === 5) shiftStart += ":00";
  //   if (shiftEnd.length === 5) shiftEnd += ":00";
  //   const updatedShift = { name, centerID, shiftStart, shiftEnd, id };

  //   editShift(updatedShift)
  //     .unwrap()
  //     .then((payload) => {
  //       console.log("تم تحديث الوردية:", payload);
  //       setOpen(false);
  //     })
  //     .catch((error) => console.error("خطأ في تحديث الوردية:", error));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    form.forEach(async (item, index) => {
      let { name, centerID, shiftStart, shiftEnd, id } = item;
      if (shiftStart.length === 5) shiftStart += ":00";
      if (shiftEnd.length === 5) shiftEnd += ":00";
      const updatedShift = { name, centerID, shiftStart, shiftEnd, id };
  
      try {
        const payload = await editShift(updatedShift).unwrap();
        console.log("تم تحديث الوردية:", payload);
      } catch (error) {
        console.error("خطأ في تحديث الوردية:", error);
      }
    });
  
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">{"تعديل وردية"}</span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className=" mx-auto p-4  w-full">
          {form.map((card, index) => (
            <div key={index} dir="ltr">
              <form onSubmit={(e) => handleSubmit(e, index, card.id)}>
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
                    value={card.name}
                    onChange={(e) => handleInputChange(e, index, "name")}
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
                      value={card.shiftStart}
                      onChange={(e) =>
                        handleInputChange(e, index, "shiftStart")
                      }
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
                      value={card.shiftEnd}
                      onChange={(e) => handleInputChange(e, index, "shiftEnd")}
                      onClick={(e) => e.currentTarget.showPicker()}
                    />
                  </label>
                </div>

                {/* <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    حفظ
                  </button>
                </div> */}
              </form>
            </div>
          ))}
             <div className="flex items-center justify-center">
             <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={handleSubmit}
>
  حفظ التعديلات
</button>
                </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
