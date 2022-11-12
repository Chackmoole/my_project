import React, { useState } from 'react';
import { StyledTableInner, StyledTableContainer } from 'components/UsersTable/UsersTable.styled';
import { USERS, OPTIONS_TABS } from 'src/constants';
import Button from 'src/ui/Button/Button';
import Box from '@mui/material/Box';
import Filters from 'src/ui/Filters/Filters';
import TextField from 'src/ui/TextField/TextField';
import Table from 'src/ui/Table/Table';

const UsersTable = ({ openModal, openEditingModal, openDeleteModal }) => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const onFilterChange = (value) => {
    setCurrentStatus(value);
  };
  const [searchText, setSearchText] = useState('');
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const isInclude = (searchValue, stringValue) => {
    return stringValue.toLowerCase().includes(searchValue.toLowerCase());
  };

  const filteredUsersBySearchText = USERS.filter(
    (element) =>
      (!currentStatus &&
        (isInclude(searchText, element.firstName) || isInclude(searchText, element.lastName))) ||
      (element.status === currentStatus && isInclude(searchText, element.firstName)) ||
      (element.status === currentStatus && isInclude(searchText, element.lastName))
  );

  return (
    <Box br="10px" p="24px" m="auto" bgcolor="#e7ebf0">
      <StyledTableContainer>
        <TextField
          searchText={searchText}
          onSearchChange={onSearchChange}
          fullWidth={false}
          label="Поиск"
          sx={{ mr: '24px' }}
        />
        <Button onClick={openModal}>Добавить пользователя</Button>
      </StyledTableContainer>
      <Filters onChange={onFilterChange} currentStatus={currentStatus} options={OPTIONS_TABS} />
      <StyledTableInner>
        <Table
          filteredUsersBySearchText={filteredUsersBySearchText}
          openEditingModal={openEditingModal}
          openDeleteModal={openDeleteModal}
        />
      </StyledTableInner>
    </Box>
  );
};

export default UsersTable;
