/* eslint-disable react/prop-types */
import { useState } from "react";

const PaginationComponent = ({
  data,
  RenderComponent,
  itemsPerPage,
  initialPage = 1,
}) => {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pagesToShow = 5;

  const [visiblePages, setVisiblePages] = useState(getVisiblePages(1));

  function getVisiblePages(basePage) {
    let startPage = basePage;
    let endPage = startPage + pagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
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
  return (
    <>
      <RenderComponent data={currentItems} />
      <div dir="rtl" className="flex justify-center mt-3 ">
        <button
          className="text-textButtonColor font-semibold text-sm bg-white px-2 py-2 ml-1 rounded-lg shadow-lg"
          onClick={handlePrevious}
          disabled={visiblePages[0] === 1}
        >
          &lt;&lt;
        </button>

        {visiblePages.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage
                ? "text-white text-xs font-semibold bg-bgButtonColor px-4 py-2 rounded-lg shadow-lg mx-1"
                : "text-textButtonColor text-xs font-semibold bg-white px-4 py-2 rounded-lg shadow-lg mx-1"
            }
          >
            {number}
          </button>
        ))}
        <button
          className="text-textButtonColor text-sm font-semibold bg-white px-2 py-2 mr-1 rounded-lg shadow-lg"
          onClick={handleNext}
          disabled={visiblePages[visiblePages.length - 1] === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
