/* eslint-disable react/prop-types */
import { TableHeader , TableRow } from "../../../../components";
const AuditSection = ({data}) => {
    const columns = [
        { key: "event", title: "العملية" },
        { key: "date", title: "التاريخ" },
        { key: "affectedUser", title: "القائم بالعملية" },
        { key: "affectorUser", title: "المتأثر بالعملية" },
        { key : "details" , title : "تفاصيل العملية" }
        ];
        const handleRowClick = () => {
            console.log("s");
        };
        
        const getRowColor = (index) => {
            return index % 2 === 0 ? "bg-white" : "bg-cardDetailsColor";
        };
        const height = window.innerHeight;
        const responsive = height>630 ?(height>700 ? ( height > 740 ? (height > 800 ? "min-h-AuditAbove800" :"min-h-AuditAbove740") : "min-h-AuditAbove700") : "min-h-AuditAbove630") : "min-h-AuditUnder630"
  return (
    <div className={`${responsive}`}>
        <table className={`bg-white w-full mt-5`}>
                    <TableHeader columns={columns} color={"bg-gray-300"}/>
                    <tbody className="text-gray-700">
                        {data.map((audit,index)=>{
                            const object = {
                                operation: audit.operation,
                                date:audit.date,
                                affectedUser: audit.affectedUser,
                                affectorUser: audit.affectorUser,
                                oldData: audit.oldData,
                                newData: audit.newData,
                                destinationOfOperation: audit.destinationOfOperation
                            }
                            return <TableRow key={index} row={object} getRowColor={()=>getRowColor(index)} handleRowClick={handleRowClick} type={"auditing"}/>
                            })}
                    </tbody>
            </table>
    </div>
)
}

export default AuditSection