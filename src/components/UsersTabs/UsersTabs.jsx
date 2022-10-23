import React from 'react';
import { StyledUsersTabs } from 'components/UsersTabs/UsersTabs.styled';
import UsersTab from 'components/UsersTab/UsersTab';

const UsersTabs = () => {
  return (
    <StyledUsersTabs>
      <UsersTab children="Все"></UsersTab>
      <UsersTab children="Активные"></UsersTab>
      <UsersTab children="Замороженые"></UsersTab>
      <UsersTab children="Заблокированные"></UsersTab>
    </StyledUsersTabs>
  );
};

export default UsersTabs;
