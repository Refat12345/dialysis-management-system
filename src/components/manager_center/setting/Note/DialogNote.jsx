/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState,useContext } from "react";
import { DataContext } from "../DataContext";

function DialogNote({ open, setOpen }) {
    const { data, setData } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
  };
  const [farmManager, setFarmManager] = useState(data.NoteContent);

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, NoteContent: farmManager });
    setOpen(false);
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
      id="farm-manager"
      placeholder="أدخل النص هنا..."
      value={farmManager}
      onChange={(e) => handleInputChange(e, setFarmManager)}
    />
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

export default DialogNote;
