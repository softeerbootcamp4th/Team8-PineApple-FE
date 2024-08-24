import React from 'react';
import PropTypes from 'prop-types';

function PageButton({
  startPage,
  endPage,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const createPageButtons = () =>
    Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
      const pageIndex = startPage + index;
      return (
        <button
          key={pageIndex}
          onClick={() => onPageChange(pageIndex)}
          className={`${currentPage === pageIndex ? 'text-detail-1-bold' : 'text-detail-1-regular'}`}
        >
          {pageIndex}
        </button>
      );
    });

  return (
    <div className="flex justify-center gap-2 mt-10">
      {/* 10칸씩 이동하는 버튼*/}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 10))}
        disabled={currentPage === 1}
      >
        &laquo;{/* << 기호 */}
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {createPageButtons()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 10))}
        disabled={currentPage === totalPages}
      >
        &raquo;{/* >> 기호 */}
      </button>
    </div>
  );
}

PageButton.propTypes = {
  startPage: PropTypes.number.isRequired,
  endPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PageButton;
