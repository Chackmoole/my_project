import React from 'react';
import { StyledUsersTab } from 'components/UsersTabs/UsersTabs.styled';
import { OPTIONS_TABS, STATUS_TITLE } from 'src/constants';
import Box from '@mui/material/Box';

const UsersTabs = (props) => {
  return (
    <Box mb="8px">
      {OPTIONS_TABS.map((item) => (
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
