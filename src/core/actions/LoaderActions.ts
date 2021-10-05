import { createAction } from '@reduxjs/toolkit';

export enum LoaderActionTypes {
  LOADER = '[LOADER] LOADER',
}

export const setLoadingAction = createAction(
  LoaderActionTypes.LOADER,
  (bool: boolean) => ({ payload: { isLoading: bool } })
);
