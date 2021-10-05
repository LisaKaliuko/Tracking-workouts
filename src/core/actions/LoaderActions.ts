import { createAction } from '@reduxjs/toolkit';

enum LoaderActionTypes {
  LOADER = '[LOADER] LOADER',
}

export const setLoadingAction = createAction(
  LoaderActionTypes.LOADER,
  (bool: boolean) => ({ payload: { isLoading: bool } })
);
