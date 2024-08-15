import React, { useState, useEffect, useContext } from 'react';
import NextDayArrow from '@/assets/icons/nextDayArrow.svg';
import PreviousDayArrow from '@/assets/icons/previousDayArrow.svg';
import dateFormatting from '@/utils/dateFormatting';
import { DateContext } from '@/context/dateContext';

function AdminHeader() {
  const { dateInfo, setDateInfo } = useContext(DateContext);
  const [isNextDayDisabled, setIsNextDayDisabled] = useState(false);
  const [isPreviousDayDisabled, setIsPreviousDayDisabled] = useState(false);

  useEffect(() => {
    setIsNextDayDisabled(dateInfo === '2024-08-31');
    setIsPreviousDayDisabled(dateInfo === '2024-07-28');
  }, [dateInfo]);

  const handlePreviousDay = () => {
    if (!isPreviousDayDisabled) {
      const previousDay = new Date(dateInfo);
      previousDay.setDate(previousDay.getDate() - 1);
      setDateInfo(dateFormatting(previousDay));
      console.log(previousDay);
    }
  };

  const handleNextDay = () => {
    if (!isNextDayDisabled) {
      const nextDay = new Date(dateInfo);
      nextDay.setDate(nextDay.getDate() + 1);
      setDateInfo(dateFormatting(nextDay));
      console.log(nextDay);
    }
  };
  return (
    <div className="pt-1000 flex justify-between w-[90%]">
      <div className="set-center gap-500">
        <span className="text-heading-2-bold text-neutral-black">
          이벤트 관리
        </span>
        <div className="bg-[#AEAEAE] px-4 py-1 rounded-full text-white set-center text-detail-1-semibold">
          진행중
        </div>
        <div className="flex gap-200">
          <img
            src={PreviousDayArrow}
            alt="PreviousDayArrow"
            className={`w-[35px] h-auto ${isPreviousDayDisabled ? 'cursor-default opacity-50' : 'cursor-pointer hover:scale-110 transition-transform duration-200'}`}
            onClick={handlePreviousDay}
          />
          <span className="text-[#5B5B5B] text-body-3-bold">{dateInfo}</span>
          <img
            src={NextDayArrow}
            alt="NextDayArrow"
            className={`w-[35px] h-auto ${isNextDayDisabled ? 'cursor-default opacity-50' : 'cursor-pointer hover:scale-110 transition-transform duration-200'}`}
            onClick={handleNextDay}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
