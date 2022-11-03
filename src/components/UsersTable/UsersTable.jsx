import React, { useState } from 'react';
import { StyledTableInner, StyledTableContainer } from 'components/UsersTable/UsersTable.styled';
import { statusTitle, USERS } from 'src/constants';
import UsersTabs from 'components/UsersTabs/UsersTabs';
import SearchInput from 'components/SearchInput/SearchInput';
import Button from 'src/ui/Button/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Box from '@mui/material/Box';

const UsersTable = ({ openModal, openEditingModal, openDeleteModal }) => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const onTabClick = (value) => {
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
        <SearchInput searchText={searchText} onSearchChange={onSearchChange} />
        <Button onClick={openModal}>Добавить пользователя</Button>
      </StyledTableContainer>
      <UsersTabs onTabClick={onTabClick} currentStatus={currentStatus} />

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
                  <TableCell>{statusTitle[user.status]}</TableCell>
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
