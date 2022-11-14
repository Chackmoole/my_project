import React, { useState } from 'react';
import { StyledAppWrapper } from 'components/App/App.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainContent from 'components/MainContent/MainContent';
import AddUserModal from 'components/AddUserModal/AddUserModal';
import EditingUserModal from 'components/EditingUserModal/EditingUserModal';
import DeleteUserModal from 'components/DeleteUserModal/DeleteUserModal';

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
  const openEditingModal = (user) => {
    setCurrentUser(user);
    setEditingModalOpen(true);
  };
  const closeEditingModal = () => {
    setCurrentUser(null);
    setEditingModalOpen(false);
  };

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const openDeleteModal = (user) => {
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
        openModal={openModal}
        openEditingModal={openEditingModal}
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
