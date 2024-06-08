/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./sections/Header"
import OrdersSection from "./sections/OrdersSection"
import { ordersData } from "../../../data/data"
import { useState,useEffect } from "react";
import { PaginationComponent } from "../../../components";
const OrdersPage = () => {

  let height = window.innerHeight;
  const itemsPerPage = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? 11 :10) : 9) : 8) : 7
  const [orders,setOrders] = useState([])
  const [filterOrders,setFilteredOrders] =useState([])
  const [filter,setFilter] = useState("")
  const [inputValue,setInputValue] = useState("")

  useEffect(()=>{
      setOrders(ordersData)
  },[orders])

  useEffect(()=>{
      setFilteredOrders(orders)
  },[orders])


  useEffect(() => {
    let filteredArray = orders
    if (filter !== "") {
      filteredArray = filter === "نوع الطلب" ? filteredArray :filteredArray.filter(order => order.type.toLowerCase().includes(filter))
    }
    if (inputValue !== "") {
      filteredArray = filteredArray.filter(order =>
        order.order.toLowerCase().includes(inputValue.toLowerCase())
      )
    }
    setFilteredOrders(filteredArray)
  }, [filter, inputValue])

 const handleChange = (e) => {
  setInputValue(e.target.value)
 }
  return (
    <div dir="rtl" className="flex-grow md:mr-48">
        <div className="mx-[3%] mt-5">
            <Header setFilter={setFilter} handleChange={handleChange}/>
            <div className="mb-4"></div>
            <PaginationComponent RenderComponent = {OrdersSection} data = {filterOrders} itemsPerPage = {itemsPerPage}/>
        </div>
    </div>
  )
}

export default OrdersPage