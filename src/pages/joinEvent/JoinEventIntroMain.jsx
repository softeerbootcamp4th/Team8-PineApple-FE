import React, { useCallback } from 'react';
import Card1 from '@/pages/joinEvent/Card1';
import Card2 from '@/pages/joinEvent/Card2';

function JoinEventIntroMain() {
  return (
    <div className="bg-join-event-main bg-cover bg-center h-screen pt-[250px] flex flex-col gap-1300">
      <div className="px-5000">
        <div className="flex items-center gap-300">
          <Card1 loginData="" />
          <div className="text-heading-1-bold text-neutral-white">+</div>
          <Card2 loginData={0} />
        </div>
      </div>
    </div>
  );
}

export default JoinEventIntroMain;
