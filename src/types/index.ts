import atlantMobile from 'src/img/atlantMobile.png';

export type IUserStatus = 'blocked' | 'active' | 'frozen';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  status: IUserStatus;
  mail: string;
  registrationDate: string;
}

export interface IUSerFormValues {
  firstName: string;
  lastName: string;
  mail: string;
}

export interface IPortfolioWork {
  work: {
    id: number;
    src: string;
    alt: string;
    title: string;
    years: string;
    url: string;
  };
}

export interface ISkill {
  name: string;
  level: number;
}

export interface IContacts {
  name: string;
  value: string;
  url: string;
}

export interface IWorks {
  src: string;
  alt: string;
  title: string;
  years: string;
  url: string;
}
