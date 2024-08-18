/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataContext } from "../DataContext";
import CustomTextField from "../../../public/textfield/CustomTextField";
import { useAddChairMutation } from "../../../../services/manager_center/setting/SettingSlice";
function DialogCardd({ open, setOpen }) {
  const [addChair, { isLoading }] = useAddChairMutation();

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    chairNumber: "",
    roomNumber: "",
  });
  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const chairData = {
        chairNumber: state.chairNumber,
        roomName: state.roomNumber,
      };
      await addChair(chairData)
        .unwrap()
        .then((result) => {
        });
      toast.success("  تم إرسال  البيانات بنجاح بانتظار الموافقة");
      setState({
        chairNumber: "",
        roomNumber: "",
      });

      setOpen(false);
    } catch (error) {
      if (error.status === 400) {
        const errorMessage = error.data.error || "حدث خطأ أثناء تحديث البيانات";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else if (error.status === 403) {
        const errorMessage =
          error.data.error ||
          "ليس لديك التصاريح اللازمة للوصول إلى هذه الـ API";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else {
        console.error("حدث خطأ أثناء تحديث البيانات", error);
        toast.error("حدث خطأ أثناء تحديث البيانات");
      }
    } 
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">{"اضافة كرسي"}</span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className="flex flex-col items-center justify-center p-4">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4 w-96">
              <CustomTextField
                size="3"
                required={true}
                label={"رقم الكرسي"}
                value={state.chairNumber}
                type="text"
                onChange={(e) =>
                  updateState({
                    chairNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <CustomTextField
                size="3"
                required={true}
                label={"رقم القاعة"}
                value={state.roomNumber}
                type="text"
                onChange={(e) =>
                  updateState({
                    roomNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading} 
              >
                {isLoading ? "جارٍ التحميل..." : "حفظ"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCardd;
