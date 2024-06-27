
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components';
import { managerCenterSideBar, secretariatSideBar } from '../data/data';
import { useSelector } from 'react-redux';

const MainLayout = () => {
    const user = useSelector((state)=>state.user);
    const sideBarData =  user.role === "admin" ? managerCenterSideBar : secretariatSideBar;
return (
    <>
        <SideBar sideBarData={sideBarData} />
        <Outlet />
    </>
);
};

export default MainLayout;
