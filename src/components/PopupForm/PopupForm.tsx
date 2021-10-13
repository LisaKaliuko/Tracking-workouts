import React, { MouseEvent, FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { addWorkoutDay } from '../../core/actions/UserActions';
import {
  selectArrOfWorkouts,
  selectCurrentDate,
  selectUser,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { PATHES } from '../../constants/constants';
import { Button } from '../../styles/sharedStyles';

const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border: 1px solid #6c757d;
  background-color: #e6e6e6;

  width: 50%;

  padding: 3rem 0rem;
  margin: auto;
`;

const Title = styled.h3`
  margin: 1rem 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PopupButton = styled(Button)`
  margin: 0px 20px;

  width: 75px;
`;

const PopupForm: FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const date = useTypedSelector(selectCurrentDate);
  const user = useTypedSelector(selectUser);
  const arrOfWorkouts = useTypedSelector(selectArrOfWorkouts);

  const clickFinishWorkout = (e: MouseEvent) => {
    e.preventDefault();
    if (date && user.email && arrOfWorkouts) {
      dispatch(
        addWorkoutDay({
          email: user.email,
          arr: arrOfWorkouts,
          date: date,
          cb: () => history.push(PATHES.CALENDAR),
        })
      );
    }
  };

  const clickContinueWorkout = (e: MouseEvent) => {
    e.preventDefault();
    history.push(PATHES.EXERCISES_LIST);
  };

  return (
    <Form>
      <Title>Закончить тренировку?</Title>
      <ButtonsContainer>
        <PopupButton onClick={clickFinishWorkout}>Да</PopupButton>
        <PopupButton onClick={clickContinueWorkout}>Нет</PopupButton>
      </ButtonsContainer>
    </Form>
  );
};

export default PopupForm;
