import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Exercise } from '../../core/interfaces/WorkoutInterfaces';
import {
  selectCurrentCategory,
  selectExercises,
} from '../../core/selectors/selectors';
import { ArrowRightExercise } from '../../shared/icons/icons';
import {
  setExerciseAction,
  getExercises,
} from '../../core/actions/WorkoutActions';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { pathes } from '../../constants/constants';
import './exercisesList.css';

const ExercisesList: React.FC = (): JSX.Element => {
  const category = useTypedSelector(selectCurrentCategory);
  const arrOfExercises = useTypedSelector(selectExercises);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(getExercises(category.id));
  }, [category, dispatch]);

  const chooseExercise = (exercise: Exercise) => () => {
    dispatch(setExerciseAction(exercise));
    const url = `${pathes.EXERCISES_LIST}:${exercise.id}`;
    history.push(url);
  };

  return (
    <div className="exercises_container">
      {arrOfExercises && arrOfExercises.length !== 0
        ? arrOfExercises.map((exercise: Exercise) => {
            return (
              <div
                className="exercises_item"
                key={exercise.id}
                onClick={chooseExercise(exercise)}
              >
                <img src={exercise.img} className="exercises_item-img" />
                <div className="exercises_item-text">
                  <p className="exercises_item-text-title">{exercise.name}</p>
                  <p className="exercises_item-text-sets">
                    {exercise.description}
                  </p>
                </div>
                <ArrowRightExercise />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ExercisesList;
