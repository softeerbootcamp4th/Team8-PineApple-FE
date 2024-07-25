import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('introduce');

  return (
    <TabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </TabContext.Provider>
  );
};

TabProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
