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

export const WORKS = [
  {
    id: 1,
    src: atlantMobile,
    alt: 'изображение сайта Atlant',
    title: 'Atlant',
    years: '2021г.',
    url: 'https://chackmoole.github.io/atlant/',
  },
  {
    id: 2,
    src: catEnergyMobile,
    alt: 'изображение сайта Cat Energy',
    title: 'Cat Energy',
    years: '2022г.',
    url: 'https://chackmoole.github.io/cat-energy/index.html',
  },
  {
    id: 3,
    src: deviceMobile,
    alt: 'изображение сайта Device',
    title: 'Device',
    years: '2021г.',
    url: 'https://chackmoole.github.io/device/',
  },
  {
    id: 4,
    src: expoforumMobile,
    alt: 'изображение сайта Expoforum',
    title: 'Expoforum',
    years: '2021г.',
    url: 'https://chackmoole.github.io/expoforum/',
  },
  {
    id: 5,
    src: nerdsMobile,
    alt: 'изображение сайта Nerds',
    title: 'Nerds',
    years: '2019г.',
    url: 'https://chackmoole.github.io/nerds/',
  },
  {
    id: 6,
    src: portfolioMobile,
    alt: 'изображение сайта Портфолио',
    title: 'Портфолио',
    years: '2021г.',
    url: 'https://chackmoole.github.io/portfolio-example/',
  },
];

export const SKILLS = [
  {
    name: 'Figma',
    level: 90,
  },
  {
    name: 'HTML',
    level: 80,
  },
  {
    name: 'CSS',
    level: 70,
  },
  {
    name: 'JS',
    level: 45,
  },
  {
    name: 'React',
    level: 40,
  },
  {
    name: 'Redux',
    level: 15,
  },
  {
    name: 'Less/SASS',
    level: 70,
  },
  {
    name: 'Styled-components',
    level: 40,
  },
  {
    name: 'Material-ui',
    level: 40,
  },
];

export const CONTACTS = [
  {
    name: 'Телефон',
    value: '+7(960)735-72-98',
    url: 'tel:+79607357298',
  },

  { name: 'Telegram', value: 'https://t.me/chackmool21', url: 'https://t.me/chackmool21' },
  {
    name: 'Github',
    value: 'https://github.com/Chackmoole',
    url: 'https://github.com/Chackmoole',
  },
  {
    name: 'Хабр',
    value: 'https://career.habr.com/chackmool',
    url: 'https://career.habr.com/chackmool',
  },
];
