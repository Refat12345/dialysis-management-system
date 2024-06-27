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

function DialogContactCenter({ open, setOpen }) {
  const [contactType, setContactType] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [addCenterContact] = useAddCenterContactMutation();

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
      await addCenterContact(telecomsData).unwrap();
      toast.success("تم إرسال  البيانات بنجاح!");
      setOpen(false);
    } catch (error) {
      console.error("Failed to save the contact:", error);
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
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              حفظ
            </button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogContactCenter;
