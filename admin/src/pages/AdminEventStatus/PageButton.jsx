import React from 'react';
import Proptypes from 'prop-types';

function PageButton({
  startPage,
  endPage,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="flex justify-center gap-2 mt-10">
      {/* 10칸씩 이동하는 버튼*/}
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 10))}
        disabled={1 === currentPage}
      >
        &laquo; {/* << 기호 */}
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(startPage + index)}
          className={`${
            currentPage === startPage + index ? 'font-bold' : 'font-normal'
          }`}
        >
          {startPage + index}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 10))}
        disabled={currentPage === totalPages}
      >
        &raquo; {/* >> 기호 */}
      </button>
    </div>
  );
}

PageButton.propTypes = {
  startPage: Proptypes.number.isRequired,
  endPage: Proptypes.number.isRequired,
  currentPage: Proptypes.number.isRequired,
  totalPages: Proptypes.number.isRequired,
  handlePageChange: Proptypes.func.isRequired,
};
export default PageButton;
