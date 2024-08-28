import React, { useState, useEffect, useContext } from 'react';
import NextDayArrow from '@/assets/icons/nextDayArrow.svg';
import PreviousDayArrow from '@/assets/icons/previousDayArrow.svg';
import dateFormatting from '@/utils/dateFormatting';
import { DateContext } from '@/context/dateContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { putEventSchedules, getEventSchedules } from '@/api/header/index';
import { jwtDecode } from 'jwt-decode';

function AdminHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dateInfo } = useContext(DateContext);
  const [isNextDayDisabled, setIsNextDayDisabled] = useState(false);
  const [isPreviousDayDisabled, setIsPreviousDayDisabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const checkAuthorization = () => {
    const token = sessionStorage.getItem('userInfo');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken?.role !== 'ADMIN') {
        navigate('/error');
      }
    } catch (error) {
      navigate('/error');
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  const fetchEventSchedules = async () => {
    try {
      const response = await getEventSchedules();
      if (response.code === 'UNAUTHORIZED') {
        navigate('/error');
        return;
      }

      const startDate = new Date(response[0]?.date);
      const finishDate = new Date(response[response.length - 1]?.date);
      const currentDate = new Date(dateInfo);

      setIsPreviousDayDisabled(currentDate.getTime() === startDate.getTime());
      setIsNextDayDisabled(currentDate.getTime() === finishDate.getTime());
    } catch (error) {
      navigate('/error');
    }
  };

  useEffect(() => {
    fetchEventSchedules();
  }, [dateInfo]);

  const handleDateChange = event => setSelectedDate(event.target.value);

  const navigateToDate = newDate => {
    const [, , tabName] = location.pathname.split('/');
    const newPath = `/${dateFormatting(newDate)}${tabName ? `/${tabName}` : ''}`;
    navigate(newPath);
  };

  const handlePreviousDay = () => {
    if (!isPreviousDayDisabled) {
      const previousDay = new Date(dateInfo);
      previousDay.setDate(previousDay.getDate() - 1);
      navigateToDate(previousDay);
    }
  };

  const handleNextDay = () => {
    if (!isNextDayDisabled) {
      const nextDay = new Date(dateInfo);
      nextDay.setDate(nextDay.getDate() + 1);
      navigateToDate(nextDay);
    }
  };

  const handleSubmit = async () => {
    try {
      await putEventSchedules(selectedDate);
    } catch (error) {
      console.error(error);
    }
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
