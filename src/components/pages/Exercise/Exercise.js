import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import PopupForm from '../../PopupForm/PopupForm';
import { firestore } from '../../../index';
import {
  selectCategory,
  selectExercise,
} from '../../../core/selectors/selectors';
import {
  setExerciseAction,
  setLoadingAction,
} from '../../../core/actions/actionsCreator';
import './exercise.css';

const Exercise = () => {
  const category = useSelector(selectCategory);
  const exercise = useSelector(selectExercise);
  const [arrOfExercises, setArrOfExercises] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [doneSets, setDoneSets] = useState(0);
  const [isError, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(setLoadingAction(true));
    if (category) {
      firestore
        .collection('exercises')
        .where('categoryId', '==', category.id)
        .get()
        .then((snapshot) => {
          setArrOfExercises(snapshot.docs.map((doc) => ({ ...doc.data() })));
        })
        .then(() => dispatch(setLoadingAction(false)));
    }

    return () => {
      setArrOfExercises([]);
    };
  }, [category, dispatch]);

  useEffect(() => {
    if (exercise) {
      if (doneSets === exercise.sets) {
        const indexOfCurrentExercise = arrOfExercises.findIndex(
          (item) => item.id === exercise.id
        );

        if (indexOfCurrentExercise !== arrOfExercises.length - 1) {
          const url = `/exercises:${
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
    setInputValue(exercise.repeats);
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addSet = (e) => {
    e.preventDefault();
    if (Number(inputValue)) {
      setDoneSets(doneSets + 1);
      setError('');
    } else {
      setError('Пожалуйста введите число');
    }
    setInputValue('');
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
