/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { TableHeader , TableRow } from "../../../../components";
const OrdersSection = ({data  }) => {
    const adminColumns = [
        { key: "type", title: "نوع الطلب" },
        { key: "order", title: "مقدم الطلب" },
        { key: "content", title: "محتوى الطلب" },
        { key: "Acceptance refusals", title: "" },
        { key: "Acceptance refusals", title: "" },
        { key : "details" , title : "" }
        ];
        const secretaryColumns = [
            { key: "type", title: "نوع الطلب" },
            {key:"status" , title :"حالة الطلب"},
            { key: "content", title: "محتوى الطلب" },
            { key : "details" , title : "" }
            ];
        const user = useSelector((state)=>state.user)    
        const columns = user.role === "secretary" ? secretaryColumns : adminColumns    
        const handleRowClick = () => {
            console.log("s");
        };
        
        
        const getRowColor = (index) => {
            return index % 2 === 0 ? "bg-white" : "bg-bgOrders";
        };
        let height = window.innerHeight;
        let responsive = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? "min-h-AuditAbove800" :"min-h-AuditAbove740") : "min-h-AuditAbove700") : "min-h-AuditAbove630") : "min-h-AuditUnder630"
  return (
    <div className={`${responsive}`}>
        <table className={`bg-white w-full mt-4 table-fixed`}>
                    <TableHeader columns={columns} color={"bg-bgSideButton"} type={"orders"}/>
                    <tbody className="text-gray-700">
                        {data.map((order,index)=>{
                            const object = {
                                type :order.type,
                                senderName:order.senderName,
                                content:order.content
                            }
                            const secretaryObject = {
                                type :order.type,
                                requestStatus:order.requestStatus === "pending" ? "انتظار" :(order.requestStatus === "rejected" ?"تم الرفض":"تمت الموافقة") ,
                                content:order.content
                                
                            }

                            return <TableRow key={index} row={user.role === "secretary" ? secretaryObject : object} getRowColor={()=>getRowColor(index)} handleRowClick={handleRowClick} type={"orders"} id = {order.id}/>
                            })}
                    </tbody>
            </table>
    </div>
)
}

export default OrdersSection