import React, { useEffect, useState, ChangeEvent, FormEvent, FC } from 'react';
import styled from 'styled-components';
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
import { Input, Button, Warning } from '../../styles/sharedStyles';

const ExerciseContainer = styled.div`
  text-align: center;

  margin: auto;

  width: 50%;
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 15px;

  div {
    margin: 10px;
  }
`;

const BlueCircle = styled.p`
  border: 5px solid #630da7;
  border-radius: 50%;

  cursor: pointer;

  font-size: 40px;

  padding: 30px 35px;
  margin: 15px;
`;

const RedButton = styled(BlueCircle)`
  cursor: auto;
  border-color: #f45e5e;
`;

const Form = styled.form`
  display: flex;
  width: 40%;

  margin: auto;
  margin-bottom: 25px;
`;

const ButtonAdd = styled(Button)`
  font-size: 20px;
  font-weight: 800;

  min-width: 40px;
  height: 40px;

  margin: 0px 0px 0px 3px;
  padding: 0px;
`;

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
          <img src={exercise.img} />
          {showPopup ? <PopupForm /> : null}
          <h2>{exercise.name}</h2>
          <CirclesContainer>
            <div>
              <BlueCircle onClick={addInputValue}>
                {exercise.repeats}
              </BlueCircle>
              <span>Повторений требуется</span>
            </div>
            <div>
              <RedButton>
                {doneSets}/{exercise.sets}
              </RedButton>
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
