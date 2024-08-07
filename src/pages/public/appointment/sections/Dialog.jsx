/* eslint-disable react/prop-types */

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

function AppointmentDialog({ open, setOpen }) {
  

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">
          {"صندوق العافية المركزي"}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <p>
            sssssssssss
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentDialog;
