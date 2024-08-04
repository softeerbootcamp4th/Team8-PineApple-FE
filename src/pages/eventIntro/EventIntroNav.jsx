import React from 'react';
import EventIntroNavItem from '@/pages/eventIntro/EventIntroNavItem';
import EventIntroNavData from '@/constants/eventIntro/EventIntroNavData';
import { useNavigate } from 'react-router-dom';

function EventIntroNav() {
  const navigate = useNavigate();

  const handleNavigation = section => {
    navigate(`/event`, { state: { scrollTo: section } });
  };
  return (
    <div className="flex justify-center pd-2500 gap-1000">
      {EventIntroNavData.map((item, index) => (
        <div
          key={index}
          className="nav-item"
          onClick={() => handleNavigation(item.section)}
        >
          <EventIntroNavItem item={item} key={index} />
        </div>
      ))}
    </div>
  );
}

export default EventIntroNav;
