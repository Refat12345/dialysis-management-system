/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ButtonLoader, CustomButton } from "../../../../components";
import { useAssignAppointmentMutation } from "../../../../services/manager_center/appointment/assignAppointmentSlice";
import { toast, ToastContainer } from "react-toastify";

function AppointmentDialog({ open, setOpen ,body}) {
 
  const handleClose = () => {
    setOpen(false);
  };
  const [assignAppointment,{isLoading, error:err}] = useAssignAppointmentMutation()

  const handlePost = async ()=>{
    try{

      const request = {
        appointmentID: body.appointmentID,
        userID: body.userID,
      }
    
      const response = await assignAppointment(request).unwrap()

      toast.success("تم حجز الموعد بنجاح")
      setOpen(false);
    }catch(error){
      toast.error("غير مصرح لك للقيام بهذه العملية");
      
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <ToastContainer position="top-right"/>
      <DialogContent className="p-4 w-[450px] " dir="rtl">
        <p className="font-bold text-titleColor text-lg text-center">
            {"هل أنت متأكد من حجز يوم " + body.day +" الكرسي رقم " + body.chairNumber + " للمريض " + body.patientName +"  ؟"}
        </p>
        <div className="mb-3"></div>
        <div className="flex justify-center">
                        <button onClick={handleClose} className="bg-bgbutton w-16 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg ml-2">
                            {"لا"}
                        </button>
                        {!isLoading ? (
                            <button onClick={handlePost} className="bg-bgbutton w-16 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg">
                                {"نعم"}
                            </button>
                        ) : (
                            <ButtonLoader />
                        )}
                    </div>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentDialog;
