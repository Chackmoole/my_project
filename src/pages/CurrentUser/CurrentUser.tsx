import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { USERS } from 'src/constants';

import PageLayout from 'components/PageLayout/PageLayout';

import TextField from 'ui/TextField/TextField';

const CurrentUser = () => {
  const { userId } = useParams();
  const currentUser = USERS.filter((user) => user.id == +userId);
  const [currentUserValues, setCurrentUserValues] = useState({
    firstName: currentUser[0].firstName,
    lastName: currentUser[0].lastName,
    status: currentUser[0].status,
    mail: currentUser[0].mail,
  });

  return (
    <PageLayout>
      <StyledCurrentUserBox>
        <TextField
          label="Имя"
          value={currentUserValues.firstName}
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, firstName: e.target.value });
          }}
        />
        <TextField
          label="Фамилия"
          value={currentUserValues.lastName}
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, lastName: e.target.value });
          }}
        />
        <TextField
          label="Почта"
          value={currentUserValues.mail}
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, mail: e.target.value });
          }}
        />
      </StyledCurrentUserBox>
    </PageLayout>
  );
};

export default CurrentUser;
