import React from 'react';
import usersData from 'components/UsersTable/usersTableData';
import {
  StyledTD,
  StyledTH,
  StyledTR,
  StyledUsersTable,
} from 'components/UsersTable/UsersTable.styled';

const UserTable = () => {
  return (
    <StyledUsersTable>
      <caption>Данные пользователей</caption>
      <thead>
        <StyledTR>
          <StyledTH>Имя</StyledTH>
          <StyledTH>Фамилия</StyledTH>
          <StyledTH>Статус</StyledTH>
          <StyledTH>Почта</StyledTH>
          <StyledTH>Дата регистрации</StyledTH>
        </StyledTR>
      </thead>
      <tbody>
        {usersData.map((user) => {
          return (
            <StyledTR key={user.id}>
              <StyledTD>{user.firstName}</StyledTD>
              <StyledTD>{user.lastName}</StyledTD>
              <StyledTD>{user.status}</StyledTD>
              <StyledTD>{user.mail}</StyledTD>
              <StyledTD>{user.registrationDate}</StyledTD>
            </StyledTR>
          );
        })}
      </tbody>
    </StyledUsersTable>
  );
};

export default UserTable;
