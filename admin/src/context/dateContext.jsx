import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import dateFormatting from '@/utils/dateFormatting';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [dateInfo, setDateInfo] = useState(dateFormatting());

  return (
    <DateContext.Provider value={{ dateInfo, setDateInfo }}>
      {children}
    </DateContext.Provider>
  );
};

DateProvider.propTypes = {
  children: PropTypes.node,
};
