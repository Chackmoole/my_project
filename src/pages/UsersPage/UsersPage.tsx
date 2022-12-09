import React, { useCallback, useState } from 'react';

import { StyledUsersPageWrapper } from 'src/pages/UsersPage/UsersPage.styled';
import { IUser } from 'src/types';

import AddUserModal from 'components/AddUserModal/AddUserModal';
import DeleteUserModal from 'components/DeleteUserModal/DeleteUserModal';
import EditingUserModal from 'components/EditingUserModal/EditingUserModal';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';

const UsersPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const [isEditingModalOpen, setEditingModalOpen] = useState(false);
  const openEditingModal = useCallback((user: IUser) => {
    setCurrentUser(user);
    setEditingModalOpen(true);
  }, []);
  const closeEditingModal = useCallback(() => {
    setCurrentUser(null);
    setEditingModalOpen(false);
  }, []);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const openDeleteModal = useCallback((user: IUser) => {
    setCurrentUser(user);
    setDeleteModalOpen(true);
  }, []);
  const closeDeleteModal = useCallback(() => {
    setCurrentUser(null);
    setDeleteModalOpen(false);
  }, []);
  return (
    <StyledUsersPageWrapper>
      <Header />
      <MainContent
        openCreateModal={openModal}
        openEditModal={openEditingModal}
        openDeleteModal={openDeleteModal}
      />
      <Footer />
      <AddUserModal isModalOpen={isModalOpen} onClose={closeModal} />
      {currentUser && (
        <EditingUserModal
          isModalOpen={isEditingModalOpen}
          onClose={closeEditingModal}
          currentUser={currentUser}
        />
      )}
      {currentUser && (
        <DeleteUserModal
          isModalOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          currentUser={currentUser}
        />
      )}
    </StyledUsersPageWrapper>
  );
};

export default UsersPage;
