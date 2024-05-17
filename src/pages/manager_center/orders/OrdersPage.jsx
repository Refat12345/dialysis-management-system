import Header from "./sections/Header"
import OrdersSection from "./sections/OrdersSection"
import { orders } from "../../../data/data"
import { PaginationComponent } from "../../../components";
const OrdersPage = () => {
  let height = window.innerHeight;
  const itemsPerPage = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? 11 :10) : 9) : 8) : 7
  
  return (
    <div dir="rtl" className="flex-grow md:mr-48">
        <div className="mx-[3%] mt-5">
            <Header/>
            <div className="mb-4"></div>
            <PaginationComponent RenderComponent={OrdersSection} data={orders} itemsPerPage={itemsPerPage}/>
        </div>
    </div>
  )
}

export default OrdersPage