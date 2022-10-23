import React from 'react';
import { StyledUsersTab } from 'components/UsersTab/UsersTab.styled';

const UsersTab = (props) => {
  return <StyledUsersTab isActive={props.isActive}>{props.children}</StyledUsersTab>;
};

export default UsersTab;
