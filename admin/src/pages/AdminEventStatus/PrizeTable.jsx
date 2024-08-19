import React, { useState, useEffect } from 'react';
import { getDrawRemaining } from '@/api/AdminEventStatus';

function PrizeTable() {
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const remaining = await getDrawRemaining();
        setRemaining(remaining.drawRemaining);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <table className="w-full border border-collapse table-auto">
      <thead>
        <tr>
          <th
            className="px-4 py-2 text-center border border-black"
            rowSpan="2"
          ></th>
          <th className="px-4 py-2 text-center border border-black">2등</th>
          <th className="px-4 py-2 text-center border border-black">3등</th>
          <th className="px-4 py-2 text-center border border-black">4등</th>
          <th className="px-4 py-2 text-center border border-black">5등</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 text-center border border-black">
            잔여 상품 수 / 전체 개수
          </td>
          {remaining
            .filter(item => item.ranking > 1)
            .map(value => (
              <td
                key={value.ranking}
                className="px-4 py-2 text-center border border-black bg-neutral-white"
              >
                {value.nowStock} / {value.totalStock}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}

export default PrizeTable;
