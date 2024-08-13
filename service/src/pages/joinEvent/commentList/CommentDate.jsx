import React, { useState, useEffect } from 'react';
import NextDayArrow from '@/assets/icons/nextDayArrow.svg';
import PreviousDayArrow from '@/assets/icons/previousDayArrow.svg';
import dateFormatting from '@/utils/dateFormatting';
import PropTypes from 'prop-types';

function CommentDate({ today, setToday, setCurrentPage }) {
  const [isNextDayDisabled, setIsNextDayDisabled] = useState(false);
  const [isPreviousDayDisabled, setIsPreviousDayDisabled] = useState(false);

  useEffect(() => {
    const formattedToday = dateFormatting();
    setIsNextDayDisabled(today === formattedToday);
    setIsPreviousDayDisabled(today === '2024-07-28');
  }, [today]);

  const handlePreviousDay = () => {
    if (!isPreviousDayDisabled) {
      const previousDay = new Date(today);
      previousDay.setDate(previousDay.getDate() - 1);
      setToday(dateFormatting(previousDay));
      setCurrentPage(1);
    }
  };

  const handleNextDay = () => {
    if (!isNextDayDisabled) {
      const nextDay = new Date(today);
      nextDay.setDate(nextDay.getDate() + 1);
      setToday(dateFormatting(nextDay));
      setCurrentPage(1);
    }
  };

  return (
    <div className="flex justify-center gap-800 mb-1100">
      <img
        src={PreviousDayArrow}
        alt="previousDayArrow"
        onClick={handlePreviousDay}
        className={`${isPreviousDayDisabled ? 'cursor-default opacity-50' : 'cursor-pointer'}`}
      />
      <span className="text-detail-1-medium text-neutral-500">{today}</span>
      <img
        src={NextDayArrow}
        alt="nextDayArrow"
        onClick={handleNextDay}
        className={`${isNextDayDisabled ? 'cursor-default opacity-50' : 'cursor-pointer'}`}
      />
    </div>
  );
}

CommentDate.propTypes = {
  today: PropTypes.string.isRequired,
  setToday: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CommentDate;
