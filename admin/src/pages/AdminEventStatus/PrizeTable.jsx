import React from 'react';

function PrizeTable() {
  //TODO api 통신으로 정보 가져오기
  return (
    <table className="w-full border border-collapse table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-center border" rowSpan="2">
            잔여 상품 수 / 전체 개수
          </th>
          <th className="px-4 py-2 text-center border">1등</th>
          <th className="px-4 py-2 text-center border">2등</th>
          <th className="px-4 py-2 text-center border">3등</th>
          <th className="px-4 py-2 text-center border">4등</th>
          <th className="px-4 py-2 text-center border">5등</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 text-center border bg-neutral-white"></td>
          <td className="px-4 py-2 text-center border bg-neutral-white">
            nn/nn
          </td>
          <td className="px-4 py-2 text-center border bg-neutral-white">
            nn/nn
          </td>
          <td className="px-4 py-2 text-center border bg-neutral-white">
            nn/nn
          </td>
          <td className="px-4 py-2 text-center border bg-neutral-white">
            nn/nn
          </td>
          <td className="px-4 py-2 text-center border bg-neutral-white">
            nn/nn
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PrizeTable;
