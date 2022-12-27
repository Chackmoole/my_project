import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { STATUS_TITLE, STATUS_VARIANTS, USERS } from 'src/constants';
import { IUserStatus } from 'src/types';

import PageLayout from 'components/PageLayout/PageLayout';

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

  return (
    <PageLayout>
      <Stack>
        <Button onClick={onBackButtonClick} variant="outlined" startIcon={<ArrowBackIcon />}>
          Назад
        </Button>
        <EditableRow value={currentUserValues.firstName} label="Имя">
          <TextField value={currentUserValues.firstName} onChange={onFirstNameChange} />
        </EditableRow>
        <EditableRow value={currentUserValues.lastName} label="Фамилия">
          <TextField value={currentUserValues.lastName} onChange={onLastNameChange} />
        </EditableRow>
        <EditableRow value={currentUserValues.mail} label="Почта">
          <TextField value={currentUserValues.mail} onChange={onMailChange} />
        </EditableRow>
        <EditableRow value={STATUS_TITLE[currentUserValues.status]} label="Статус">
          <Select
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={currentUserValues.status}
            id="status"
          />
        </EditableRow>
      </Stack>
    </PageLayout>
  );
};

export default CurrentUser;
