import React from 'react';
import usersData from 'components/UsersTable/usersTableData';
import {
  StyledTableBox,
  StyledTableInner,
  StyledTD,
  StyledTH,
  StyledUsersTable,
  StyledUserTableCaption,
} from 'components/UsersTable/UsersTable.styled';

const UserTable = () => {
  return (
    <StyledTableBox>
      <StyledTableInner>
        <StyledUsersTable>
          <StyledUserTableCaption>Данные пользователей</StyledUserTableCaption>
          <thead>
            <tr>
              <StyledTH>Имя</StyledTH>
              <StyledTH>Фамилия</StyledTH>
              <StyledTH>Статус</StyledTH>
              <StyledTH>Почта</StyledTH>
              <StyledTH>Дата регистрации</StyledTH>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => {
              return (
                <tr key={user.id}>
                  <StyledTD>{user.firstName}</StyledTD>
                  <StyledTD>{user.lastName}</StyledTD>
                  <StyledTD>{user.status}</StyledTD>
                  <StyledTD>{user.mail}</StyledTD>
                  <StyledTD>{user.registrationDate}</StyledTD>
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
