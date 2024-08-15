import React, { useEffect } from 'react';
import EntryTable from '@/pages/AdminEventStatus/EntryTable';
import PrizeTable from '@/pages/AdminEventStatus/PrizeTable';

function AdminEventStatus() {
  return (
    <div className="px-[5%] flex flex-col text-nowrap w-screen">
      <PrizeTable />
      <EntryTable />
    </div>
  );
}

export default AdminEventStatus;
