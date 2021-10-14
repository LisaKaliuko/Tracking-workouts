import React, { useEffect, FC } from 'react';
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
import { Container, Item, ImageBlock, Title, Description } from './styles';

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
    <Container>
      {arrOfExercises && arrOfExercises.length !== 0
        ? arrOfExercises.map((exercise: Exercise) => {
            return (
              <Item key={exercise.id} onClick={chooseExercise(exercise)}>
                <ImageBlock>
                  <img src={exercise.img} />
                </ImageBlock>
                <div>
                  <Title>{exercise.name}</Title>
                  <Description>{exercise.description}</Description>
                </div>
                <ArrowRightExercise />
              </Item>
            );
          })
        : null}
    </Container>
  );
};

export default ExercisesList;
