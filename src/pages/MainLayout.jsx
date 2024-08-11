import { Outlet } from 'react-router-dom';
import { SideBar } from '../components';
import { managerCenterSideBar, managerSideBar, secretariatSideBar } from '../data/data';
import { useDispatch } from 'react-redux';
import { setUser } from '../services/userSlice';
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';

const MainLayout = () => {
    const [myObject, setMyObject] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const jsonString = localStorage.getItem("myObject");
        if (jsonString) {
            const parsedObject = JSON.parse(jsonString);
            setMyObject(parsedObject);
            dispatch(setUser(parsedObject));
            Cookies.set("token", parsedObject.token);
            Cookies.set("role", parsedObject.role);
            sessionStorage.setItem("user", parsedObject);

        }
    }, [dispatch]);

    if (!myObject) {
        return (
            <div className="flex-grow">
                <div className="flex items-center justify-center h-screen">
                    <p className="font-bold text-2xl text-red-500">قم بتسجيل الدخول من فضلك</p>
                </div>
            </div>
        );
    }

    const sideBarData = myObject?.role === "admin" ? managerCenterSideBar : (myObject?.role === "secretary" ? secretariatSideBar : managerSideBar);
    sideBarData.header.name = myObject?.fullName;
    myObject?.role === "secretary" ? sideBarData.header.title = `مركز ${myObject?.centerName}` : (myObject?.role === "admin" ? sideBarData.header.title = `مدير مركز ${myObject?.centerName}` : sideBarData.header.title);

    return (
        <>
            <SideBar sideBarData={sideBarData} />
            <Outlet />
        </>
    );
};

export default MainLayout;
