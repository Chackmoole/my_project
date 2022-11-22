export type IUserStatus = 'all' | 'blocked' | 'active' | 'frozen';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  status: IUserStatus;
  mail: string;
  registrationDate: string;
}

export interface IUSerFormValue {
  firstName: string;
  lastName: string;
  mail: string;
}
