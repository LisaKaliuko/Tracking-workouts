import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import PopupForm from '../../components/PopupForm/PopupForm';
import { Exercise as ExerciseType } from '../../core/actions/WorkoutActions';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { firestore } from '../../index';
import { selectCategory, selectExercise } from '../../core/selectors/selectors';
import { setExerciseAction } from '../../core/actions/WorkoutActions';
import { setLoadingAction } from '../../core/actions/LoaderActions';
import { pathes } from '../../constants/constants';
import './exercise.css';

const Exercise = (): JSX.Element => {
  const category = useTypedSelector(selectCategory);
  const exercise = useTypedSelector(selectExercise);
  const [arrOfExercises, setArrOfExercises] = useState<Array<ExerciseType>>([]);
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
        .then((snapshot: any) => {
          console.log('typeof snapshot', typeof snapshot);
          console.log('snapshot', snapshot);
          setArrOfExercises(
            snapshot.docs.map((doc: any) => ({ ...doc.data() }))
          );
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
          (item: ExerciseType) => item.id === exercise.id
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
    setInputValue(exercise.repeats);
  };

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addSet = (e: FormEvent) => {
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
