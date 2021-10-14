import styled from 'styled-components';

import { Button } from '../../styles/sharedStyles';

export const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border: 1px solid #6c757d;
  background-color: #e6e6e6;

  width: 50%;

  padding: 3rem 0rem;
  margin: auto;
`;

export const Title = styled.h3`
  margin: 1rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopupButton = styled(Button)`
  margin: 0px 20px;

  width: 75px;
`;
