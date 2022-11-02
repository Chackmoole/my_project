import React, { useState } from 'react';
import { StyledAppWrapper } from 'src/App.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainContent from 'components/MainContent/MainContent';
import AddUserModal from 'components/AddUserModal/AddUserModal';
import EditingUserModal from 'components/EditingUserModal/EditingUserModal';

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
    setEditingModalOpen(close);
  };

  return (
    <StyledAppWrapper>
      <Header />
      <MainContent openModal={openModal} openEditingModal={openEditingModal} />
      <Footer />
      <AddUserModal isModalOpen={isModalOpen} closeModal={closeModal} />
      {currentUser && (
        <EditingUserModal
          isModalOpen={isEditingModalOpen}
          closeModal={closeEditingModal}
          currentUser={currentUser}
        />
      )}
    </StyledAppWrapper>
  );
}

export default App;
