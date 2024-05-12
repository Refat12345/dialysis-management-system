/* eslint-disable react/prop-types */

export default function TableHeader({ columns, color }) {
  return (
    <>
    
      <thead className={`${color}`}>
        <tr >
        {columns.map((column) => (
            <th
              key={column.key}
              className="text-right py-3 px-4 uppercase font-semibold text-sm"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}
