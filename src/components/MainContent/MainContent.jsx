import React from 'react';
import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UserTable from 'components/UsersTable/UsersTable';

const MainContent = () => {
  return (
    <StyledMainContent>
      <UserTable />
    </StyledMainContent>
  );
};

export default MainContent;
