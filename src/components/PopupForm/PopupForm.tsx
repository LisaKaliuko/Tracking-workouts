import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { addNewWorkoutDay } from '../../core/actions/UserActions';
import {
  selectArrOfWorkouts,
  selectCurrentDate,
  selectUser,
} from '../../core/selectors/selectors';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { pathes } from '../../constants/constants';

const PopupForm: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const date = useTypedSelector(selectCurrentDate);
  const user = useTypedSelector(selectUser);
  const arrOfWorkouts = useTypedSelector(selectArrOfWorkouts);

  const clickFinishWorkout = (e: MouseEvent) => {
    e.preventDefault();
    if (date && user.email && arrOfWorkouts) {
      dispatch(
        addNewWorkoutDay(user.email, arrOfWorkouts, date, () =>
          history.push(pathes.CALENDAR)
        )
      );
    }
  };

  const clickContinueWorkout = (e: MouseEvent) => {
    e.preventDefault();
    history.push(pathes.EXERCISES_LIST);
  };

  return (
    <form className="position-fixed fixed-top start-50 top-50 translate-middle py-5 border border-secondary bg-light w-50 m-auto">
      <h3 className="m-3">Закончить тренировку?</h3>
      <div>
        <button
          className="btn btn-primary m-3 px-4"
          onClick={clickFinishWorkout}
        >
          Да
        </button>
        <button
          className="btn btn-primary m-3 px-4"
          onClick={clickContinueWorkout}
        >
          Нет
        </button>
      </div>
    </form>
  );
};

export default PopupForm;
