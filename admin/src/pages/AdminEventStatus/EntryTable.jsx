import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EntryRow from '@/pages/AdminEventStatus/EntryRow';
import RadioButton from '@/pages/AdminEventStatus/RadioButton';
import PageButton from '@/pages/AdminEventStatus/PageButton';
import { getDrawHistory } from '@/api/AdminEventStatus';

const RADIO_BUTTON_VALUES = [10, 30, 50]; //버튼의 경우의 수가 3개라 상수로 선언

const EntryHeader = ({ totalRows, rowsPerPage, handleRowsPerPageChange }) => (
  <div className="flex justify-between py-400">
    <div className="text-body-3-regular">전체 {totalRows}</div>
    <div className="flex gap-6">
      {RADIO_BUTTON_VALUES.map(value => (
        <RadioButton
          key={value}
          value={value}
          checked={rowsPerPage === value}
          onChange={handleRowsPerPageChange}
        />
      ))}
    </div>
  </div>
);

EntryHeader.propTypes = {
  totalRows: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleRowsPerPageChange: PropTypes.func.isRequired,
};

const TableHeader = ({ desc, asc }) => (
  <div className="flex">
    <div className="set-center w-[275px] border border-black">
      순번
      <button onClick={desc}>▼</button>
      <button onClick={asc}>▲</button>
    </div>
    <div className="flex-1 border border-black set-center">전화번호</div>
    <div className="flex-1 border border-black set-center">응모 시간</div>
    <div className="flex-1 border border-black set-center">응모 결과</div>
  </div>
);

TableHeader.propTypes = {
  desc: PropTypes.func.isRequired,
  asc: PropTypes.func.isRequired,
};

const EntryTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(RADIO_BUTTON_VALUES[0]); //초기는 10개 보기
  const [totalRows, setTotalRows] = useState(0); //전체 데이터 수(표의 행) 설정
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 설정
  const [pageData, setPageData] = useState([]); //해당 페이지에 있는 데이터 저장하는 배열
  const [totalPages, setTotalPages] = useState(0); //총 페이지 수를 설정
  const [sort, setSort] = useState('desc'); //내림차순, 오름차순 설정
  const tableRef = useRef(null); //page 변경 시 맨 위로 돌아가기 위한 table DOM을 저장

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { drawHistories, totalPages, totalItems } = await getDrawHistory(
          currentPage - 1, //api는 0 페이지부터 시작이기에 -1해서 가져옴
          rowsPerPage,
          sort,
        ); //응모 내역 가져오기
        setPageData(drawHistories);
        setTotalPages(totalPages);
        setTotalRows(totalItems);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [rowsPerPage, currentPage, sort]);

  //10페이지 단위로 페이지 버튼 생성
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1; // 1이상 10이하의 페이지면 페이지 버튼 1부터 시작, 11이상 20 이하 페이지면 페이지 버튼 11부터 시작
  const endPage = Math.min(startPage + 9, totalPages); //끝 버튼 설정

  const handleRowsPerPageChange = event => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    tableRef.current.scrollIntoView(); //table 위로 스크롤
  };

  return (
    <div className="flex flex-col h-full" ref={tableRef}>
      <EntryHeader
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
      <TableHeader desc={() => setSort('desc')} asc={() => setSort('asc')} />
      {pageData.map(item => (
        <EntryRow
          key={item.id}
          id={item.id}
          phoneNumber={item.phoneNumber}
          time={item.createdDate}
          result={item.drawResult}
        />
      ))}
      <PageButton
        startPage={startPage}
        endPage={endPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EntryTable;
