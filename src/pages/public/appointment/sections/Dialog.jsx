/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ButtonLoader, CustomButton } from "../../../../components";
import { useAssignAppointmentMutation } from "../../../../services/manager_center/appointment/assignAppointmentSlice";
import { toast } from "react-toastify";

function AppointmentDialog({ open, setOpen ,body}) {
 
  const handleClose = () => {
    setOpen(false);
  };
  const [assignAppointment,{isLoading, error:err}] = useAssignAppointmentMutation()

  const handlePost = async ()=>{
    try{
    
      const response = await assignAppointment(body).unwrap()
      console.log(response);
      
      toast.success("تم حجز الموعد بنجاح")
      setOpen(false);
    }catch(error){
      console.log(err);
      
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className="p-4 w-full " dir="rtl">
        <p className="font-bold text-titleColor text-xl">
            هل أنت متأكد من حجز الموعد
        </p>
        <div className="mb-3"></div>
        <div className="flex justify-center">
            {!isLoading ? <CustomButton
            variant="solid"
            onClick={handlePost}
            className={` bg-bgbutton text-white h-8  font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110 `}
            title={
              <div >
                <span className={``}>
                  نعم
                </span>
                <div className="lg:w-2 md:w-2 w-1"></div>
              </div>
            }
            radius="full"/>:<ButtonLoader/>}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentDialog;
