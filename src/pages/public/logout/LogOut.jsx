import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ButtonLoader, CustomButton } from "../../../components";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../services/manager_center/auth/AuthSlice";
function LogOut() {
    
    const [open, setOpen] = useState(true);
    const navigator = useNavigate()
    const handleClose = () => {
    setOpen(false);
    };
    // const[logout,{isLoading,isSuccess,}] = useLogoutMutation();
    // if(isSuccess){
        
    // }
return (
    <Dialog open={open} onClose={handleClose}>
        <DialogContent className="p-4 w-full " dir="rtl">
            <div>
                <p className="font-bold text-xl text-titleColor mb-4">هل أنت متأكد من تسجيل الخروج ؟</p>
                <div className="flex justify-center ">
                
                <CustomButton
                        variant="solid"
                        onClick={()=>{
                            setOpen(false)
                        }}
                        className="bg-bgbutton text-white h-8 w-14 font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110 ml-4"
                        title={
                            <span>لا</span>
                        }
                        radius="full"
                    />
                    <CustomButton
                        variant="solid"
                        onClick={ () =>  {
                            localStorage.removeItem("tokens")
                            localStorage.removeItem("myObject");
                            Cookies.remove("token")
                            sessionStorage.removeItem('sideBarActiveItem');
                            // const response = logout().unwrap()
                            navigator("/")
                        }}
                        className="bg-bgbutton text-white h-8 w-14 font-bold text-md hover:cursor-pointer transition-transform transform hover:scale-110"
                        title={
                            <span>نعم</span>
                        }
                        radius="full"
                    />
                </div>
            </div>
        </DialogContent>
    </Dialog>
);
}

export default LogOut;
