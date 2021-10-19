import React, { useEffect, useState, ChangeEvent, FormEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import PopupForm from '../../components/PopupForm/PopupForm';
import { Exercise as ExerciseType } from '../../core/interfaces/WorkoutInterfaces';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import {
  selectCurrentExercise,
  selectExercises,
} from '../../core/selectors/selectors';
import { setExerciseAction } from '../../core/actions/WorkoutActions';
import { PATHES } from '../../constants/constants';
import { Input, Warning } from '../../shared/styles/sharedStyles';
import {
  ExerciseContainer,
  CirclesContainer,
  RepeatsCircle,
  SetsCircle,
  Form,
  ButtonAdd,
} from './styles';

const Exercise: FC = (): JSX.Element => {
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
          (item: ExerciseType) => item.id === exercise.id
        );

        if (indexOfCurrentExercise !== arrOfExercises.length - 1) {
          const url = `${PATHES.EXERCISES_LIST}:${
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
    <ExerciseContainer>
      {exercise ? (
        <>
          <img src={exercise?.img} />
          {showPopup ? <PopupForm /> : null}
          <h2>{exercise?.name}</h2>
          <CirclesContainer>
            <div>
              <RepeatsCircle onClick={addInputValue}>
                {exercise?.repeats}
              </RepeatsCircle>
              <span>Повторений требуется</span>
            </div>
            <div>
              <SetsCircle>
                {doneSets}/{exercise?.sets}
              </SetsCircle>
              <span>Подходов выполнено</span>
            </div>
          </CirclesContainer>
          {isError ? <Warning>{isError}</Warning> : null}
          <Form onSubmit={addSet}>
            <Input
              type="text"
              placeholder="Повторений"
              value={inputValue}
              onChange={changeInputValue}
            />
            <ButtonAdd type="submit">+</ButtonAdd>
          </Form>
        </>
      ) : null}
    </ExerciseContainer>
  );
};

export default Exercise;
