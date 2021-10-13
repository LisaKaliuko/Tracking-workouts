import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
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
import { PATHES } from '../../constants/constants';

const ExercisesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 10px 30px;
`;

const ExerciseItem = styled.div`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: #000000;
  cursor: pointer;

  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  margin: 20px;
  padding: 15px;

  img {
    width: 130px;
  }
`;

const TextBlock = styled.div`
  margin-left: -63px;
  padding: 7px 0px;
  background-color: #ffffff;
`;

const ExerciseTitle = styled.p`
  font-size: 18px;

  margin-bottom: 5px;
`;

const ExerciseDescription = styled.p`
  color: #c4c4c4;
  font-size: 14px;

  margin-bottom: 5px;
`;

const ExercisesList: FC = (): JSX.Element => {
  const category = useTypedSelector(selectCurrentCategory);
  const arrOfExercises = useTypedSelector(selectExercises);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(getExercises(category));
  }, [category, dispatch]);

  const chooseExercise = (exercise: Exercise) => () => {
    dispatch(setExerciseAction(exercise));
    const url = `${PATHES.EXERCISES_LIST}:${exercise.id}`;
    history.push(url);
  };

  return (
    <ExercisesContainer>
      {arrOfExercises && arrOfExercises.length !== 0
        ? arrOfExercises.map((exercise: Exercise) => {
            return (
              <ExerciseItem
                key={exercise.id}
                onClick={chooseExercise(exercise)}
              >
                <img src={exercise.img} />
                <TextBlock>
                  <ExerciseTitle>{exercise.name}</ExerciseTitle>
                  <ExerciseDescription>
                    {exercise.description}
                  </ExerciseDescription>
                </TextBlock>
                <ArrowRightExercise />
              </ExerciseItem>
            );
          })
        : null}
    </ExercisesContainer>
  );
};

export default ExercisesList;
