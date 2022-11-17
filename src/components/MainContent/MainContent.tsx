import React from 'react';

import { IUser } from 'src/types';

import { StyledMainContent } from 'components/MainContent/StyledMainContent';
import UsersTable from 'components/UsersTable/UsersTable';

interface IProps {
  openModal: () => void;
  openEditingModal: (user: IUser) => void;
  openDeleteModal: (user: IUser) => void;
}

const MainContent = ({ openModal, openEditingModal, openDeleteModal }: IProps) => {
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
