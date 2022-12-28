import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SelectChangeEvent } from '@mui/material/Select';

import { STATUS_TITLE, STATUS_VARIANTS, USERS } from 'src/constants';
import { IUser, IUserStatus } from 'src/types';

import PageLayout from 'components/PageLayout/PageLayout';

import { Box } from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';
import Stack from 'ui/Stack/Stack';
import TextField from 'ui/TextField/TextField';

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
      setCurrentUserValues({ ...currentUserValues, status: e.target.value as IUserStatus });
    },
    [currentUserValues]
  );

  //navigation
  const navigate = useNavigate();

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

  const onCancel = useCallback(
    (name: keyof IUser) => {
      setCurrentUserValues({ ...currentUserValues, [name]: currentUser[name] });
    },
    [currentUser, currentUserValues]
  );

  //TODO Сделать всплывающее окно(toast message) об успешном сохранении.

  return (
    <PageLayout>
      <Box sx={{ padding: '40px 0' }}>
        <Button
          onClick={onBackButtonClick}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ minWidth: '100px' }}
        >
          Назад
        </Button>
      </Box>
      <Stack sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'reverse', gap: '16px' }}>
        <EditableRow
          value={currentUserValues.firstName}
          label="Имя"
          onCancel={() => {
            onCancel('firstName');
          }}
        >
          <TextField value={currentUserValues.firstName} onChange={onFirstNameChange} autoFocus />
        </EditableRow>
        <EditableRow
          value={currentUserValues.lastName}
          label="Фамилия"
          onCancel={() => {
            onCancel('lastName');
          }}
        >
          <TextField value={currentUserValues.lastName} onChange={onLastNameChange} autoFocus />
        </EditableRow>
        <EditableRow
          value={currentUserValues.mail}
          label="Почта"
          onCancel={() => {
            onCancel('mail');
          }}
        >
          <TextField value={currentUserValues.mail} onChange={onMailChange} autoFocus />
        </EditableRow>
        <EditableRow value={STATUS_TITLE[currentUserValues.status]} label="Статус">
          <Select
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={currentUserValues.status}
            id="status"
            sx={{ minWidth: '214px' }}
          />
        </EditableRow>
      </Stack>
    </PageLayout>
  );
};

export default CurrentUser;
