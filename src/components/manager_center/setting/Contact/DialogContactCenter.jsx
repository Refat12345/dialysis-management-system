/* eslint-disable react/prop-types */


import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useAddCenterContactMutation } from "../../../../services/manager_center/setting/SettingSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "../../../public/button/CustomButton";
import { bodyMeduimStyle, bodySmallStyle } from "../../../../utils/StyleUtils";

function DialogContactCenter({ open, setOpen }) {
  const [contactType, setContactType] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [addCenterContact] = useAddCenterContactMutation();
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTypeChange = (event) => {
    setContactType(event.target.value);
  };

  const handleValueChange = (event) => {
    setContactValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const telecomsData = {
      centerID: user.centerID,
      telecoms: [
        {
          system: contactType,
          value: contactValue,
          use:"مركز طبي"
        },
      ],
    };

    try {
      setLoading(true);
      await addCenterContact(telecomsData).unwrap();
      toast.success("تم إرسال البيانات بنجاح!");
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center">
      <span style={{ color: "#e0bf7d" }} className="text-4xl ">
          {"اضافة معلومة اتصال "}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full h-48" dir="rtl">
        <form className="w-full max-w-lg h-full" onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-3 h-12">
            <InputLabel id="contact-type-label">نوع معلومة التواصل</InputLabel>
            <Select
              labelId="contact-type-label"
              id="contact-type"
              value={contactType}
              label="نوع معلومة التواصل"
              onChange={handleTypeChange}
            >
              <MenuItem value={"جوال"}>جوال</MenuItem>
              <MenuItem value={"بريد الكتروني"}>ايميل</MenuItem>
              <MenuItem value={"ارضي"}>ارضي</MenuItem>
            </Select>
          </FormControl>

          <div className="mt-5 mb-5"></div>

          <FormControl fullWidth className="h-12 ">
            <InputLabel htmlFor="contact-value">القيمة</InputLabel>
            <input
              className=" h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact-value"
              type="text"
              placeholder=""
              value={contactValue}
              onChange={handleValueChange}
            />
          </FormControl>

          <DialogActions className="flex justify-center items-center mt-4">
  <CustomButton
    variant="solid"
    onClick={handleSubmit}
    className={`bg-bgbutton text-white h-8  transition-all font-semibold ${bodyMeduimStyle}`}
    title={
      <div className="flex items-center justify-center">
        {loading ? (
          <span className={`${bodySmallStyle}`}>جاري التحميل...</span>
        ) : (
          <>
            <span className={`${bodySmallStyle}`}>حفظ</span>
            <div className="lg:w-2 md:w-2 w-1"></div>
          </>
        )}
      </div>
    }
    radius="full"
    disabled={loading}
  />
</DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogContactCenter;
