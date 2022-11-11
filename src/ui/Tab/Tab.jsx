import React from 'react';
import MuiTab from '@mui/material/Tab';

const Tab = ({ children, ...props }) => {
  return <MuiTab {...props}>{children}</MuiTab>;
};

export default Tab;
