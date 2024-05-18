/* eslint-disable react/prop-types */

export default function TableHeader({ columns, color ,type }) {
  let width = window.innerWidth;
  return (
    <>
    
      <thead className={`${color}`}>
        <tr >
        {columns.map((column,index) => (
            <th
              key={column.key}
              className={`text-right py-3 uppercase font-bold text-sm ${index === 0 ? "px-8":"px-4 "} ${column.title === "التاريخ" ?"px-6":"px-4"} ${index === 2 && type === "orders" ?(width>1280 ? "w-[45%]":(width < 1200 ? "w-[37%]":"w-[40%]")):""} ${index === 4 && type === "orders" ?(width > 1280 ? "w-[15%]":"w-[18%]"):""} ${index===5 && type ==="orders" ?(width<1280 ? "w-[8%]":""):""}`}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
