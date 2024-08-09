/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

// // /* eslint-disable react/prop-types */
// // import { useState } from "react";
// // import ChevronIcon from "../../../assets/icons/public/chevron_left.svg"
// // import ChevronRightIcon  from "../../../assets/icons/public/chevron_right.svg";
// // const PaginationComponent = ({
  
// //   data,
// //   RenderComponent,
// //   itemsPerPage,
// //   type,
// //   initialPage = 1,
// //   type2
// // }) => {
// //   const totalItems = data.length;
// //   const totalPages = Math.ceil(totalItems / itemsPerPage);
// //   const [currentPage, setCurrentPage] = useState(initialPage);
// //   const pagesToShow = 5;

// //   const [visiblePages, setVisiblePages] = useState(getVisiblePages(1));

// //   function getVisiblePages(basePage) {
// //     let startPage = basePage;
// //     let endPage = startPage + pagesToShow - 1;
// //     if (endPage > totalPages) {
// //       endPage = totalPages;
// //     }
// //     return Array.from(
// //       { length: endPage - startPage + 1 },
// //       (_, index) => startPage + index
// //     );
// //   }

// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

// //   const paginate = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };

// //   const handleNext = () => {
// //     const newBasePage = visiblePages[0] + pagesToShow;
// //     if (newBasePage <= totalPages) {
// //       setVisiblePages(getVisiblePages(newBasePage));
// //     }
// //   };

// //   const handlePrevious = () => {
// //     const newBasePage = visiblePages[0] - pagesToShow;
// //     if (newBasePage >= 1) {
// //       setVisiblePages(getVisiblePages(newBasePage));
// //     }
// //   };
// //   const buttonColor = type === "dashboard" ? "bg-white " : "bg-gray-100"
// //   const hover = type === "dashboard" ? "hover:bg-gray-100":"hover:bg-gray-200"
// //   return (
// //     <>
// //       <RenderComponent data={currentItems}  type2={type2} />
// //       <div dir="rtl" className="flex justify-center mt-3 ">
// //         <button
// //           className={`text-textButtonColor font-primaryBold text-sm px-2 py-2 ml-1 rounded-lg shadow-lg ${buttonColor}`}
// //           onClick={handlePrevious}
// //           disabled={visiblePages[0] === 1}
// //         >
// //           <img className="w-[22px] h-[22px]" src={ChevronRightIcon}/>
// //         </button>

// //         {visiblePages.map((number,index) => (
// //           <button
// //             key={index}
// //             onClick={() => paginate(number)}
// //             className={
// //               number === currentPage
// //                 ? "text-white text-xs font-primaryBold bg-bgButtonColor px-4 py-2 rounded-lg shadow-lg mx-1"
// //                 : `text-textButtonColor text-xs font-primaryBold  px-4 py-2 rounded-lg shadow-lg mx-1 ${hover} ${buttonColor}`
// //             }
// //           >
// //             {number}
// //           </button>
// //         ))}
// //         <button
// //           className={`text-textButtonColor text-sm font-primaryBold  px-2 py-2 mr-1 rounded-lg shadow-lg ${buttonColor}`}
// //           onClick={handleNext}
// //           disabled={visiblePages[visiblePages.length - 1] === totalPages}
// //         >
// //           <img className="w-[22px] h-[22px] " src={ChevronIcon}/>
// //         </button>
// //       </div>
// //     </>
// //   );
// // };

// // export default PaginationComponent;



// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import ChevronIcon from "../../../assets/icons/public/chevron_left.svg"
// import ChevronRightIcon  from "../../../assets/icons/public/chevron_right.svg";

// const PaginationComponent = ({
//   data,
//   RenderComponent,
//   itemsPerPage,
//   type,
//   initialPage = 1,
//   type2
// }) => {
//   const totalItems = data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const pagesToShow = 5;

//   const [visiblePages, setVisiblePages] = useState(getVisiblePages(1));

