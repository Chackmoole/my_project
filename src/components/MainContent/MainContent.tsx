import React from 'react';

import { IUser } from 'src/types';

import { MainContentStyled } from 'components/MainContent/MainContent.styled';
import UsersTable from 'components/UsersTable/UsersTable';

interface IProps {
  openCreateModal: () => void;
  openEditModal: (user: IUser) => void;
  openDeleteModal: (user: IUser) => void;
}

const MainContent = ({ openCreateModal, openEditModal, openDeleteModal }: IProps) => {
  return (
    <MainContentStyled>
      <UsersTable
        openCreateModal={openCreateModal}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
    </MainContentStyled>
  );
};

export default MainContent;
