import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import PopupForm from '../../components/PopupForm/PopupForm';
import { IExercise } from '../../core/interfaces/WorkoutInterfaces';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import {
  selectCurrentExercise,
  selectExercises,
} from '../../core/selectors/selectors';
import { setExerciseAction } from '../../core/actions/WorkoutActions';
import { pathes } from '../../constants/constants';
import './exercise.css';

const Exercise: React.FC = (): JSX.Element => {
  const exercise = useTypedSelector(selectCurrentExercise);
  const arrOfExercises = useTypedSelector(selectExercises);
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);
  const [doneSets, setDoneSets] = useState(0);
  const [isError, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (exercise && arrOfExercises) {
      if (doneSets === exercise.sets) {
        const indexOfCurrentExercise = arrOfExercises.findIndex(
          (item: IExercise) => item.id === exercise.id
        );

        if (indexOfCurrentExercise !== arrOfExercises.length - 1) {
          const url = `${pathes.EXERCISES_LIST}:${
            arrOfExercises[indexOfCurrentExercise + 1].id
          }`;
          dispatch(
            setExerciseAction(arrOfExercises[indexOfCurrentExercise + 1])
          );
          setDoneSets(0);
          history.push(url);
        } else {
          setShowPopup(true);
        }
      }
    }
  }, [exercise, arrOfExercises, history, doneSets, dispatch]);

  const addInputValue = () => {
    if (exercise) setInputValue(exercise.repeats);
  };

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
    if (!+e.target.value) {
      setError('Пожалуйста введите число');
      setInputValue(0);
    }
  };

  const addSet = (e: FormEvent) => {
    e.preventDefault();
    if (Number(inputValue)) {
      setDoneSets(doneSets + 1);
      setError('');
    } else {
      setError('Пожалуйста введите число');
    }
    setInputValue(0);
  };

  return (
    <div className="exercise_container w-50 m-auto">
      {exercise ? (
        <>
          <img src={exercise.img} />
          {showPopup ? <PopupForm /> : null}
          <h2>{exercise.name}</h2>
          <div className="exercise_round_container">
            <div>
              <p className="exercise_round" onClick={addInputValue}>
                {exercise.repeats}
              </p>
              <span>Повторений требуется</span>
            </div>
            <div>
              <p className="exercise_round border-red">
                {doneSets}/{exercise.sets}
              </p>
              <span>Подходов выполнено</span>
            </div>
          </div>
          {isError ? <p className="text-danger">{isError}</p> : null}
          <form onSubmit={addSet} className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Повторений"
              value={inputValue}
              onChange={changeInputValue}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary btn-blue"
                type="submit"
              >
                +
              </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default Exercise;
