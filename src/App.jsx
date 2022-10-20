import React from 'react';
import usersData from './data';
import {
  StyledAppFooter,
  StyledAppInner,
  StyledAppWrapper,
  StyledHeader,
  StyledTitle,
} from 'src/App.styled';

function App() {
  return (
    <StyledAppWrapper>
      <StyledHeader></StyledHeader>
      <StyledAppInner>
        <StyledTitle>Страница пользователей</StyledTitle>
        <table>
          <caption>Данные пользователей</caption>
          <tbody>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Статус</th>
              <th>Почта</th>
              <th>Дата регистрации</th>
            </tr>
            {usersData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>

                  <td>{user.status}</td>
                  <td>{user.mail}</td>

                  <td>{user.registrationDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledAppInner>
      <StyledAppFooter>(c) Chackmool</StyledAppFooter>
    </StyledAppWrapper>
  );
}

export default App;
