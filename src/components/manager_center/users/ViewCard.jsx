// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import Card from "./Card";

// function ViewCard({ data }) {
//   const flatUserData = data.flat();
//   return (
//     <div
//       dir="rtl"
//       className="min-h-customAbove830  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min"
//     >
//       {flatUserData.map((card, index) => (
//         <div dir="ltr" key={index}>
//           <Card data={card} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewCard;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

function ViewCard({ data }) {
  const flatUserData = data.flat();
  let height = window.innerHeight;
  let responsive =
    height > 630
      ? height > 700
        ? height > 740
          ? height > 800
            ? "min-h-AuditAbovee800"
            : "min-h-AuditAbovee740"
          : "min-h-AuditAbovee700"
        : "min-h-AuditAbovee630"
      : "min-h-AuditUnderr630";
  return (
    // <div
    //   dir="rtl"
    //   className="min-h-customAbove830  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min"
    // >
        <div dir="rtl" className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min ${responsive}`}>

      {flatUserData.map((card, index) => (
        <div dir="ltr" key={index}>
          <Card data={card} />
        </div>
      ))}
    </div>
  );
}

export default ViewCard;
