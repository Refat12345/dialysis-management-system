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
        },
      ],
    };

    try {
      setLoading(true);
      await addCenterContact(telecomsData).unwrap();
      toast.success("تم إرسال  البيانات بنجاح!");
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
    finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">
          {"صندوق العافية المركزي"}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <FormControl fullWidth className="mb-4">
            <InputLabel id="contact-type-label">نوع معلومة التواصل</InputLabel>
            <Select
              labelId="contact-type-label"
              id="contact-type"
              value={contactType}
              label="نوع معلومة التواصل"
              onChange={handleTypeChange}
            >
              <MenuItem value={"mobile"}>جوال</MenuItem>
              <MenuItem value={"email"}>ايميل</MenuItem>
              <MenuItem value={"landline"}>ارضي</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="mb-4">
            <InputLabel htmlFor="contact-value">القيمة</InputLabel>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact-value"
              type="text"
              placeholder=""
              value={contactValue}
              onChange={handleValueChange}
            />
          </FormControl>
          <DialogActions>
           
             <CustomButton
              variant="solid"
              onClick={handleSubmit}
              className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
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
