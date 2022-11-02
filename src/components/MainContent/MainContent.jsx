import React from 'react';
import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UsersTable from 'components/UsersTable/UsersTable';

const MainContent = ({ openModal, openEditingModal }) => {
  return (
    <StyledMainContent>
      <UsersTable openModal={openModal} openEditingModal={openEditingModal} />
    </StyledMainContent>
  );
};

export default MainContent;
