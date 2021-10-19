import React, { MouseEvent, FC } from 'react';
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
import { Form, Title, ButtonsContainer, PopupButton } from './styles';

const PopupForm: FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const date = useTypedSelector(selectCurrentDate);
  const user = useTypedSelector(selectUser);
  const arrOfWorkouts = useTypedSelector(selectArrOfWorkouts);

  const clickFinishWorkout = (e: MouseEvent) => {
    e.preventDefault();
    if (date && user?.email && arrOfWorkouts) {
      dispatch(
        addWorkoutDay({
          email: user?.email,
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
