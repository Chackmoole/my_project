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

  const onCancel = useCallback(
    (name: keyof IUser) => {
      setCurrentUserValues({ ...currentUserValues, [name]: currentUser[name] });
    },
    [currentUser, currentUserValues]
  );

  const onSave = useCallback(
    (name: keyof IUser) => {
      console.log(currentUser[name]);
    },
    [currentUser]
  );

  //navigation
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: keyof IUser) => {
      setCurrentUserValues({ ...currentUserValues, [name]: e.target.value });
    },
    [currentUserValues]
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
          onSave={() => onSave('firstName')}
          onCancel={() => {
            onCancel('firstName');
          }}
        >
          <TextField
            value={currentUserValues.firstName}
            onChange={(e) => {
              onValueChange(e, 'firstName');
            }}
            autoFocus
          />
        </EditableRow>
        <EditableRow
          value={currentUserValues.lastName}
          label="Фамилия"
          onSave={() => onSave('lastName')}
          onCancel={() => {
            onCancel('lastName');
          }}
        >
          <TextField
            value={currentUserValues.lastName}
            onChange={(e) => {
              onValueChange(e, 'lastName');
            }}
            autoFocus
          />
        </EditableRow>
        <EditableRow
          value={currentUserValues.mail}
          label="Почта"
          onSave={() => onSave('mail')}
          onCancel={() => {
            onCancel('mail');
          }}
        >
          <TextField
            value={currentUserValues.mail}
            onChange={(e) => {
              onValueChange(e, 'mail');
            }}
            autoFocus
          />
        </EditableRow>
        <EditableRow
          value={STATUS_TITLE[currentUserValues.status]}
          label="Статус"
          onSave={() => onSave('status')}
          onCancel={() => {
            onCancel('status');
          }}
        >
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
