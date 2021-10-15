import styled from 'styled-components';

import { Button } from '../../shared/styles/sharedStyles';

export const ExerciseContainer = styled.div`
  text-align: center;

  margin: auto;

  width: 50%;
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 15px;

  div {
    margin: 10px;
  }
`;

export const RepeatsCircle = styled.p`
  border: 5px solid ${(props) => props.theme.exercise.repeats_circle_color};
  border-radius: 50%;

  cursor: pointer;

  font-size: 40px;

  padding: 30px 35px;
  margin: 15px;
`;

export const SetsCircle = styled(RepeatsCircle)`
  cursor: auto;
  border-color: ${(props) => props.theme.exercise.sets_circle_color};
`;

export const Form = styled.form`
  display: flex;
  width: 40%;

  margin: auto;
  margin-bottom: 25px;
`;

export const ButtonAdd = styled(Button)`
  font-size: 20px;
  font-weight: 800;

  min-width: 40px;
  height: 40px;

  margin: 0px 0px 0px 3px;
  padding: 0px;
`;
