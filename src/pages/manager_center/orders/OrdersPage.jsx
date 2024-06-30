/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./sections/Header";
import OrdersSection from "./sections/OrdersSection";
import { useState, useEffect, useMemo, useCallback } from "react";
import { PaginationComponent, PageLoader } from "../../../components";
import { useGetAllOrdersQuery } from "../../../services/manager_center/orders/OrdersSlice";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const { data, isLoading, isSuccess } = useGetAllOrdersQuery();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filter, setFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const user = useSelector((state)=>state.user)
  const itemsPerPage = useMemo(() => {
    const height = window.innerHeight;
    if (height > 800) return 11;
    if (height > 740) return 10;
    if (height > 700) return 9;
    if (height > 630) return 8;
    return 7;
  }, [window.innerHeight]);

  useEffect(() => {
    if (isSuccess && data) {
      const ordersData = data[0];
      if(user.role === "secretary") {
        const secretaryOrders = ordersData.filter((order)=>{
          console.log(user.id );
          const item =  order.senderid === user.id && order 
          const filterItem = item.senderName === user.fullName && item 
          return filterItem
        }
      )
      setOrders(secretaryOrders);
      setFilteredOrders(secretaryOrders);
      } else{
        const array = ordersData.filter(order=> order.requestStatus === "pending")
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
        order.order.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    setFilteredOrders(filteredArray);
  }, [filter, inputValue, orders]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  if (isLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  console.log(orders)

  if (isSuccess && orders.length === 0) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <p className="font-bold text-2xl">لا يوجد طلبات</p>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="flex-grow md:mr-48">
      <div className="mx-[3%] mt-5">
        <Header setFilter={setFilter} handleChange={handleInputChange} role={user.role} />
        <div className="mb-4"></div>
        {filteredOrders.length > 0 && (
          <PaginationComponent
            RenderComponent={OrdersSection}
            data={filteredOrders}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