//   function getVisiblePages(basePage) {
//     let startPage = basePage;
//     let endPage = startPage + pagesToShow - 1;
//     if (endPage > totalPages) {
//       endPage = totalPages;
//     }
//     return Array.from(
//       { length: endPage - startPage + 1 },
//       (_, index) => startPage + index
//     );
//   }

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleNext = () => {
//     const newBasePage = visiblePages[0] + pagesToShow;
//     if (newBasePage <= totalPages) {
//       setVisiblePages(getVisiblePages(newBasePage));
//     }
//   };

//   const handlePrevious = () => {
//     const newBasePage = visiblePages[0] - pagesToShow;
//     if (newBasePage >= 1) {
//       setVisiblePages(getVisiblePages(newBasePage));
//     }
//   };

//   const buttonColor = type === "dashboard" ? "bg-white " : "bg-gray-100"
//   const hover = type === "dashboard" ? "hover:bg-gray-100" : "hover:bg-gray-200"

//   return (
//     <>
//       <RenderComponent data={currentItems} type2={type2} />
//       <div dir="rtl" className="flex justify-center mt-3 ">
//         <button
//           className={`text-textButtonColor font-primaryBold text-sm px-2 py-2 ml-1 rounded-lg shadow-lg ${buttonColor}`}
//           onClick={handlePrevious}
//           disabled={visiblePages[0] === 1}
//         >
//           <img className="w-[22px] h-[22px]" src={ChevronRightIcon} />
//         </button>

//         {totalPages > 0 ? (
//           visiblePages.map((number, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(number)}
//               className={
//                 number === currentPage
//                   ? "text-white text-xs font-primaryBold bg-bgButtonColor px-4 py-2 rounded-lg shadow-lg mx-1"
//                   : `text-textButtonColor text-xs font-primaryBold px-4 py-2 rounded-lg shadow-lg mx-1 ${hover} ${buttonColor}`
//               }
//             >
//               {number}
//             </button>
//           ))
//         ) : (
//           <button
//             key={1}
//             onClick={() => paginate(1)}
//             className={
//               1 === currentPage
//                 ? "text-white text-xs font-primaryBold bg-bgButtonColor px-4 py-2 rounded-lg shadow-lg mx-1"
//                 : `text-textButtonColor text-xs font-primaryBold px-4 py-2 rounded-lg shadow-lg mx-1 ${hover} ${buttonColor}`
//             }
//           >
//             1
//           </button>
//         )}

//         <button
//           className={`text-textButtonColor text-sm font-primaryBold px-2 py-2 mr-1 rounded-lg shadow-lg ${buttonColor}`}
//           onClick={handleNext}
//           disabled={visiblePages[visiblePages.length - 1] === totalPages}
//         >
//           <img className="w-[22px] h-[22px]" src={ChevronIcon} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default PaginationComponent;



import { useState, useEffect } from "react";
import ChevronIcon from "../../../assets/icons/public/chevron_left.svg";
import ChevronRightIcon from "../../../assets/icons/public/chevron_right.svg";

const PaginationComponent = ({
  data,
  RenderComponent,
  itemsPerPage,
  type,
  initialPage = 1,
  type2
}) => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 5;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage));
  }, [totalPages, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when data changes
  }, [data]);

  function getVisiblePages(basePage) {
    let startPage = Math.max(1, basePage - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    const newBasePage = visiblePages[0] + pagesToShow;
    if (newBasePage <= totalPages) {
      setVisiblePages(getVisiblePages(newBasePage));
    }
  };

  const handlePrevious = () => {
    const newBasePage = visiblePages[0] - pagesToShow;
    if (newBasePage >= 1) {
      setVisiblePages(getVisiblePages(newBasePage));
    }
  };

  const buttonColor = type === "dashboard" ? "bg-white " : "bg-gray-100";
  const hover = type === "dashboard" ? "hover:bg-gray-100" : "hover:bg-gray-200";

  return (
    <>
      <RenderComponent data={currentItems} type2={type2} />
      <div dir="rtl" className="flex justify-center mt-3 ">
        <button
          className={`text-textButtonColor font-primaryBold text-sm px-2 py-2 ml-1 rounded-lg shadow-lg ${buttonColor}`}
          onClick={handlePrevious}
          disabled={visiblePages[0] === 1}
        >
          <img className="w-[22px] h-[22px]" src={ChevronRightIcon} />
        </button>

        {visiblePages.map((number, index) => (
          <button
            key={index}
            onClick={() => paginate(number)}
            className={
              number === currentPage
                ? "text-white text-xs font-primaryBold bg-bgButtonColor px-4 py-2 rounded-lg shadow-lg mx-1"
                : `text-textButtonColor text-xs font-primaryBold px-4 py-2 rounded-lg shadow-lg mx-1 ${hover} ${buttonColor}`
            }
          >
            {number}
          </button>
        ))}

        <button
          className={`text-textButtonColor text-sm font-primaryBold px-2 py-2 mr-1 rounded-lg shadow-lg ${buttonColor}`}
          onClick={handleNext}
          disabled={visiblePages[visiblePages.length - 1] === totalPages}
        >
          <img className="w-[22px] h-[22px]" src={ChevronIcon} />
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
