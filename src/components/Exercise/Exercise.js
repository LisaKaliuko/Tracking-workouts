import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { setExercise } from '../../actions/actionsCreator';
import { setWorkout } from '../../actions/actionsCreator';
import PopupForm from '../PopupForm/PopupForm';
import './exercise.css';

const Exercise = () => {
  const history = useHistory();
  const arrOfExercises = useSelector((state) => state.workout.arrOfExercises);
  const exercise = useSelector((state) => state.workout.exercise);
  const [doneRepeats, setDoneRepeats] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isError, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (doneRepeats >= exercise.repeats * exercise.sets) {
      const indexOfCurrentExercise = arrOfExercises.indexOf(exercise);
      if (indexOfCurrentExercise !== arrOfExercises.length - 1) {
        const url = `/exercises:${
          arrOfExercises[indexOfCurrentExercise + 1].id
        }`;
        setExercise(arrOfExercises[indexOfCurrentExercise + 1]);
        setDoneRepeats('');
        history.push(url);
      } else {
        setShowPopup(true);
        setWorkout();
      }
    }
  }, [doneRepeats]);

  return (
    <div className="exercise_container w-50 m-auto">
      {exercise.img ? (
        <img src={exercise.img} />
      ) : (
        <p>Извините, картинки нет</p>
      )}
      {showPopup ? <PopupForm /> : null}
      <h2>{exercise.name}</h2>
      <div className="exercise_round_container">
        <div>
          <p
            className="exercise_round"
            onClick={() => {
              setInputValue(exercise.repeats);
            }}
          >
            {exercise.repeats}
          </p>
          <span>Повторений требуется</span>
        </div>
        <div>
          <p className="exercise_round border-red">
            {Math.trunc(doneRepeats / exercise.repeats)}/{exercise.sets}
          </p>
          <span>Подходов выполнено</span>
        </div>
      </div>
      {isError ? <p className="text-danger">{isError}</p> : null}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Повторений"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary btn-blue"
            type="button"
            onClick={() => {
              if (Number(inputValue)) {
                setDoneRepeats(+doneRepeats + +inputValue);
                setError('');
              } else {
                setError('Пожалуйста введите число');
              }
              setInputValue('');
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
