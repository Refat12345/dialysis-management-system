/* eslint-disable react/prop-types */
import React from "react";

export default function TableHeader({ columns, color }) {
  return (
    <>
    
      <thead>
        <tr className={`bg-${color}`}>
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
