import { Outlet, useNavigate } from 'react-router-dom';
import { SideBar, PublicLoader } from '../components';
import { managerCenterSideBar, managerSideBar, secretariatSideBar } from '../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../services/userSlice';
import Cookies from "js-cookie";
import { useEffect, useState, useMemo } from 'react';
import { useGetAllOrdersQuery, setTotalOrdersCount } from '../services/manager_center/orders/OrdersSlice';

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
            if (parsedObject.id && parsedObject.token) {
                
                if (!myObject || myObject.id !== parsedObject.id) {
                    setMyObject(parsedObject);
                    dispatch(setUser(parsedObject));
                    Cookies.set("token", parsedObject.token);
                    Cookies.set("role", parsedObject.role);
                    sessionStorage.setItem("user", parsedObject);
                    setTokenSet(true);
            

                }
            } else {
                setMyObject(null);
                Cookies.remove("token");
                sessionStorage.removeItem("user");
            }
        } else {
            setMyObject(null);
            Cookies.remove("token");
            sessionStorage.removeItem("user");
        }
        setLoading(false);
    }, [dispatch, myObject]);

    useEffect(() => {
        if (!loading && !myObject) {
            navigate("/"); 
        }
    }, [loading, myObject, navigate]);

    const shouldFetchOrders = useMemo(() => myObject?.role === "admin" || myObject?.role === "secretary", [myObject]);
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
                    const finalItem = filterItem.requestStatus !== "approved" && filterItem;
                    return finalItem;
                });
                dispatch(setTotalOrdersCount(secretaryOrders.length)); 
            } else if (myObject?.role === "admin") {
                const pendingOrders = ordersData.filter(order => order.requestStatus === "pending");
                dispatch(setTotalOrdersCount(pendingOrders.length)); 
            }
        }
    }, [isSuccess, data, myObject, dispatch, shouldFetchOrders]);
    
    const sideBarData = useMemo(() => {
        const baseData = myObject?.role === "admin" 
            ? managerCenterSideBar 
            : (myObject?.role === "secretary" 
                ? secretariatSideBar 
                : managerSideBar);

        baseData.header.name = myObject?.fullName;
        baseData.header.title =  myObject?.role !="superAdmin" ? `مركز ${myObject?.centerName}`: "مدير برنامج دعمكم حياة";
        return baseData;
    }, [myObject]);

    if (loading) {
        return <PublicLoader />;
    }



    return (
        <>
            <SideBar sideBarData={sideBarData} totalOrdersCount={totalOrdersCount} />
            <Outlet />
        </>
    );
};

export default MainLayout;
