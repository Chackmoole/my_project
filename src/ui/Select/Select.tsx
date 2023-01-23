import React from 'react';

import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect, { SelectProps } from '@mui/material/Select';

interface ISelectProps extends SelectProps {
  options: { value: string; label: string }[];
}

const Select = ({
  label = '',
  options,
  value,
  onChange,
  id,
  size = 'small',
  ...props
}: ISelectProps) => {
  return (
    <MuiFormControl fullWidth>
      <MuiInputLabel id={`${id}-label`}>{label}</MuiInputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        size={size}
        {...props}
      >
        {options.map((option) => (
          <MuiMenuItem value={option.value} key={option.value}>
            {option.label}
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  );
};

export default Select;
