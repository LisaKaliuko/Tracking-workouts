import styled from 'styled-components';

import { DEVICES } from '../../constants/constants';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: auto;
  margin-top: 40px;

  @media ${DEVICES.tablet} {
    width: 40%;
  }

  @media ${DEVICES.laptopL} {
    width: 25%;

    label {
      font-size: 20px;
    }

    input {
      font-size: 25px;
    }

    button {
      font-size: 25px;
    }
  }

  @media ${DEVICES.desktop} {
    h3 {
      font-size: 40px;
    }

    label {
      font-size: 30px;
    }

    input {
      font-size: 35px;
    }

    button {
      font-size: 35px;
    }
  }
`;
