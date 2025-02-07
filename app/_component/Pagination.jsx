import React from "react";

const Pagination = ({
  currentPage,
  goToPreviousPage,
  handleCurrentPage,
  goToNextPage,
  noOfPage,
}) => {
  return (
    <div>
      <div className="pagination">
        <button disabled={currentPage === 0} onClick={() => goToPreviousPage()}>
          Next
        </button>

        {[...Array(noOfPage).keys()].map((e) => (
          <button
            key={e}
            className={`${e === currentPage ? "active" : ""} page-number`}
            onClick={() => handleCurrentPage(e)}
          >
            {e}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPage - 1}
          onClick={() => goToNextPage()}
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default Pagination;
