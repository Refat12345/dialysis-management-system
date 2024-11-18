/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { ButtonLoader } from "../../../components";
import Cookies from "js-cookie";
import { useLogoutMutation } from "../../../services/manager_center/auth/AuthSlice";

function LogOut() {
    const [open, setOpen] = useState(true);
    const [logout, { isSuccess, isLoading }] = useLogoutMutation();

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleLogout = useCallback(async () => {
        try {
            await logout().unwrap();
        } catch (error) {
            console.log(error);
        }
    }, [logout]);

    useEffect(() => {
        if (isSuccess) {
            localStorage.removeItem("tokens");
            localStorage.removeItem("myObject");
            Cookies.remove("token");
            sessionStorage.removeItem('sideBarActiveItem');
            window.location.replace("/");
        }
    }, [isSuccess]);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className="p-4 w-full" dir="rtl">
                <div>
                    <p className="font-bold text-lg text-titleColor mb-4">هل أنت متأكد من تسجيل الخروج ؟</p>
                    <div className="flex justify-center">
                        <button onClick={handleClose} className="bg-bgbutton w-16 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg ml-2">
                            {"لا"}
                        </button>
                        {!isLoading ? (
                            <button onClick={handleLogout} className="bg-bgbutton w-16 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg">
                                {"نعم"}
                            </button>
                        ) : (
                            <ButtonLoader />
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default LogOut;
