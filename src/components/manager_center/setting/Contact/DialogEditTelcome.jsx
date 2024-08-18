/* eslint-disable react/prop-types */
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateMedicalDataMutation } from "../../../../services/manager_center/setting/SettingSlice";

function DialogEditTelcome({ open, setOpen, data }) {

  const [form, setForm] = useState(data.map((item) => ({ ...item })));
  const [editTelcome] = useUpdateMedicalDataMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, index, field) => {
    const newForm = [...form];
    newForm[index][field] = e.target.value;
    setForm(newForm);
  };

  const handleClose = () => {
    setOpen(false);
  };


const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsLoading(true);
    
    const telecomsData = form.map((item) => {
      let { use, value, system, id } = item;
      return { id, system, value, use };
    });
  
    const dataToSend = {
      id: user.centerID, 
      telecom: telecomsData
    };
  
    try {
      await editTelcome(dataToSend).unwrap();
      toast.success("تم تحديث معلومة الاتصال  ");
    } catch (error) {
      console.error("خطأ في تحديث معلومة الاتصال:", error);
      toast.error("خطأ في تحديث معلومة الاتصال:");
    }
  
    setIsLoading(false);
    setOpen(false);
  };

  const user = useSelector((state) => state.user);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
      <span style={{ color: "#e0bf7d" }} className="text-4xl ">
          {"تعديل معلومات الاتصال "}
        </span>      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className=" mx-auto p-4  w-full">
          <form onSubmit={handleSubmit}>
            {form.map((card, index) => (
              <div key={index} dir="rtl">
                <div className="mb-4 w-96">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="shiftName"
                  >
                    اسم معلومة الاتصال:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="shiftName"
                    type="text"
                    value={card.system}
                    onChange={(e) => handleInputChange(e, index, "system")}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 w-full cursor-pointer"
                    htmlFor="endTime"
                  >
                    القيمة:
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="shiftName"
                      value={card.value}
                      onChange={(e) => handleInputChange(e, index, "value")}
                    />
                  </label>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              <button
                className="bg-bgbutton text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "جارٍ التحميل..." : "حفظ التعديلات"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogEditTelcome;
