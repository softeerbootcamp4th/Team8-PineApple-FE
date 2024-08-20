import React from 'react';
import EventIntroNavItem from '@/pages/eventIntro/EventIntroNavItem';
import EventIntroNavData from '@/constants/eventIntro/EventIntroNavData';
import { useNavigate } from 'react-router-dom';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function EventIntroNav() {
  const navigate = useNavigate();

  const handleNavigation = section => {
    navigate(`/event`, { state: { scrollTo: section } });
  };

  return (
    <div className="flex justify-center pd-2500 gap-1000">
      {EventIntroNavData.map((item, index) => (
        <div
          key={item.id}
          className="nav-item"
          onClick={() => handleNavigation(item.section)}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.5 + (index * 2) / 10,
            }}
          >
            <EventIntroNavItem item={item} />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default EventIntroNav;
