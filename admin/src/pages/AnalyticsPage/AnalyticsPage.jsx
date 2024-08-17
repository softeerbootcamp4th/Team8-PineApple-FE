import React, { useEffect, useState } from 'react';
import TableHeader from '@/pages/AnalyticsPage/TableHeader';
import TableRow from '@/pages/AnalyticsPage/TableRow';

function AnalyticsPage() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setRow(6);
    setCol(8);
    setData([
      [
        0.0, 66.66666666666666, 66.66666666666666, 66.66666666666666,
        33.33333333333333, 33.33333333333333, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0,
      ],
      [
        0.0, 0.0, 33.33333333333333, 66.66666666666666, 33.33333333333333,
        33.33333333333333, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [0.0, 0.0, 0.0, 50.0, 75.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [
        0.0, 0.0, 0.0, 0.0, 33.33333333333333, 33.33333333333333, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0,
      ],
      [0.0, 0.0, 0.0, 0.0, 0.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ]);
  }, []);

  return (
    <div className="w-full">
      <div className="text-body-3-regular pt-200 pb-500">
        Day N Retention & DAU
      </div>
      <div className="w-[1600px] h-[500px] overflow-auto">
        <TableHeader col={col} />
        {Array.from({ length: row }).map((_, index) => (
          <TableRow key={index} day={index + 1} data={data[index]} />
        ))}
      </div>
    </div>
  );
}

export default AnalyticsPage;
