import { IUser } from 'src/types';

export const USERS: IUser[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Иванов',
    status: 'active',
    mail: 'ivanov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 2,
    firstName: 'Петр',
    lastName: 'Петров',
    status: 'active',
    mail: 'petrov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 3,
    firstName: 'Лаврентий',
    lastName: 'Сидоров',
    status: 'blocked',
    mail: 'sidorov@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 4,
    firstName: 'Матвей',
    lastName: 'Матвеев',
    status: 'active',
    mail: 'matveev@project.org',
    registrationDate: '2022.10.10',
  },
  {
    id: 5,
    firstName: 'Игнат',
    lastName: 'Игнатов',
    status: 'frozen',
    mail: 'ignatov@project.org',
    registrationDate: '2022.10.10',
  },
];

export const STATUS_TITLE = {
  all: 'Все',
  active: 'Активный',
  blocked: 'Заблокирован',
  frozen: 'Заморожен',
};

export const STATUS_OPTIONS = [
  {
    label: 'Все',
    value: null,
  },
  {
    label: STATUS_TITLE['active'],
    value: 'active',
  },
  {
    label: STATUS_TITLE['frozen'],
    value: 'frozen',
  },
  {
    label: STATUS_TITLE['blocked'],
    value: 'blocked',
  },
];

export const STATUS_VARIANTS = [
  {
    label: STATUS_TITLE['active'],
    value: 'active',
  },
  {
    label: STATUS_TITLE['frozen'],
    value: 'frozen',
  },
  {
    label: STATUS_TITLE['blocked'],
    value: 'blocked',
  },
];
