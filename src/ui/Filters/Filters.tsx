import React from 'react';

import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';

import { IFiltersProps } from 'ui/Filters/types';

const Filters = ({ onChange, options, value, ...props }: IFiltersProps) => {
  return (
    <MuiTabs value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <MuiTab key={option.label} label={option.label} value={option.value} />
      ))}
    </MuiTabs>
  );
};

export default Filters;
