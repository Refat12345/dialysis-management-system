/* eslint-disable react/prop-types */
import { TableHeader , TableRow } from "../../../../components";
const OrdersSection = ({data}) => {
    const columns = [
        { key: "type", title: "نوع الطلب" },
        { key: "order", title: "مقدم الطلب" },
        { key: "content", title: "محتوى الطلب" },
        { key: "Acceptance refusals", title: "" },
        { key: "Acceptance refusals", title: "" },
        { key : "details" , title : "" }
        ];
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
                        {data.map((audit,index)=>{
                            return <TableRow key={index} row={audit} getRowColor={()=>getRowColor(index)} handleRowClick={handleRowClick} type={"orders"}/>
                            })}
                    </tbody>
            </table>
    </div>
)
}

export default OrdersSection