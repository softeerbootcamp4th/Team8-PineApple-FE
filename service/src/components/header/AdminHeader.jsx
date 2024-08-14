import React from 'react';

function AdminHeader() {
  return (
    <div className="pt-1000 flex justify-between w-[90%]">
      <div className="set-center gap-500">
        <span className="text-heading-2-bold text-neutral-black">
          이벤트 관리
        </span>
        <div className="bg-[#AEAEAE] px-4 py-1 rounded-full text-white set-center text-detail-1-semibold">
          진행중
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
