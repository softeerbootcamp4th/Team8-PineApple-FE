import React from 'react';
import Pagination from 'react-js-pagination';
import '@/styles/pagingComment.css';
import PropTypes from 'prop-types';

function PagingComment({ page, count, onChangePage }) {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count * 10}
        pageRangeDisplayed={Math.floor(count / 10)}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={onChangePage}
      />
    </div>
  );
}

PagingComment.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default PagingComment;
