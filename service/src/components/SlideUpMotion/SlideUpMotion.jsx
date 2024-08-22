import React from 'react';
import PropTypes from 'prop-types';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function SlideUpMotion({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

SlideUpMotion.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default SlideUpMotion;
