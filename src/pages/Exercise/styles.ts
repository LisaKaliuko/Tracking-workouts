import styled from 'styled-components';

import { Button } from '../../shared/styles/sharedStyles';
import { DEVICES } from '../../constants/constants';

export const ExerciseContainer = styled.div`
  text-align: center;

  margin: auto;

  width: 95%;

  @media ${DEVICES.tablet} {
    width: 80%;
  }

  @media ${DEVICES.laptop} {
    width: 65%;
  }

  @media ${DEVICES.laptopL} {
    width: 60%;

    h2 {
      font-size: 50px;
    }
  }

  img {
    width: 90%;

    @media ${DEVICES.desktop} {
      width: 75%;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 15px;

  div {
    margin: 10px;
  }

  @media ${DEVICES.desktop} {
    span {
      font-size: 35px;
    }
  }
`;

export const RepeatsCircle = styled.p`
  border: 5px solid ${(props) => props.theme.exercise.repeats_circle_color};
  border-radius: 50%;

  cursor: pointer;

  font-size: 25px;

  padding: 25px;
  margin: 15px;

  @media ${DEVICES.mobileM} {
    font-size: 40px;
  }

  @media ${DEVICES.tablet} {
    padding: 30px;
  }

  @media ${DEVICES.desktop} {
    font-size: 78px;
    padding: 90px 45px;
  }
`;

export const SetsCircle = styled(RepeatsCircle)`
  cursor: auto;
  border-color: ${(props) => props.theme.exercise.sets_circle_color};

  @media ${DEVICES.desktop} {
    padding: 90px 45px;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 80%;

  margin: auto;
  margin-bottom: 25px;

  @media ${DEVICES.tablet} {
    width: 60%;
  }

  @media ${DEVICES.laptopL} {
    width: 40%;
  }

  @media ${DEVICES.desktop} {
    input {
      font-size: 55px;
    }
  }
`;

export const ButtonAdd = styled(Button)`
  font-size: 20px;
  font-weight: 800;

  min-width: 40px;
  height: 40px;

  margin: 0px 0px 0px 3px;
  padding: 0px;

  @media ${DEVICES.desktop} {
    font-size: 55px; 

    min-width: 93px;
    height: 93px;
`;
