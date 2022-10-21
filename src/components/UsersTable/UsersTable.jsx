import React from 'react';
import usersData from 'components/UsersTable/usersTableData';

const UserTable = () => {
  return (
    <table>
      <caption>Данные пользователей</caption>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Статус</th>
          <th>Почта</th>
          <th>Дата регистрации</th>
        </tr>
      </thead>
      <tbody>
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
  );
};

export default UserTable;
