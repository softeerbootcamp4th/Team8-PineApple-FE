import React, { useState, useEffect } from 'react';
import getTimeRemaining from '@/utils/getTimeRemaining';

function RemainingTime() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="text-detail-2-regular text-primary-blue mr-300">
        오늘 남은 시간
      </span>
      <span className="rounded-lg bg-primary-babyblue text-primary-blue text-detail-1-semibold py-200 px-300 mr-200">
        {timeRemaining[0]}
      </span>
      <span className="rounded-lg bg-primary-babyblue text-primary-blue text-detail-1-semibold py-200 px-300 mr-[4px]">
        {timeRemaining[1]}
      </span>
      <span className="text-primary-blue text-detail-1-semibold mr-[4px]">
        :
      </span>
      <span className="rounded-lg bg-primary-babyblue text-primary-blue text-detail-1-semibold py-200 px-300 mr-200">
        {timeRemaining[2]}
      </span>
      <span className="rounded-lg bg-primary-babyblue text-primary-blue text-detail-1-semibold py-200 px-300">
        {timeRemaining[3]}
      </span>
    </div>
  );
}

export default RemainingTime;
