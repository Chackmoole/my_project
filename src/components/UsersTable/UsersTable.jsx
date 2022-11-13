import React, { useState } from 'react';
import { StyledTableInner, StyledTableContainer } from 'components/UsersTable/UsersTable.styled';
import { USERS, OPTIONS_TABS, STATUS_TITLE } from 'src/constants';
import SearchInput from 'components/SearchInput/SearchInput';
import Button from 'src/ui/Button/Button';
import Box from '@mui/material/Box';
import Filters from 'src/ui/Filters/Filters';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'src/ui/Table/Table';

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
        <SearchInput
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Почта</TableCell>
              <TableCell>Дата регистрации</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsersBySearchText.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{STATUS_TITLE[user.status]}</TableCell>
                  <TableCell>{user.mail}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                  <TableCell>
                    <Button onClick={() => openEditingModal(user)}>Редактировать</Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => openDeleteModal(user)}>Удалить</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableInner>
    </Box>
  );
};

export default UsersTable;
