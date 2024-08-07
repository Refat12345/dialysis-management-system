import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useAddMedicalDataMutation } from "../../../../services/manager_center/setting/SettingSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "../../../public/button/CustomButton";
import { bodyMeduimStyle, bodySmallStyle } from "../../../../utils/StyleUtils";

function DialogNote({ open, setOpen, data }) {
  const [addMedicalData] = useAddMedicalDataMutation();
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [noteContent, setNoteContent] = useState(data);

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSubmit =  async (e) => {
    event.preventDefault();
    const newData = {
      description: noteContent,
    
    };
    try {
      setLoading(true);
      await addMedicalData(newData).unwrap();
      toast.success("تم إرسال البيانات بنجاح!");
      setOpen(false);
    } catch (error) {
      console.error("Failed to save the data:", error);
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">
          {"تفاصيل عامة"}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className="flex flex-col items-center justify-center p-4">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
  <div className="mb-4 w-96">
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-72"
      id="note-content"
      placeholder="أدخل النص هنا..."
      value={noteContent}
      onChange={(e) => handleInputChange(e, setNoteContent)}
    />
  </div>
  <div className="flex items-center justify-center">
    {/* <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      حفظ
    </button> */}
     <CustomButton
              variant="solid"
              onClick={handleSubmit}
              className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
              title={
                <div className="flex items-center justify-center">
                  {loading ? (
                    <span className={`${bodyMeduimStyle}`}>جاري التحميل...</span>
                  ) : (
                    <>
                      <span className={`${bodySmallStyle}`}>اضافة</span>
                      <div className="lg:w-2 md:w-2 w-1"></div>
                    </>
                  )}
                </div>
              }
              radius="full"
              disabled={loading}
            />
  </div>
</form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogNote;