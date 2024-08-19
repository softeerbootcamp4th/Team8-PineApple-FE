import React from 'react';
import EntryTable from '@/pages/AdminEventStatus/EntryTable';
import PrizeTable from '@/pages/AdminEventStatus/PrizeTable';

function AdminEventStatus() {
  return (
    <div className="mt-10 px-[5%] flex flex-col text-nowrap w-screen">
      <PrizeTable />
      <div className="mt-10 border-[1px] border-[#b5b3b3]"></div>
      <EntryTable />
    </div>
  );
}

export default AdminEventStatus;
