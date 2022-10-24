import React from 'react';
import { StyledSearchInput } from 'components/SearchInput/SearchInput.styled';

const SearchInput = (props) => {
  return <StyledSearchInput value={props.searchText} onChange={props.onSearchChange} />;
};

export default SearchInput;
