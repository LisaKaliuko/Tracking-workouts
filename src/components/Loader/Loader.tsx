import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import {
  selectAuthLoading,
  selectWorkoutLoading,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';

const LoaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 9999;

  background-color: #ffffff;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderItem = styled.div`
  display: block;
  width: 100px;
  height: 100px;

  position: absolute;
  top: 50%;
  left: 50%;

  border: 16px solid #f3f3f3;
  border-top: 16px solid #424242;
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;

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
