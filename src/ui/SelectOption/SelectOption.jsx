import React from 'react';

const SelectOption = ({ optionText, optionValue }) => {
  return <option value={optionValue}>{optionText}</option>;
};

export default SelectOption;
