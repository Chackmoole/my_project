import React, { SyntheticEvent, useState } from 'react';

import Box from '@mui/material/Box';

import { OPTIONS_TABS, STATUS_TITLE, USERS } from 'src/constants';
import { IUser, IUserStatus } from 'src/types';

import { StyledTableContainer, StyledTableInner } from 'components/UsersTable/UsersTable.styled';

import Button from 'ui/Button/Button';
import Filters from 'ui/Filters/Filters';
import { Table, TableBody, TableCell, TableHead, TableRow } from 'ui/Table/Table';
import TextField from 'ui/TextField/TextField';

interface IProps {
  openModal: () => void;
  openEditingModal: (user: IUser) => void;
  openDeleteModal: (user: IUser) => void;
}

const UsersTable = ({ openModal, openEditingModal, openDeleteModal }: IProps) => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const onFilterChange = (e: SyntheticEvent, value: IUserStatus) => {
    setCurrentStatus(value);
  };
  const [searchText, setSearchText] = useState('');
  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const isInclude = (searchValue: string, stringValue: string) => {
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
    <Box p="24px" m="auto" bgcolor="#e7ebf0">
      <StyledTableContainer>
        <TextField
          value={searchText}
          onChange={onSearchTextChange}
          fullWidth={false}
          label="Поиск"
          sx={{ mr: '24px' }}
        />
        <Button onClick={openModal}>Добавить пользователя</Button>
      </StyledTableContainer>
      <Filters
        onChange={onFilterChange}
        value={currentStatus}
        options={OPTIONS_TABS}
        sx={{ mb: '16px' }}
      />
      <StyledTableInner>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Почта</TableCell>
              <TableCell>Дата регистрации</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsersBySearchText.map((user: IUser) => {
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
