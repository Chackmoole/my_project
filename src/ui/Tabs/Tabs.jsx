import React from 'react';
import MuiTabs from '@mui/material/Tabs';

const Tabs = ({ children, ...props }) => {
  return <MuiTabs children={children} {...props} />;
};

export default Tabs;
