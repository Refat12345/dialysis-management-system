/* eslint-disable react-hooks/exhaustive-deps */


import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetAllOrdersQuery } from "../../../services/manager_center/orders/OrdersSlice";
import Header from "./sections/Header";
import OrdersSection from "./sections/OrdersSection";
import { PaginationComponent, PageLoader } from "../../../components";
import { ToastContainer } from "react-toastify";
import TextSearch from "../../../components/public/title/TextSearch";

const OrdersPage = () => {
  const { data, isLoading, isSuccess } = useGetAllOrdersQuery();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const user = useSelector((state) => state.user);
  
  const itemsPerPage = useMemo(() => {
    const height = window.innerHeight;
    if (height > 800) return 11;
    if (height > 740) return 10;
    if (height > 670) return 9;
    if (height > 630) return 8;
    return 7;
  }, [window.innerHeight]);

  useEffect(() => {
    if (isSuccess && data) {
      const ordersData = data[0];
 
      
      if (user.role === "secretary") {
        const secretaryOrders = ordersData.filter((order) => {
          const item = order.senderid === user.id && order;
          const filterItem = item.senderName === user.fullName && item;
          const finalItem = filterItem.requestStatus != "approved" && filterItem 
          return finalItem;
        });
        setOrders(secretaryOrders);
        setFilteredOrders(secretaryOrders);
      } else {
        const array = ordersData.filter(order => order.requestStatus === "pending");
        setOrders(array);
        setFilteredOrders(array);
      }
    }
  }, [isSuccess, data]);

  useEffect(() => {
    let filteredArray = orders;
    if (filter !== "") {
      filteredArray = filter === "نوع الطلب"
        ? filteredArray
        : filteredArray.filter(order => order.type.toLowerCase().includes(filter.toLowerCase()));
    }
    if (inputValue !== "") {
      filteredArray = filteredArray.filter(order =>
        order.senderName.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    setFilteredOrders(filteredArray);
  }, [filter, inputValue, orders]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  if (isLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  
  if(isSuccess){
    return (
      <div dir="rtl" className="flex-grow md:mr-48">
        <ToastContainer position="top-right" />
        <div className="mx-[3%] mt-5">
          <Header setFilter={setFilter} handleChange={handleInputChange} role={user.role} />
          <div className="mb-4"></div>
          {filteredOrders.length > 0 ? (
            <PaginationComponent
              RenderComponent={OrdersSection}
              data={filteredOrders}
              itemsPerPage={itemsPerPage}
            />
          ):<div className="flex-grow ">
          <TextSearch
            text={"لا يوجد طلبات"}
          />
        </div>
        }
        </div>
      </div>
    );
  }
  if (isSuccess && orders.length === 0) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <p className="font-bold text-2xl">لا يوجد طلبات</p>
        </div>
      </div>
    );
  }
  
  if(!isSuccess){
    return (
      <TextSearch text={"خطأ أثناء جلب البيانات أعد المحاولة من فضلك"}/>
    );
  }
};

export default OrdersPage;
