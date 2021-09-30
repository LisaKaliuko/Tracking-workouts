import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import PopupForm from '../../PopupForm/PopupForm';
import { firestore } from '../../../index';
import {
  selectCategory,
  selectExercise,
} from '../../../core/selectors/selectors';
import { setExercise, setLoading } from '../../../core/actions/actionsCreator';
import './exercise.css';

const Exercise = () => {
  const category = useSelector(selectCategory);
  const exercise = useSelector(selectExercise);
  const [arrOfExercises, setArrOfExercises] = useState([]);
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');
  const [doneRepeats, setDoneRepeats] = useState(0);
  const [isError, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (category) {
      firestore
        .collection('exercises')
        .where('categoryId', '==', category.id)
        .get()
        .then((snapshot) => {
          setArrOfExercises(snapshot.docs.map((doc) => ({ ...doc.data() })));
        })
        .then(() => setLoading(false));
    }

    return () => {
      setArrOfExercises([]);
    };
  }, [category]);

  useEffect(() => {
    if (exercise) {
      if (doneRepeats >= exercise.repeats * exercise.sets) {
        const indexOfCurrentExercise = arrOfExercises.findIndex(
          (item) => item.id === exercise.id
        );

        if (indexOfCurrentExercise !== arrOfExercises.length - 1) {
          const url = `/exercises:${
            arrOfExercises[indexOfCurrentExercise + 1].id
          }`;
          setExercise(arrOfExercises[indexOfCurrentExercise + 1]);
          setDoneRepeats('');
          history.push(url);
        } else {
          setShowPopup(true);
        }
      }
    }
  }, [exercise, doneRepeats, arrOfExercises, history]);

  const addInputValue = () => {
    setInputValue(exercise.repeats);
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addDoneRepeats = () => {
    if (Number(inputValue)) {
      setDoneRepeats(+doneRepeats + +inputValue);
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
              onChange={changeInputValue}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary btn-blue"
                type="button"
                onClick={addDoneRepeats}
              >
                +
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Exercise;
