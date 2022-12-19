import React, { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledCurrentUserBox } from 'pages/CurrentUser/CurrentUser.styled';

import { STATUS_VARIANTS, USERS } from 'src/constants';
import { IUserStatus } from 'src/types';

import PageLayout from 'components/PageLayout/PageLayout';

import Button from 'ui/Button/Button';
import EditableRow from 'ui/EditableRow/EditableRow';
import Select from 'ui/Select/Select';

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
  //del
  const [selectValue, setSelectValue] = useState(currentUser?.status);

  const onSelectChange = useCallback((e: SelectChangeEvent) => {
    setSelectValue(e.target.value as IUserStatus);
  }, []);

  const onSaveButtonClick = useCallback(() => {
    console.log(currentUserValues);
    console.log(selectValue);
  }, [selectValue, currentUserValues]);

  return (
    <PageLayout>
      <StyledCurrentUserBox>
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, firstName: e.target.value });
          }}
          value={currentUserValues.firstName}
        />
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, lastName: e.target.value });
          }}
          value={currentUserValues.lastName}
        />
        <EditableRow
          onChange={(e) => {
            setCurrentUserValues({ ...currentUserValues, mail: e.target.value });
          }}
          value={currentUserValues.mail}
        />

        <MuiBox sx={{ minWidth: 120 }}>
          <Select
            label="Статус"
            options={STATUS_VARIANTS}
            onChange={onSelectChange}
            value={selectValue}
            id="status"
          />
        </MuiBox>
        <Button onClick={onSaveButtonClick}>Сохранить</Button>
      </StyledCurrentUserBox>
    </PageLayout>
  );
};

export default CurrentUser;
