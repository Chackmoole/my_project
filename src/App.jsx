import React from 'react';
import styles from './App.module.css';
import usersData from './data';

function App() {
  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}></header>
      <div className={styles.appInner}>
        <h1 className={styles.title}>Страница пользователей</h1>
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
                <tr>
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
      </div>
      <footer className={styles.appFooter}>(c) Chackmool</footer>
    </div>
  );
}

export default App;
