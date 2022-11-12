import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableBody from '@mui/material/TableBody';
import { STATUS_TITLE } from 'src/constants';
import Button from 'src/ui/Button/Button';

const Table = ({ openEditingModal, openDeleteModal, filteredUsersBySearchText }) => {
  return (
    <MuiTable>
      <MuiTableHead>
        <MuiTableRow>
          <MuiTableCell>Имя</MuiTableCell>
          <MuiTableCell>Фамилия</MuiTableCell>
          <MuiTableCell>Статус</MuiTableCell>
          <MuiTableCell>Почта</MuiTableCell>
          <MuiTableCell>Дата регистрации</MuiTableCell>
          <MuiTableCell></MuiTableCell>
          <MuiTableCell></MuiTableCell>
        </MuiTableRow>
      </MuiTableHead>
      <MuiTableBody>
        {filteredUsersBySearchText.map((user) => {
          return (
            <MuiTableRow key={user.id}>
              <MuiTableCell>{user.firstName}</MuiTableCell>
              <MuiTableCell>{user.lastName}</MuiTableCell>
              <MuiTableCell>{STATUS_TITLE[user.status]}</MuiTableCell>
              <MuiTableCell>{user.mail}</MuiTableCell>
              <MuiTableCell>{user.registrationDate}</MuiTableCell>
              <MuiTableCell>
                <Button onClick={() => openEditingModal(user)}>Редактировать</Button>
              </MuiTableCell>
              <MuiTableCell>
                <Button onClick={() => openDeleteModal(user)}>Удалить</Button>
              </MuiTableCell>
            </MuiTableRow>
          );
        })}
      </MuiTableBody>
    </MuiTable>
  );
};

export default Table;
