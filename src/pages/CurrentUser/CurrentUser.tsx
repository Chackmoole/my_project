import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { STATUS_VARIANTS, USERS } from 'src/constants';

import PageLayout from 'components/PageLayout/PageLayout';

import Button from 'ui/Button/Button';
import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import Typography from 'ui/Typography/Typography';

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

  const onSelectChange = useCallback(
    (e: SelectChangeEvent) => {
      setCurrentUserValues({ ...currentUserValues, status: e.target.value });
    },
    [currentUserValues]
  );

  //navigation
  const navigate = useNavigate();

  const backRedirect = useCallback(() => {
    navigate(-1);
  }, []);

  const onSaveButtonClick = useCallback(() => {
    console.log(currentUserValues);
  }, [currentUserValues]);

  const onBackButtonClick = useCallback(() => {
    backRedirect();
  }, []);

  return (
    <PageLayout>
      <StyledCurrentUserBox>
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, firstName: e.target.value });
          }}
          value={currentUserValues.firstName}
          label="Имя"
        />
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, lastName: e.target.value });
          }}
          value={currentUserValues.lastName}
          label="Фамилия"
        />
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, mail: e.target.value });
          }}
          value={currentUserValues.mail}
          label="Почта"
        />

        <MuiBox sx={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <Typography sx={{ minWidth: '100px' }}>Статус</Typography>
          <Select
            label="Статус"
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={currentUser.status}
            id="status"
          />
        </MuiBox>
        <Box sx={{ display: 'flex', gap: '40px' }}>
          <Button onClick={onSaveButtonClick}>Сохранить</Button>
          <Button onClick={onBackButtonClick} variant="outlined">
            Назад
          </Button>
        </Box>
      </StyledCurrentUserBox>
    </PageLayout>
  );
};

export default CurrentUser;
