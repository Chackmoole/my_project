import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { STATUS_VARIANTS, USERS } from 'src/constants';
import { IUserStatus } from 'src/types';

import PageLayout from 'components/PageLayout/PageLayout';

import Select from 'ui/Select/Select';
import TextField from 'ui/TextField/TextField';

const CurrentUser = () => {
  const { userId } = useParams();
  const currentUser = useMemo(() => {
    return USERS.find((user) => user.id == +userId);
  }, [userId]);
  const [currentUserValues, setCurrentUserValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    status: currentUser.status,
    mail: currentUser.mail,
  });

  const [value, setValue] = useState(currentUser?.status);

  const onSelectChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as IUserStatus);
  };

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
        <MuiBox sx={{ minWidth: 120 }}>
          <Select
            label="Статус"
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={value}
            id="status"
          />
        </MuiBox>
      </StyledCurrentUserBox>
    </PageLayout>
  );
};

export default CurrentUser;
