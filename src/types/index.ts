export type IUserStatus = 'blocked' | 'active' | 'frozen';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  status: IUserStatus;
  mail: string;
  registrationDate: string;
}
