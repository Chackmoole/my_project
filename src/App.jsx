import React, { useState } from 'react';
import { StyledAppWrapper } from 'src/App.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainContent from 'components/MainContent/MainContent';
import AddUserModal from 'components/AddUserModal/AddUserModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledAppWrapper>
      <Header />
      <MainContent openModal={openModal} />
      <Footer />
      <AddUserModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </StyledAppWrapper>
  );
}

export default App;
