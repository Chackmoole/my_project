import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';

const Filters = ({ onChange, options, currentStatus, ...props }) => {
  return (
    <MuiTabs value={currentStatus} onChange={(e, newValue) => onChange(newValue)} {...props}>
      {options.map((option) => (
        <MuiTab key={option.label} label={option.label} value={option.value} {...props}></MuiTab>
      ))}
    </MuiTabs>
  );
};

export default Filters;
