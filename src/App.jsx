import React from 'react';
import { StyledAppWrapper } from 'src/App.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainContent from 'components/MainContent/MainContent';

function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <MainContent />
      <Footer />
    </StyledAppWrapper>
  );
}

export default App;
