import React from 'react';
import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UserTable from 'components/UsersTable/UsersTable';

const MainContent = ({ openModal }) => {
  return (
    <StyledMainContent>
      <UserTable openModal={openModal} />
    </StyledMainContent>
  );
};

export default MainContent;
