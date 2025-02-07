import React from "react";

/**
 * Component for rendering pagination controls with previous, next, and page number buttons.
 * Handles navigation between pages and highlights the active page number.
 *
 * @param {number} currentPage The current page number (0-based index).
 * @param {Function} goToPreviousPage Function to navigate to the previous page.
 * @param {Function} handleCurrentPage Function to set the current page when a page number is clicked.
 * @param {Function} goToNextPage Function to navigate to the next page.
 * @param {number} noOfPage The total number of pages available for pagination.
 * @returns {JSX.Element} JSX representation of the pagination controls with buttons for page navigation.
 */

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
