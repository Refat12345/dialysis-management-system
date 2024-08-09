
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components';
import { managerCenterSideBar, managerSideBar, secretariatSideBar } from '../data/data';
import { useSelector } from 'react-redux';

const MainLayout = () => {
    const user = useSelector((state)=>state.user);
    const sideBarData =  user.role === "admin" ? managerCenterSideBar : (user.role === "secretary" ? secretariatSideBar : managerSideBar);
    sideBarData.header.name = user.fullName
    user.role === "secretary" ?sideBarData.header.title = `مركز ${user.centerName}` : (user.role === "admin" ?sideBarData.header.title = `مدير مركز ${user.centerName}` : sideBarData.header.title)
return (
    <>
        <SideBar sideBarData={sideBarData} />
        <Outlet />
    </>
);
};

export default MainLayout;
