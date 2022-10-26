import React from 'react';
import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UsersTable from 'components/UsersTable/UsersTable';

const MainContent = ({ openModal }) => {
  return (
    <StyledMainContent>
      <UsersTable openModal={openModal} />
    </StyledMainContent>
  );
};

export default MainContent;
