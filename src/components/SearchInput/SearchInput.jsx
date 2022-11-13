import React from 'react';
import TextField from 'src/ui/TextField/TextField';

const SearchInput = ({ searchText, onSearchChange, ...props }) => {
  return <TextField value={searchText} onChange={onSearchChange} {...props} />;
};

export default SearchInput;
