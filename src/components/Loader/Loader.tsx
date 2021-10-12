import React, { FC } from 'react';

import {
  selectAuthLoading,
  selectWorkoutLoading,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import './loader.css';

const Loader: FC = (): JSX.Element => {
  const isLoadingAuth = useTypedSelector(selectAuthLoading);
  const isLoadingWorkout = useTypedSelector(selectWorkoutLoading);

  if (isLoadingAuth || isLoadingWorkout) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return <></>;
};

export default Loader;
