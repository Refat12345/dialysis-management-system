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
                <p className="font-bold text-lg text-titleColor mb-4">هل أنت متأكد من تسجيل الخروج ؟</p>
                <div className="flex justify-center ">
                <button  onClick={()=>setOpen(false)} className={`bg-bgbutton w-16 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg ml-2`}
                > {"لا"}
                </button>
                <button  onClick={()=>
                    {
                            localStorage.removeItem("tokens")
                            localStorage.removeItem("myObject");
                            Cookies.remove("token")
                            sessionStorage.removeItem('sideBarActiveItem');
                            // const response = logout().unwrap()
                            navigator("/")
                    }
                } className={`bg-bgbutton w-16  font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg `}
                > {"نعم"}
                </button>
                </div>
            </div>
        </DialogContent>
    </Dialog>
);
}

export default LogOut;
