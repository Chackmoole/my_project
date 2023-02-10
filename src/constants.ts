import atlantMobile from 'src/img/atlantMobile.png';
import catEnergyMobile from 'src/img/catEnergyMobile.png';
import deviceMobile from 'src/img/deviceMobile.png';
import expoforumMobile from 'src/img/expoforumMobile.png';
import nerdsMobile from 'src/img/nerdsMobile.png';
import portfolioMobile from 'src/img/portfolioMobile.png';
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

export const works = [
  {
    id: 1,
    src: atlantMobile,
    alt: 'изображение сайта Atlant',
    title: 'Atlant',
    years: '2021г.',
  },
  {
    id: 2,
    src: catEnergyMobile,
    alt: 'изображение сайта Cat Energy',
    title: 'Cat Energy',
    years: '2022г.',
  },
  {
    id: 3,
    src: deviceMobile,
    alt: 'изображение сайта Device',
    title: 'Device',
    years: '2021г.',
  },
  {
    id: 4,
    src: expoforumMobile,
    alt: 'изображение сайта Expoforum',
    title: 'Expoforum',
    years: '2021г.',
  },
  {
    id: 5,
    src: nerdsMobile,
    alt: 'изображение сайта Nerds',
    title: 'Nerds',
    years: '2019г.',
  },
  {
    id: 6,
    src: portfolioMobile,
    alt: 'изображение сайта Портфолио',
    title: 'Портфолио',
    years: '2021г.',
  },
];
