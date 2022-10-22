import React from 'react';
import usersData from 'components/UsersTable/usersTableData';
import {
  StyledTableBox,
  StyledTableInner,
  StyledCell,
  StyledHeadCell,
  StyledUsersTable,
} from 'components/UsersTable/UsersTable.styled';

const UserTable = () => {
  return (
    <StyledTableBox>
      <StyledTableInner>
        <StyledUsersTable>
          <thead>
            <tr>
              <StyledHeadCell>Имя</StyledHeadCell>
              <StyledHeadCell>Фамилия</StyledHeadCell>
              <StyledHeadCell>Статус</StyledHeadCell>
              <StyledHeadCell>Почта</StyledHeadCell>
              <StyledHeadCell>Дата регистрации</StyledHeadCell>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => {
              return (
                <tr key={user.id}>
                  <StyledCell>{user.firstName}</StyledCell>
                  <StyledCell>{user.lastName}</StyledCell>
                  <StyledCell>{user.status}</StyledCell>
                  <StyledCell>{user.mail}</StyledCell>
                  <StyledCell>{user.registrationDate}</StyledCell>
                </tr>
              );
            })}
          </tbody>
        </StyledUsersTable>
      </StyledTableInner>
    </StyledTableBox>
  );
};

export default UserTable;
