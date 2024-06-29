/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

export default function TableHeader({ columns, color ,type }) {
  let width = window.innerWidth;
  const user = useSelector((state)=>state.user)
  return (
    <>
    
      <thead className={`${color}`}>
        <tr >
        {columns.map((column,index) => (
            <th
              key={index}
              className={`text-right py-3 uppercase font-bold text-sm ${index === 0 ? "px-8":"px-4 "} ${column.title === "التاريخ" ?"px-6":"px-4"} ${index === 2 && type === "orders" ?(width>1280 ?(user.role === "secretary" ? "w-[62%]": "w-[41%]"):(width < 1200 ? "w-[34%]":"w-[37%]")):""} ${index === 4 && type === "orders" ?(width > 1280 ? "w-[17%]":"w-[19%]"):""} ${index===5 && type ==="orders" ?(width<1280 ? "w-[8%]":"w-16"):""} ${index===3 & type === "orders" &&"w-[1px]"}`}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
