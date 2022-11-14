import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';

const Filters = ({ onChange, options, value, ...props }) => {
  return (
    <MuiTabs value={value} onChange={(e, newValue) => onChange(newValue)} {...props}>
      {options.map((option) => (
        <MuiTab key={option.label} label={option.label} value={option.value} />
      ))}
    </MuiTabs>
  );
};

export default Filters;
