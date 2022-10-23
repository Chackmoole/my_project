import React from 'react';
import { StyledUsersTab } from 'components/UsersTab/UsersTab.styled';

const UsersTab = (props) => {
  return <StyledUsersTab>{props.children}</StyledUsersTab>;
};

export default UsersTab;
