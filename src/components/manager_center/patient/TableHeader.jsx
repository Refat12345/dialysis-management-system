/* eslint-disable react/prop-types */

export default function TableHeader({ columns, color }) {
  return (
    <>
    
      <thead className={`${color}`}>
        <tr >
        {columns.map((column,index) => (
            <th
              key={column.key}
              className={`text-right py-3 uppercase font-bold text-sm ${index === 0 ? "px-8":"px-4 "} ${column.title === "التاريخ" ?"px-6":"px-4"}`}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
