import React from 'react';

import TextField from 'ui/TextField/TextField';

interface IProps {
  searchText: string;
  onSearchChange: () => void;
}

const SearchInput = ({ searchText, onSearchChange, ...props }: IProps) => {
  console.log('searchText: ', searchText, 'onSearchChange: ', onSearchChange);
  return <TextField value={searchText} onChange={onSearchChange} {...props} />;
};

export default SearchInput;
