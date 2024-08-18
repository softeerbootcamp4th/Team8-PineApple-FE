import React, { useEffect, useState } from 'react';
import TableHeader from '@/pages/Indicator/TableHeader';
import TableRow from '@/pages/Indicator/TableRow';
import Dau from '@/pages/Indicator/Dau';
import { getIndicator } from '@/api/Indicator/index';

function Indicator() {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [dayNRetention, setDayNRetention] = useState([]);
  const [dau, setDau] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getIndicator();
        const dayNRetention = response.dayNRetention;
        const dau = response.dau;
        setRow(dayNRetention.length);
        setCol(dayNRetention[0].length);
        setDayNRetention(dayNRetention);
        setDau(dau);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full">
      <div className="text-body-3-regular pt-200 pb-500">
        Day N Retention & DAU
      </div>
      <div className="w-[1600px] h-[500px] overflow-auto">
        <TableHeader col={col} />
        {Array.from({ length: row }).map((_, index) => (
          <TableRow key={index} day={index + 1} data={dayNRetention[index]} />
        ))}
        <Dau data={dau} />
      </div>
    </div>
  );
}

export default Indicator;
