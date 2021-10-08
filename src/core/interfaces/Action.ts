import { Action as ReduxAction } from 'redux';

export interface Action<T> extends ReduxAction<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
