import styled from 'styled-components';

import { Button } from '../../shared/styles/sharedStyles';
import { DEVICES } from '../../constants/constants';

export const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border: 1px solid ${(prop) => prop.theme.popup.border};
  background-color: ${(prop) => prop.theme.popup.bgColor};

  width: 90%;

  padding: 3rem 0rem;
  margin: auto;

  @media ${DEVICES.tablet} {
    width: 70%;
  }

  @media ${DEVICES.laptop} {
    width: 50%;
  }

  @media ${DEVICES.desktop} {
    width: 35%;
  }
`;

export const Title = styled.h3`
  margin: 1rem 0;

  @media ${DEVICES.desktop} {
    font-size: 45px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopupButton = styled(Button)`
  margin: 0px 20px;

  width: 75px;

  @media ${DEVICES.laptopL} {
    width: 105px;

    font-size: 25px;
  }
`;
