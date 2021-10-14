import React, { FC } from 'react';

import {
  selectAuthLoading,
  selectWorkoutLoading,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { LoaderContainer, LoaderItem } from './styles';

const Loader: FC = (): JSX.Element => {
  const isLoadingAuth = useTypedSelector(selectAuthLoading);
  const isLoadingWorkout = useTypedSelector(selectWorkoutLoading);

  if (isLoadingAuth || isLoadingWorkout) {
    return (
      <LoaderContainer>
        <LoaderItem></LoaderItem>
      </LoaderContainer>
    );
  }
  return <></>;
};

export default Loader;
