import React from 'react';
import Tabs from 'src/ui/Tabs/Tabs';
import Tab from 'src/ui/Tab/Tab';

const Filters = ({ onChange, options, currentStatus, ...props }) => {
  return (
    <Tabs value={currentStatus} onChange={(e, newValue) => onChange(newValue)} {...props}>
      {options.map((option) => (
        <Tab key={option.label} label={option.label} value={option.value} {...props}></Tab>
      ))}
    </Tabs>
  );
};

export default Filters;
