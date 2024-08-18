/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEditShiftMutation } from "../../../../services/manager_center/setting/SettingSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DialogEditShifts({ open, setOpen, data }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [form, setForm] = useState(data.map((item) => ({ ...item })));
  const [editShift] = useEditShiftMutation();
  const [isLoading, setIsLoading] = useState(false); 

  const handleInputChange = (e, index, field) => {
    const newForm = [...form];
    newForm[index][field] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    setIsLoading(true);
    const promises = form.map((item, index) => {
      let { name, centerID, shiftStart, shiftEnd, id } = item;
      if (shiftStart.length === 5) shiftStart += ":00";
      if (shiftEnd.length === 5) shiftEnd += ":00";
      const updatedShift = { name, centerID, shiftStart, shiftEnd, id };

      return editShift(updatedShift).unwrap(); 
    });

    try {
      await Promise.all(promises); 
      toast.success("تم تحديث الوردية:");
    } catch (error) {
      console.error("خطأ في تحديث الورديات:", error);
      toast.error("خطأ في تحديث الوردية:");
    }

    setIsLoading(false); 
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
      <span style={{ color: "#e0bf7d" }} className="text-4xl ">
          {"تعديل وردية"}
        </span>      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className=" mx-auto p-4  w-full" >
          <form onSubmit={handleSubmit}> 
            {form.map((card, index) => (
              <div key={index} dir="rtl">
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
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button
                className="bg-bgbutton  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading} 
              >
                {isLoading ? 'جارٍ التحميل...' : 'حفظ التعديلات'} 
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}