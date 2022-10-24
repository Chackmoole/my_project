import React from 'react';
import { StyledUsersTab, StyledUsersTabs } from 'components/UsersTabs/UsersTabs.styled';
import { statusTitle } from 'src/constants';

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
    <StyledUsersTabs>
      {options.map((item) => (
        <StyledUsersTab
          key={item.label}
          isActive={props.currentStatus === item.value}
          onClick={() => props.onTabClick(item.value)}
        >
          {item.label}
        </StyledUsersTab>
      ))}
    </StyledUsersTabs>
  );
};

export default UsersTabs;
