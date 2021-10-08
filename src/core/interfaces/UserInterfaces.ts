import { IDay } from './WorkoutInterfaces';

export interface IUser {
  uid: string;
  email: string;
  arrOfWorkouts: Array<IDay>;
}
