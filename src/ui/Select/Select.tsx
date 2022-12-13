import React, { useState } from 'react';

import { FormControl, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material';
import MuiSelect, { SelectProps } from '@mui/material/Select';

const Select = ({ value, id, inputProps, onChange, ...props }: SelectProps) => {
  const [selectValue, setSelectValue] = useState(value);

  const onChangeSelect = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value as string);
    console.log(e.target.value);
  };
  return (
    <FormControl>
      <InputLabel id={`${id}-label`}>Статус</InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={selectValue}
        label="Статус"
        onChange={onChangeSelect}
      >
        <MenuItem value="active">active</MenuItem>
        <MenuItem value="frozen">frozen</MenuItem>
        <MenuItem value="blocked">blocked</MenuItem>
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
