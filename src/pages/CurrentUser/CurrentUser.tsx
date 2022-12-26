import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SelectChangeEvent } from '@mui/material/Select';
import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { STATUS_VARIANTS, USERS } from 'src/constants';

import PageLayout from 'components/PageLayout/PageLayout';

import { Box } from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import TextField from 'ui/TextField/TextField';
import Typography from 'ui/Typography/Typography';

const CurrentUser = () => {
  const { userId } = useParams();
  const currentUser = useMemo(() => {
    return USERS.find((user) => user.id == Number(userId));
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

  const onSaveButtonClick = useCallback(() => {
    console.log(currentUserValues);
  }, [currentUserValues]);

  const onBackButtonClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  //TODO Объединить в одну функцию
  const onFirstNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentUserValues({ ...currentUserValues, firstName: e.target.value });
    },
    [currentUserValues]
  );
  const onLastNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentUserValues({ ...currentUserValues, lastName: e.target.value });
    },
    [currentUserValues]
  );
  const onMailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCurrentUserValues({ ...currentUserValues, mail: e.target.value });
    },
    [currentUserValues]
  );

  return (
    <PageLayout>
      <StyledCurrentUserBox>
        <EditableRow
          onChange={onFirstNameChange}
          currentUserValues={currentUserValues}
          value={currentUserValues.firstName}
          label="Имя"
        >
          <TextField label="Имя" value={currentUserValues.firstName} onChange={onFirstNameChange} />
        </EditableRow>
        <EditableRow
          onChange={onLastNameChange}
          currentUserValues={currentUserValues}
          value={currentUserValues.lastName}
          label="Фамилия"
        >
          <TextField
            label="Фамилия"
            value={currentUserValues.lastName}
            onChange={onLastNameChange}
          />
        </EditableRow>
        <EditableRow
          onChange={onMailChange}
          currentUserValues={currentUserValues}
          value={currentUserValues.mail}
          label="Почта"
        >
          <TextField label="Почта" value={currentUserValues.mail} onChange={onMailChange} />
        </EditableRow>

        <EditableRow
          value={currentUserValues.status}
          onChange={onSelectChange}
          label="Статус"
          currentUserValues={currentUserValues}
        >
          <Select
            label="Статус"
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={currentUserValues.status}
            id="status"
          />
        </EditableRow>
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
