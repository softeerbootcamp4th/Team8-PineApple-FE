import React, { useState, useEffect } from 'react';
import TableRow from '@/pages/AdminEventStatus/TableRow';
import RadioButton from '@/pages/AdminEventStatus/RadioButton';

const TableComponent = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([
    { id: 1, phoneNumber: '10', time: 's', result: '1' },
    { id: 2, phoneNumber: '10', time: 's', result: '1' },
    { id: 3, phoneNumber: '10', time: 's', result: '1' },
    { id: 4, phoneNumber: '10', time: 's', result: '1' },
    { id: 5, phoneNumber: '10', time: 's', result: '1' },
    { id: 6, phoneNumber: '10', time: 's', result: '1' },
    { id: 7, phoneNumber: '10', time: 's', result: '1' },
    { id: 8, phoneNumber: '10', time: 's', result: '1' },
  ]);

  useEffect(() => {
    getCurrentPageData(currentPage);
  }, [rowsPerPage, currentPage]);

  useEffect(() => {
    setTotalRows(156); //TODO API 통신으로 가져오기 및 데이터를 가져오기
  }, []);

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  const handleRowsPerPageChange = event => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const getCurrentPageData = currentPage => {
    // try{
    // const data //API 통신
    // }
    //setPageData(data); // data의 정보 array 가져오기
  };

  return (
    <div className="flex flex-col text-nowrap w-[90%]">
      <div className="h-screen">
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
          <div className="set-center w-[275px] border border-black">순번</div>
          <div className="flex-1 border border-black set-center">전화번호</div>
          <div className="flex-1 border border-black set-center">응모 시간</div>
          <div className="flex-1 border border-black set-center">응모 결과</div>
        </div>
        {pageData.map(item => (
          <TableRow
            id={item.id}
            phoneNumber={item.phoneNumber}
            time={item.time}
            result={item.result}
            key={item.id}
          />
        ))}
        <div className="flex justify-center gap-2 mt-10">
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
            disabled={currentPage === 1}
          >
            &gt;
          </button>
          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 10))
            }
            disabled={currentPage === totalPages}
          >
            &raquo; {/* >> 기호 */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;