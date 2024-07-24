import React from 'react';
import { FreeRideButton } from '@/components/buttons/freeRideButton';
import { PreOrderButton } from '@/components/buttons/preOrderButton';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-start gap-900 h-[412px] px-[236px] py-[56px] bg-neutral-50">
      <div className="text-center text-primary-berrypurple text-detail-1-medium">
        전력을 다해, CASPER Eletric 사전계약 진행중
      </div>
      <div className="flex justify-center gap-300">
        <FreeRideButton />
        <PreOrderButton />
      </div>
    </footer>
  );
}
