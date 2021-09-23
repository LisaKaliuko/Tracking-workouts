import React from 'react';
import { useHistory } from 'react-router';

import { setWorkout } from '../../actions/actionsCreator';
import { setDataToFirestore } from '../../firebase';

const PopupForm = () => {
  const history = useHistory();

  const clickFinishWorkout = (e) => {
    e.preventDefault();
    setWorkout();
    setDataToFirestore(() => history.push('/calendar'));
  };

  const clickContinueWorkout = (e) => {
    e.preventDefault();
    history.push('/exercises');
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
