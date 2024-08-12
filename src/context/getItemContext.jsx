import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GetItemContext = createContext();

export const GetItemProvider = ({ children }) => {
  const [getOrdered, setGetOrdered] = useState(false);
  const [getToolBox, setGetToolBox] = useState(false);

  return (
    <GetItemContext.Provider
      value={{ getOrdered, getToolBox, setGetOrdered, setGetToolBox }}
    >
      {children}
    </GetItemContext.Provider>
  );
};

GetItemProvider.propTypes = {
  children: PropTypes.node,
};
