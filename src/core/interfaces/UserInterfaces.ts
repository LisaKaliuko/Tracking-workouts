import { Day } from './WorkoutInterfaces';

export interface User {
  uid: string;
  email: string;
  arrOfWorkouts: Array<Day>;
}
