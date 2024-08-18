import React, { useState, useEffect, useRef } from 'react';
import EntryRow from '@/pages/AdminEventStatus/EntryRow';
import RadioButton from '@/pages/AdminEventStatus/RadioButton';
import PageButton from '@/pages/AdminEventStatus/PageButton';
import { getDrawHistory } from '@/api/AdminEventStatus';

const EntryTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState('desc');
  const table = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDrawHistory(
          currentPage - 1,
          rowsPerPage,
          sort,
        );
        const { drawHistories, totalPages, totalItems } = response;
        setPageData(drawHistories);
        setTotalPages(totalPages);
        setTotalRows(totalItems);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [rowsPerPage, currentPage, sort]);

  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const handleRowsPerPageChange = event => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    table.current.scrollIntoView();
  };

  return (
    <div className="flex flex-col h-full" ref={table}>
      <div className="flex justify-between py-400">
        <div className="text-body-3-regular">전체 {totalRows}</div>
        <div className="flex gap-6">
          <RadioButton
            value={10}
            rowsPerPage={rowsPerPage}
            onChange={handleRowsPerPageChange}
          />
          <RadioButton
            value={30}
            rowsPerPage={rowsPerPage}
            onChange={handleRowsPerPageChange}
          />
          <RadioButton
            value={50}
            rowsPerPage={rowsPerPage}
            onChange={handleRowsPerPageChange}
          />
        </div>
      </div>
      <div className="flex">
        <div className="set-center w-[275px] border border-black">
          순번
          <button onClick={() => setSort('desc')}>▼</button>
          <button onClick={() => setSort('asc')}>▲</button>
        </div>
        <div className="flex-1 border border-black set-center">전화번호</div>
        <div className="flex-1 border border-black set-center">응모 시간</div>
        <div className="flex-1 border border-black set-center">응모 결과</div>
      </div>
      {pageData.map(item => (
        <EntryRow
          id={item.id}
          phoneNumber={item.phoneNumber}
          time={item.createdDate}
          result={item.drawResult}
          key={item.id}
        />
      ))}
      <PageButton
        startPage={startPage}
        endPage={endPage}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default EntryTable;
