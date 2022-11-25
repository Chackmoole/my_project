import React, { useState } from 'react';

import { IUser } from 'src/types';

import AddUserModal from 'components/AddUserModal/AddUserModal';
import { StyledAppWrapper } from 'components/App/App.styled';
import DeleteUserModal from 'components/DeleteUserModal/DeleteUserModal';
import EditingUserModal from 'components/EditingUserModal/EditingUserModal';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isEditingModalOpen, setEditingModalOpen] = useState(false);
  const openEditingModal = (user: IUser) => {
    setCurrentUser(user);
    setEditingModalOpen(true);
  };
  const closeEditingModal = () => {
    setCurrentUser(null);
    setEditingModalOpen(false);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const openDeleteModal = (user: IUser) => {
    setCurrentUser(user);
    setDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setCurrentUser(null);
    setDeleteModalOpen(false);
  };
  return (
    <StyledAppWrapper>
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
    </StyledAppWrapper>
  );
}

export default App;
