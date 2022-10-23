import React from 'react';
import { StyledUsersTabs } from 'components/UsersTabs/UsersTabs.styled';
import UsersTab from 'components/UsersTab/UsersTab';

const UsersTabs = () => {
  return (
    <StyledUsersTabs>
      <UsersTab isActive={true}>Все</UsersTab>
      <UsersTab>Активные</UsersTab>
      <UsersTab>Замороженые</UsersTab>
      <UsersTab>Заблокированные</UsersTab>
    </StyledUsersTabs>
  );
};

export default UsersTabs;
