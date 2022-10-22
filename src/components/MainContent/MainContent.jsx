import React from 'react';
import { MainContentStyled } from 'components/MainContent/MainContent.styled';
import UserTable from 'components/UsersTable/UsersTable';

const MainContent = () => {
  return (
    <MainContentStyled>
      <UserTable />
    </MainContentStyled>
  );
};

export default MainContent;
