import React, { useState } from 'react';
import {
  StyledTableBox,
  StyledTableInner,
  StyledCell,
  StyledHeadCell,
  StyledUsersTable,
} from 'components/UsersTable/UsersTable.styled';
import { statusTitle, USERS } from 'src/constants';
import UsersTabs from 'components/UsersTabs/UsersTabs';

const UserTable = () => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const onTabClick = (value) => {
    setCurrentStatus(value);
  };

  return (
    <StyledTableBox>
      <UsersTabs onTabClick={onTabClick} currentStatus={currentStatus} />
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
            {USERS.map((user) => {
              if (!currentStatus || user.status === currentStatus)
                return (
                  <tr key={user.id}>
                    <StyledCell>{user.firstName}</StyledCell>
                    <StyledCell>{user.lastName}</StyledCell>
                    <StyledCell>{statusTitle[user.status]}</StyledCell>
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
