import React, { useState } from 'react';
import {
  StyledTableBox,
  StyledTableInner,
  StyledCell,
  StyledHeadCell,
  StyledUsersTable,
  StyledTableContainer,
} from 'components/UsersTable/UsersTable.styled';
import { statusTitle, USERS } from 'src/constants';
import UsersTabs from 'components/UsersTabs/UsersTabs';
import SearchInput from 'components/SearchInput/SearchInput';
import AddUserButton from 'components/AddUserButton/AddUserButton';

const UserTable = ({ openModal }) => {
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
    <StyledTableBox>
      <StyledTableContainer>
        <SearchInput searchText={searchText} onSearchChange={onSearchChange} />
        <AddUserButton openModal={openModal} />
      </StyledTableContainer>
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
            {filteredUsersBySearchText.map((user) => {
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
