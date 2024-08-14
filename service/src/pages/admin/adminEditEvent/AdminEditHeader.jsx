import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NextDayArrow from '@/assets/icons/nextDayArrow.svg';
import PreviousDayArrow from '@/assets/icons/previousDayArrow.svg';

function AdminEditMiniQuizHeader({ info, date, setDate }) {
  const [isPreviousDayDisabled, setIsPreviousDayDisabled] = useState(
    date === 1,
  );
  const handlePrev = () => {
    if (isPreviousDayDisabled) {
      return;
    }
    setDate(prev => prev - 1);
    setIsPreviousDayDisabled(date < 3);
  };
  const handleNext = () => {
    setDate(prev => prev + 1);
    setIsPreviousDayDisabled(false);
  };
  return (
    <div className="h-[80px] flex justify-center items-center bg-[#F2F2F2] rounded-t-[10px] relative">
      <span className="text-neutral-black text-body-3-bold absolute left-[3%]">
        {info}
      </span>
      <div className="flex gap-200">
        <img
          src={PreviousDayArrow}
          alt="PreviousDayArrow"
          className={`w-[35px] h-auto ${isPreviousDayDisabled ? 'cursor-default opacity-50' : 'cursor-pointer hover:scale-110 transition-transform duration-200'}`}
          onClick={handlePrev}
        />
        <span className="text-[#5B5B5B] text-body-3-bold">Day {date}</span>
        <img
          src={NextDayArrow}
          alt="NextDayArrow"
          className="w-[35px] h-auto cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

AdminEditMiniQuizHeader.propTypes = {
  info: PropTypes.string.isRequired,
  date: PropTypes.number,
  setDate: PropTypes.func,
};

export default AdminEditMiniQuizHeader;
