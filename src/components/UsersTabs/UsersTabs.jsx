import React from 'react';
import { StyledUsersTab } from 'components/UsersTabs/UsersTabs.styled';
import { statusTitle } from 'src/constants';
import Box from '@mui/material/Box';

const options = [
  {
    label: 'Все',
    value: null,
  },
  {
    label: statusTitle['active'],
    value: 'active',
  },
  {
    label: statusTitle['frozen'],
    value: 'frozen',
  },
  {
    label: statusTitle['blocked'],
    value: 'blocked',
  },
];

const UsersTabs = (props) => {
  return (
    <Box mb="8px">
      {options.map((item) => (
        <StyledUsersTab
          key={item.label}
          isActive={props.currentStatus === item.value}
          onClick={() => props.onTabClick(item.value)}
        >
          {item.label}
        </StyledUsersTab>
      ))}
    </Box>
  );
};

export default UsersTabs;
