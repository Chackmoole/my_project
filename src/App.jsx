import React from 'react';
import { StyledAppInner, StyledAppWrapper, StyledTitle } from 'src/App.styled';
import UserTable from 'components/UsersTable/UsersTable';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <StyledAppInner>
        <StyledTitle>Страница пользователей</StyledTitle>
        <UserTable />
      </StyledAppInner>
      <Footer />
    </StyledAppWrapper>
  );
}

export default App;
