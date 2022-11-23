import React from 'react';

import { IUser } from 'src/types';

import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UsersTable from 'components/UsersTable/UsersTable';

interface IProps {
  openCreateModal: () => void;
  openEditModal: (user: IUser) => void;
  openDeleteModal: (user: IUser) => void;
}

const MainContent = ({ openCreateModal, openEditModal, openDeleteModal }: IProps) => {
  return (
    <StyledMainContent>
      <UsersTable
        openCreateModal={openCreateModal}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
    </StyledMainContent>
  );
};

export default MainContent;
