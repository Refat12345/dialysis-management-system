import { Outlet, useNavigate } from 'react-router-dom';
import { SideBar } from '../components';
import { managerCenterSideBar, managerSideBar, secretariatSideBar } from '../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../services/userSlice';
import Cookies from "js-cookie";
import { useEffect, useState } from 'react';
import { useGetAllOrdersQuery } from '../services/manager_center/orders/OrdersSlice';
import { setTotalOrdersCount } from '../services/manager_center/orders/OrdersSlice';
import { PublicLoader } from '../components';

const MainLayout = () => {
    const [myObject, setMyObject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tokenSet, setTokenSet] = useState(false);
    const totalOrdersCount = useSelector((state) => state.orders.totalOrdersCount); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const jsonString = localStorage.getItem("myObject");
        if (jsonString) {
            const parsedObject = JSON.parse(jsonString);
            setMyObject(parsedObject);
            dispatch(setUser(parsedObject));
            Cookies.set("token", parsedObject.token);
            Cookies.set("role", parsedObject.role);
            sessionStorage.setItem("user", parsedObject);
            setTokenSet(true);
        }
        setLoading(false); 
    }, [dispatch]);

    useEffect(() => {
        if (!loading && !myObject) {
            navigate("/"); 
        }
    }, [loading, myObject, navigate]);

    const shouldFetchOrders = myObject?.role === "admin" || myObject?.role === "secretary";
    const { data, isSuccess } = useGetAllOrdersQuery(undefined, {
        skip: !tokenSet || !shouldFetchOrders
    });

    useEffect(() => {
        if (isSuccess && data && shouldFetchOrders) {
            const ordersData = data[0];
            if (myObject?.role === "secretary") {
                const secretaryOrders = ordersData.filter((order) => {
                    const item = order.senderid === myObject?.id && order;
                    const filterItem = item.senderName === myObject?.fullName && item;
                    return filterItem;
                });
                dispatch(setTotalOrdersCount(secretaryOrders.length)); 
            } else if (myObject?.role === "admin") {
                const pendingOrders = ordersData.filter(order => order.requestStatus === "pending");
                dispatch(setTotalOrdersCount(pendingOrders.length)); 
            }
        }
    }, [isSuccess, data, myObject, dispatch, shouldFetchOrders]);

    if (loading) {
        return <PublicLoader />;
    }

    const sideBarData = myObject?.role === "admin" 
        ? managerCenterSideBar 
        : (myObject?.role === "secretary" 
            ? secretariatSideBar 
            : managerSideBar);

    sideBarData.header.name = myObject?.fullName;
    myObject?.role === "secretary" 
        ? sideBarData.header.title = `مركز ${myObject?.centerName}` 
        : (myObject?.role === "admin" 
        ? sideBarData.header.title = `مركز ${myObject?.centerName}` 
        : sideBarData.header.title);

    return (
        <>
            <SideBar sideBarData={sideBarData} totalOrdersCount={totalOrdersCount} />
            <Outlet />
        </>
    );
};

export default MainLayout;
