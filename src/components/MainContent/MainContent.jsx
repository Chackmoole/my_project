import React from 'react';

import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UsersTable from 'components/UsersTable/UsersTable';

const MainContent = ({ openModal, openEditingModal, openDeleteModal }) => {
  return (
    <StyledMainContent>
      <UsersTable
        openModal={openModal}
        openEditingModal={openEditingModal}
        openDeleteModal={openDeleteModal}
      />
    </StyledMainContent>
  );
};

export default MainContent;
