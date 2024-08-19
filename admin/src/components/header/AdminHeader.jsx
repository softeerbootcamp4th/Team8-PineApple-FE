import React, { useState, useEffect, useContext } from 'react';
import NextDayArrow from '@/assets/icons/nextDayArrow.svg';
import PreviousDayArrow from '@/assets/icons/previousDayArrow.svg';
import dateFormatting from '@/utils/dateFormatting';
import { DateContext } from '@/context/dateContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { putEventSchedules, getEventSchedules } from '@/api/header/index';

function AdminHeader() {
  const location = useLocation();
  const navigator = useNavigate();
  const { dateInfo } = useContext(DateContext);
  const [isNextDayDisabled, setIsNextDayDisabled] = useState(false);
  const [isPreviousDayDisabled, setIsPreviousDayDisabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const getDate = async () => {
      const response = await getEventSchedules();
      const startDate = new Date(response[0].date);
      const finishDate = new Date(response[13].date);
      const currentDate = new Date(dateInfo);
      setIsPreviousDayDisabled(currentDate.getTime() === startDate.getTime());
      setIsNextDayDisabled(currentDate.getTime() === finishDate.getTime());
    };
    getDate();
  }, [dateInfo]);

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  const handlePreviousDay = () => {
    if (!isPreviousDayDisabled) {
      const previousDay = new Date(dateInfo);
      previousDay.setDate(previousDay.getDate() - 1);
      const pathSegments = location.pathname.split('/');
      const tabName = pathSegments[2];
      navigator(`/${dateFormatting(previousDay)}/${tabName}`);
    }
  };

  const handleNextDay = () => {
    if (!isNextDayDisabled) {
      const nextDay = new Date(dateInfo);
      nextDay.setDate(nextDay.getDate() + 1);
      const pathSegments = location.pathname.split('/');
      const tabName = pathSegments[2];
      navigator(`/${dateFormatting(nextDay)}/${tabName}`);
    }
  };

  const handleSubmit = () => {
    putEventSchedules(selectedDate);
  };

  return (
    <div className="pt-1000 flex justify-between w-[90%] items-center">
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
      <div>
        <div className="flex gap-300">
          <label htmlFor="date">시작일 설정: </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <button
            className="text-white bg-neutral-black"
            onClick={handleSubmit}
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
