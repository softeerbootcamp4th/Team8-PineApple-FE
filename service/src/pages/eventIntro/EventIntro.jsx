import React from 'react';
import EventIntroMain from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function EventIntro() {
  return (
    <div>
      <EventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical mt-[1px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <EventIntroNav />
          <EventIntroRewards />
        </motion.div>
      </div>
    </div>
  );
}

export default EventIntro;
